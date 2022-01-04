import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService, UploadFile, UploadXHRArgs } from 'ng-zorro-antd';
import { AppService } from 'src/app/app.service';
import { HttpRequest, HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
declare var google: any
@Component({
  selector: 'app-add-plots',
  templateUrl: './add-plots.component.html',
  styleUrls: ['./add-plots.component.css']
})
export class AddPlotsComponent implements OnInit {
  // map: any;
  lat_marker = 17.7837;
  lng_market = 78.736;
  plotCreationForm: FormGroup;
  plotImagesList = [];
  plotFileList = []
  companyImagesList = []
  plotImagesListForNZ = [];
  plotDocListForNZ: any[];
  comapnyListForNz: any[];
  uploadingType: number;
  uploadLimit = 0
  plotAddress: string;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
   
    private nzMessageService: NzMessageService,
    private _appService: AppService) { }
  ngOnInit() {
    this.plotCreationForm = this.fb.group({
      Company_Name: [null, [Validators.required]],
      Plot_Name: [null, [Validators.required]],
      Description: [null, [Validators.required]],
      googleAddress: [null, [Validators.required]],
    });
  }
  ngAfterViewInit(): void {
    this.onMapIntilized()
  }
  onSubmitPlot() {
    let imagesarray = []
    console.log(this.plotImagesList)
    console.log(`this.companyImagesList[0].ImageID`, this.companyImagesList[0].ImageID)
    console.log(`this.plotFileList[0].FileID`, this.plotFileList[0].FileID)
    this.plotImagesList.forEach(item => {
      imagesarray.push(item.ImageID)
    })
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))   
     let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Plot_Name: this.plotCreationForm.value.Plot_Name,
      Company_Name: this.plotCreationForm.value.Company_Name,
      Description: this.plotCreationForm.value.Description,
      Latitude: this.lat_marker,
      Longitude: this.lng_market,
      Address: this.plotAddress,
      All_ImageID_Array: imagesarray,
      ImageID: this.companyImagesList[0].ImageID,
      FileID: this.plotFileList[0].FileID
    }
    try {

      this._appService.postMethod('Create_Plot', body)
        .subscribe(resp => {
          if (resp.success) {
            this.nzMessageService.success('plot created')
            this.plotCreationForm.reset()
            this.companyImagesList = []
            this.plotImagesList = []
            this.plotFileList = []

            this.plotImagesListForNZ = []
            this.plotDocListForNZ = []
            this.comapnyListForNz = []
            this.plotAddress = ''

          }
          this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
        },
          error => {

          })
    } catch (e) { }
  }
  onMapIntilized() {

    var input = document.getElementById('pac-input');
    //this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
    var autocomplete = new google.maps.places.Autocomplete(input);

    // autocomplete.bindTo('bounds', this.map);

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
        this.lat_marker = place.geometry.location.lat()
        this.lng_market = place.geometry.location.lng()
      }

      // If the place has a geometry, then present it on a map.

      //marker.setPosition(place.geometry.location);
      //marker.setVisible(true);
      var address = '';
      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
        this.plotAddress = address
      }


    });
    // google.maps.event.addListener( marker,'dragend', (event) => {
    //   this.geocodePosition(marker.getPosition());
    // });

  }
  onRemove = (item: UploadFile) => {
    let index = this.plotImagesList.findIndex(data => data.uid == item.uid)
    this.plotImagesList.splice(index, 1)
    this.plotImagesListForNZ = this.plotImagesList
    console.log(this.plotImagesList)
  }
  ondragEnd(event) {
    console.log(event.coords.lat)
    this.lat_marker = event.coords.lat
    this.lng_market = event.coords.lng
    console.log(`${this.lat_marker}`)
  }
  onCustRequ(type: number) {
    this.uploadingType = type
    if (this.uploadingType == 1) {
      this.uploadLimit = 0
    }
    else if (type == 2 || type == 3) {
      this.uploadLimit = 1
    }
  }
  customReq = (item: UploadXHRArgs) => {
    console.log('updlaosdaf', this.uploadingType)
    const formData = new FormData();
    let url = ''
    if (this.uploadingType == 1 || this.uploadingType == 3) {
      console.log('enter to image')
      url = this._appService.imageurl
      formData.append('image', item.file as any);
    }
    else if (this.uploadingType == 2) {
      url = this._appService.fileUrl
      console.log('enter to file')
      formData.append('file', item.file as any);
    }
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      withCredentials: false
    });
    return this.http.request(req).subscribe(
      (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total! > 0) {
            (event as any).percent = (event.loaded / event.total!) * 100;
          }
          item.onProgress!(event, item.file!);
        } else if (event instanceof HttpResponse) {
          item.onSuccess!(event.body, item.file!, event);
          this.nzMessageService.success('upload successfully.');
          if (this.uploadingType == 1) {
            var url = event.body.extras.Image550
            console.log(event.body.extras.ImageOriginal)
            this.plotImagesList.push({
              uid: item.file.uid,
              name: item.file.name,
              status: 'done',
              url: url,
              thumbUrl: url,
              ImageID: event.body.extras.ImageID
            })
            console.log('before ', this.plotImagesList)
            this.plotImagesListForNZ = this.plotImagesList;
            console.log('after ', this.plotImagesList)
          }
          else if (this.uploadingType == 2) {
            var url = event.body.extras.File_Path
            console.log(event.body.extras.ImageOriginal)
            this.plotFileList.push({
              uid: item.file.uid,
              name: 'Plot Doc',
              status: 'done',
              url: url,
              thumbUrl: url,
              FileID: event.body.extras.FileID
            })
            this.plotDocListForNZ = this.plotFileList
          }
          else if (this.uploadingType == 3) {
            var url = event.body.extras.Image550
            console.log(event.body.extras.ImageOriginal)
            this.companyImagesList.push({
              uid: item.file.uid,
              name: item.file.name,
              status: 'done',
              url: url,
              thumbUrl: url,
              ImageID: event.body.extras.ImageID
            })
            this.comapnyListForNz =this.companyImagesList
          }

        }

      },
      err => {
        item.onError!(err, item.file!);
      }
    );
  };

}
