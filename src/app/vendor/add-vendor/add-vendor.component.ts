import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { NzMessageService,UploadFile } from 'ng-zorro-antd';
import { HttpRequest, HttpResponse } from '@angular/common/http';
declare var google: any
@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  map: any;
  Latitude: number;
  Longitude: number;
  markers = [];
  Address: string;
  isAdding: boolean;
  fileList = []
  previewVisible = false;
  previewImage: string | undefined = '';
  loading: boolean = false;
  ImageID: any;
  constructor(private _appService: AppService,
    private nzMessageService: NzMessageService) { }
  ngOnInit() {
    setTimeout(() => {
      this.onMapIntilized()
    }, 1000);
  }
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

  beforeUpload = (file: UploadFile): boolean => {
      if (!(file.type == 'image/jpeg' || file.type == 'image/png')) {
        this.nzMessageService.error('You can only upload JPG And PNG file!');
        return;
      }
    this.fileList = this.fileList.concat(file);
    this.loading = true
    this.Imageupload(file)
    return false;

  }
  Imageupload(file) {
    const formData = new FormData();
    formData.append('image', file);
    const req = new HttpRequest('POST', this._appService.ImageUpload_Url + 'Upload_Image', formData, {
    });
      this._appService.onImageUpload(req).subscribe((resp: any) => {
        if (resp instanceof HttpResponse) {
          console.log(resp)
          this.ImageID = resp.body.extras.ImageID
          this.loading = false
          this.fileList = []
          this.fileList.push({
            uid: -1,
            name: 'pancard.png',
            status: 'done',
            url: resp.body.extras.Image50,
            ImageOriginal: resp.body.extras.ImageOriginal
          })
        } else {
        }
      })
  }

  onSubmitVendor(vendorForm: NgForm) {
    this.isAdding = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Introducer_Name: vendorForm.value.Introducer_Name,
      Introducer_CountryCode: '+91',
      Introducer_PhoneNumber: vendorForm.value.Introducer_PhoneNumber,
      Shop_Name: vendorForm.value.Shop_Name,
      Shop_CountryCode: '+91',
      Shop_PhoneNumber: vendorForm.value.Shop_PhoneNumber,
      Latitude: this.Latitude,
      Longitude: this.Longitude,
      Address: this.Address,
      GST_Number: vendorForm.value.GST_Number,
      Introducer_PAN: vendorForm.value.Introducer_PAN,
      ImageID: this.ImageID
    }
    try {
      this._appService.postMethod('Create_Shop', body)
        .subscribe(resp => {
          if (resp.success) {
            this.isAdding = false
            this.fileList = []
            this.clearMarkers()
            vendorForm.reset()
            this.nzMessageService.success('Vendor Added sucessfully')

          } else {
            this.isAdding = false
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }
  }
  onMapIntilized() {

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 17.4471, lng: 78.454 },
      zoom: 14,

      fullscreenControl: true
    });
    var card = document.getElementById('pac-card');
    var input = document.getElementById('pac-input');
    var types = document.getElementById('type-selector');
    this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.bindTo('bounds', this.map);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(
      ['address_components', 'geometry', 'icon', 'name']);

    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    // var marker = new google.maps.Marker({
    //   map: this.map,
    //   draggable: true,
    //   anchorPoint: new google.maps.Point(0, -29)
    // });

    autocomplete.addListener('place_changed', () => {
      infowindow.close();
      // marker.setVisible(true);
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      } else {
        this.Latitude = place.geometry.location.lat()
        this.Longitude = place.geometry.location.lng()
      }
      this.clearMarkers()
      var location = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
      this.addMarker(location)
      this.setMapOnAll(this.map)
      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        //this.map.fitBounds(place.geometry.viewport);
      } else {
        this.map.setCenter(place.geometry.location);

        this.map.setZoom(17);  // Why 17? Because it looks good.
      }
      //marker.setPosition(place.geometry.location);
      //marker.setVisible(true);
      var address = '';
      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
        this.Address = address
      }


    });
    // google.maps.event.addListener( marker,'dragend', (event) => {
    //   this.geocodePosition(marker.getPosition());
    // });

  }
  addMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: this.map,
      draggable: true,
    });
    this.markers.push(marker);
  }
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
      google.maps.event.addListener(this.markers[i], 'dragend', (event) => {
        // console.log(event.latLng.lat()); // this will give correct index
        var location = { lat: event.latLng.lat(), lng: event.latLng.lng() }
        this.geocodePosition(location);

      });
    }
  }
  clearMarkers() {
    this.setMapOnAll(null);
    this.markers = []
  }
  geocodePosition(pos) {
    // console.log(pos.lat)
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'location': pos }, (results, status) => {
      // console.log(status)
      // console.log(results)
      if (status === 'OK') {
        this.Latitude = pos.lat
        this.Longitude = pos.lng
        this.Address = results[0].formatted_address

        //  console.log(this.driverAddress)
      }
    })
    // geocoder.geocode({
    //   latLng: pos
    // }, (responses) => {
    //   if (responses && responses.length > 0) {
    //     this.zoneLat = pos.lat()
    //     this.zoneLng = pos.lng()
    //     this.driverAddress = responses[0].formatted_address
    //     this.driverRegistrationForm.patchValue({ Address: responses[0].formatted_address })

    //   } else {
    //   }
    // });
  }

}
