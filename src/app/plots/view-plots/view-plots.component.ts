import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NzMessageService, UploadXHRArgs, UploadFile } from 'ng-zorro-antd';
import { AppService } from 'src/app/app.service';
import { HttpEventType, HttpRequest, HttpResponse, HttpClient } from '@angular/common/http';
declare var google: any
@Component({
  selector: 'app-view-plots',
  templateUrl: './view-plots.component.html',
  styleUrls: ['./view-plots.component.css']
})
export class ViewPlotsComponent implements OnInit {
  isLoading: boolean;
  limit = this._appService.limit
  plotsList = [];
  Count: number;
  skip: number = 0;
  Status: number;
  currentPage: number = 1;
  isDetailsView: number;
  plotImages: any = [];
  imageOrFileList: any = []
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  updatingImageType: number = 1;
  updateimageDrawer: boolean;
  selectedPlotData = [];
  updateForm: FormGroup;
  lat_marker: any;
  lng_market: any;
  plotAddress: string;
  isUpdating: boolean;
  plotImages_FilesArray = [];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private nzMessageService: NzMessageService,
    public _appService: AppService) { }
  ngOnInit() {
    this.onTabClick(1)
    this.updateForm = this.fb.group({
      Company_Name: [null, [Validators.required]],
      Plot_Name: [null, [Validators.required]],
      Description: [null, [Validators.required]],
      googleAddress: [null, [Validators.required]],
    });
  }
  onTabClick(tabNumber: number) {
    this.Status = tabNumber
    this.getAllPlots(0)
    this.isDetailsView = -1
  }

  getAllPlots(skip: number) {
    this.isLoading = true
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: skip,
      limit: this.limit
    }
    try {

      this._appService.postMethod('List_All_Plots', body)
        .subscribe(resp => {
          if (resp.success) {
            this.skip = skip
            this.plotsList = resp.extras.Data
            this.Count = resp.extras.Count
            this.isLoading = false
          } else {
            this.isLoading = false

            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) { }
  }
  onNextPage(event: number) {
    this.currentPage = event
    let skip = (event - 1) * this._appService.limit
    this.skip = skip
    this.getAllPlots(this.skip)
  }
  onDetail_View(data, i: number) {
    this.plotImages = []
    let tmpplotImages = []
    let finallist = []
    tmpplotImages = data.Plot_Image_Data
    tmpplotImages.forEach(item => {
      finallist.push({
        uid: '1',
        name: 'guideLines',
        status: 'done',
        url: item.ImageOriginal,
        thumbUrl: item.ImageOriginal,
        ImageID: item.ImageID
      })
    })
    this.plotImages =finallist;
    let index = i;
    if (this.isDetailsView == index) {
      this.isDetailsView = -1
    } else {

      this.isDetailsView = index

    }
  }
  onAction(data) {
    //this.reasonData = data
    let url;

    if (data.Status) {
      url = 'Activate_Inactivate_Plot'//"Inactivated_Customer_Cancellation_Reason"
    } else {
      url = "Activate_Inactivate_Plot"
    }
    try {
      let adminData: any = JSON.parse(localStorage.getItem('adminData'))
            let body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        PlotID: data.PlotID,

      }
      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {

            let msg;
            if (data.Status) {
              msg = 'Inactivated Successfully'
            } else {
              msg = 'Activated Successfully'
            }
            this.nzMessageService.success(msg)
            this.getAllPlots(this.skip)
          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);

          }
        },
          error => {

          })
    } catch (e) { }
  }
  onUpdate(type: number, plotdata) {
    this.selectedPlotData = []
    this.selectedPlotData.push(plotdata)
    this.updatingImageType = type
    this.updateimageDrawer = true
    this.imageOrFileList = [];
    this.plotImages_FilesArray = []
  }
  onEditBasicInfo(plotdata, updatType) {
    this.selectedPlotData = plotdata
    this.updatingImageType = updatType
    this.updateimageDrawer = true
    this.lat_marker = plotdata.Latitude
    this.lng_market = plotdata.Longitude
    this.updateForm.patchValue({
      Company_Name: plotdata.Company_Name,
      Plot_Name: plotdata.Plot_Name,
      Description: plotdata.Description,
      googleAddress: plotdata.Address
    })
    setTimeout(() => {
      this.onMapIntilized()
    }, 100);
  }
  onUpdateBasicInfo() {
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    let imgesArray = []
    let finalImagesArray = []
    imgesArray = this.selectedPlotData[0].Plot_Image_Data
    imgesArray.forEach((item) => {
      finalImagesArray.push(item.ImageID)
    })
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      PlotID: this.selectedPlotData[0].PlotID,
      "FileID": this.selectedPlotData[0].FileData.FileID,
      "Plot_Name": this.updateForm.value.Plot_Name,
      "Company_Name": this.updateForm.value.Company_Name,
      "Description": this.updateForm.value.Description,
      "Latitude": this.lat_marker,
      "Longitude": this.lng_market,
      "Address": this.plotAddress,
      "All_ImageID_Array": finalImagesArray,
      "ImageID": this.selectedPlotData[0].Company_Image_Data.ImageID,


    }
    this.onPlotUpdateToServer(body)
  }

  onPlotUpdateToServer(body) {
    this.isUpdating = true
    try {

      this._appService.postMethod('Edit_Plot', body)
        .subscribe(resp => {
          if (resp.success) {
            this.onCLoseDrawer()
            this.getAllPlots(this.skip)
            this.isDetailsView = -1
          } else {
            this.isUpdating = false
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) { }
  }
  onUpdateCompanyImageORDoc() {
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    let imgesArray = []
    let finalImagesArray = []
    imgesArray = this.selectedPlotData[0].Plot_Image_Data
    imgesArray.forEach((item) => {
      finalImagesArray.push(item.ImageID)
    })

    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      PlotID: this.selectedPlotData[0].PlotID,
      "FileID": this.selectedPlotData[0].FileData.FileID,
      "Plot_Name": this.selectedPlotData[0].Plot_Name,
      "Company_Name": this.selectedPlotData[0].Company_Name,
      "Description": this.selectedPlotData[0].Description,
      "Latitude": this.selectedPlotData[0].Latitude,
      "Longitude": this.selectedPlotData[0].Longitude,
      "Address": this.selectedPlotData[0].Address,
      "All_ImageID_Array": finalImagesArray,
      "ImageID": this.selectedPlotData[0].Company_Image_Data.ImageID,


    }
    this.onPlotUpdateToServer(body)
  }
  onRemove = (item: UploadFile) => {
    console.log(item)
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
        let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      ImageID: item.ImageID,
      PlotID:this.selectedPlotData[0].PlotID
    }
    try {

      this._appService.postMethod('Remove_Plot_Image', body)
        .subscribe(resp => {
          if (resp.success) {

            this.getAllPlots(this.skip)
            this.isDetailsView = -1
          } else {
            this.isUpdating = false
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) { }

  }
  onCLoseDrawer() {
    this.updateimageDrawer = false
    this.isUpdating = false
    this.updateForm.reset()
  }
  ondragEnd(event) {
    console.log(event.coords.lat)
    this.lat_marker = event.coords.lat
    this.lng_market = event.coords.lng
    console.log(`${this.lat_marker}`)
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
  customReq = (item: UploadXHRArgs) => {
    const formData = new FormData();
    let url = ''
    if (this.updatingImageType == 3 || this.updatingImageType == 4) {
      console.log('enter to image')
      url = this._appService.imageurl
      formData.append('image', item.file as any);
    }
    else if (this.updatingImageType == 2) {
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
        let plotImages_Files = []
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total! > 0) {
            (event as any).percent = (event.loaded / event.total!) * 100;
          }
          item.onProgress!(event, item.file!);
        } else if (event instanceof HttpResponse) {
          item.onSuccess!(event.body, item.file!, event);
          this.nzMessageService.success('upload successfully');
          if (this.updatingImageType == 4) {
            var url = event.body.extras.Image550
            console.log(event.body.extras.ImageOriginal)

            this.plotImages_FilesArray.push({
              uid: item.file.uid,
              name: item.file.name,
              status: 'done',
              url: url,
              thumbUrl: url,
              ID: event.body.extras.ImageID
            })
            let imagesarray = []
            this.plotImages_FilesArray.forEach((item) => {
              imagesarray.push(item.ID)
            })
            let defaultImages = []
            defaultImages = this.selectedPlotData[0].Plot_Image_Data
            defaultImages.push(
              {
                uid: item.file.uid,
                name: item.file.name,
                status: 'done',
                url: url,
                thumbUrl: url,
                ImageID: event.body.extras.ImageID
              }
            )
            this.selectedPlotData[0].Plot_Image_Data = defaultImages
            this.imageOrFileList = this.plotImages_FilesArray

          }
          else if (this.updatingImageType == 3) {
            var url = event.body.extras.Image550
            console.log(event.body.extras.ImageOriginal)

            plotImages_Files.push({
              uid: item.file.uid,
              name: item.file.name,
              status: 'done',
              url: url,
              thumbUrl: url,
              ID: event.body.extras.ImageID
            })
            this.selectedPlotData[0].Company_Image_Data.ImageID = event.body.extras.ImageID
            this.imageOrFileList = plotImages_Files;

          }
          else if (this.updatingImageType == 2) {
            var url = event.body.extras.File_Path
            console.log(event.body.extras.ImageOriginal)
            plotImages_Files.push({
              uid: item.file.uid,
              name: 'Plot Doc',
              status: 'done',
              url: url,
              thumbUrl: url,
              ID: event.body.extras.FileID
            })
            this.selectedPlotData[0].FileData.FileID = event.body.extras.FileID
            this.imageOrFileList = plotImages_Files
          }
          // else if (this.uploadingType == 3) {
          //   var url = event.body.extras.Image550
          //   console.log(event.body.extras.ImageOriginal)
          //   this.companyImagesList.push({
          //     uid: item.file.uid,
          //     name: item.file.name,
          //     status: 'done',
          //     url: url,
          //     thumbUrl: url,
          //     ImageID: event.body.extras.ImageID
          //   })
          //   this.comapnyListForNz = [...this.companyImagesList];
          // }

        }

      },
      err => {
        item.onError!(err, item.file!);
      }
    );
  };

}
