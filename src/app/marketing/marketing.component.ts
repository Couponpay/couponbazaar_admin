import { Component, OnInit, ViewChild } from '@angular/core';
import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';
import { HttpRequest, HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { AppService } from 'src/app/app.service';
import { FormBuilder } from '@angular/forms';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  serialNumber: number = null
  effect = 'scrollx';
  data: any;
  SmalliconsImageData: any
  cropperSettings: CropperSettings;
  SmalliconsImageSettings: CropperSettings;
  BigBannersData: any;
  BigBannersImageSettings: CropperSettings
  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
  @ViewChild('cropperSmallIcons', undefined) cropperSmallIcons: ImageCropperComponent;
  @ViewChild('cropperbigganner', undefined) cropperbigganner: ImageCropperComponent;
  bigBannersimages: any = [];
  ResourceType: number = 3;
  isImageAdding: boolean = false;
  isImageEditing: boolean = false;
  selectedData: any = {};
  smallBanner = {
    width: 1125,
    height: 676
  }
  resourceid: any;
  isMarketingListLoadin = false
  marketingList = [];
  resourceType: any;
  isrecentImageEditing: boolean = false;
  selectedRecord: any;
  constructor(private _appService: AppService,
    private http: HttpClient,
    private fb: FormBuilder,
    private nzMessageService: NzMessageService) {

    this.cropperSettings = new CropperSettings();


    this.cropperSettings.croppedWidth = this.smallBanner.width;
    this.cropperSettings.croppedHeight = this.smallBanner.height;

    this.cropperSettings.canvasWidth = this.smallBanner.width;
    this.cropperSettings.canvasHeight = this.smallBanner.height;

    this.cropperSettings.minWidth = this.smallBanner.width;
    this.cropperSettings.minHeight = this.smallBanner.height;

    this.cropperSettings.width = this.smallBanner.width;
    this.cropperSettings.height = this.smallBanner.height;

    this.data = {};

    this.SmalliconsImageSettings = new CropperSettings();

    this.SmalliconsImageSettings.croppedWidth = this.smallBanner.width;
    this.SmalliconsImageSettings.croppedHeight = this.smallBanner.height;

    this.SmalliconsImageSettings.canvasWidth = this.smallBanner.width;
    this.SmalliconsImageSettings.canvasHeight = this.smallBanner.height;

    this.SmalliconsImageSettings.minWidth = this.smallBanner.width;
    this.SmalliconsImageSettings.minHeight = this.smallBanner.height;

    this.SmalliconsImageSettings.width = this.smallBanner.width;
    this.SmalliconsImageSettings.height = this.smallBanner.height;

    this.SmalliconsImageData = {};

    this.BigBannersImageSettings = new CropperSettings();

    this.BigBannersImageSettings.croppedWidth = this.smallBanner.width;
    this.BigBannersImageSettings.croppedHeight = this.smallBanner.height;

    this.BigBannersImageSettings.canvasWidth = this.smallBanner.width;
    this.BigBannersImageSettings.canvasHeight = this.smallBanner.height;

    this.BigBannersImageSettings.minWidth = this.smallBanner.width;
    this.BigBannersImageSettings.minHeight = this.smallBanner.height;

    this.BigBannersImageSettings.width = this.smallBanner.width;
    this.BigBannersImageSettings.height = this.smallBanner.height;

    this.BigBannersData = {};

  }
  ngOnInit() {
    this.ontabclicking(3)
  }
  fileChangeListener($event) {
    console.log("whillll")
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);

    };

    myReader.readAsDataURL(file);

  }
  clear() {
    this.cropper.reset();
  }
  getFIle() {
    console.log("while adding")
    // if(this.isrecentImageEditing == false){
      let imag;
      if (this.ResourceType == 1) {
        imag = this.data.image
      } else if (this.ResourceType == 2) {
        imag = this.SmalliconsImageData.image
      } else if (this.ResourceType == 3) {
        imag = this.BigBannersData.image
      }
      let str: string = imag
      if(imag == undefined){
        this.EditImagetoServer(this.selectedRecord.ImageData.ImageID)
      }else {
        let st4;
        if (str.indexOf('data:image/jpeg;base64,') != -1) {
          st4 = str.replace('data:image/jpeg;base64,', '')
        } else {
          st4 = str.replace('data:image/png;base64,', '')
        }
        console.log(st4.length)
  
        const imageBlob = this.dataURItoBlob(st4);
        const imageFile = new File([imageBlob], 'imageName.jpeg', { type: 'image/jpeg' });
        if(this.isImageAdding){
          this.send(imageFile,1)
        }else{
          this.send(imageFile,2)
        }
      }
     
    // }
    
     
     
    
  }
  onAddImage() {
    this.isImageAdding = true
    this.serialNumber = null
    this.isImageEditing = false
  }
  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }
  send(imageFile,type) {
    const formData = new FormData();
    formData.append('image', imageFile);
    const req = new HttpRequest('POST', this._appService.imageurl, formData, {
      reportProgress: true,
      withCredentials: false
    });
    return this.http.request(req).subscribe(
      (event: any) => {
        if (event instanceof HttpResponse) {
          let imageId = event.body.extras.ImageID
          if(type==1){
            this.addImagetoServer(imageId)

          }
          else if(type==2){
            this.EditImagetoServer(imageId)
          }

        } else if (event instanceof HttpResponse) {

        }
      },
      err => {
        //item.onError!(err, item.file!);
      }
    );
  }
  
  addImagetoServer(ImageID) {
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      SNo: this.serialNumber,
      ImageID: ImageID,
      ResourceType: this.ResourceType
    }
    try {

      this._appService.postMethod("Add_App_Image_Resource", body)
        .subscribe(resp => {
          if (resp.success) {
            // this.bigBannersimages= 
            this.isImageAdding = false
            this.serialNumber = null
            if (this.ResourceType == 1) {
              this.cropper.reset()
            } else if (this.ResourceType == 2) {
              this.cropperSmallIcons.reset()
            } else if (this.ResourceType == 3) {
              this.cropperbigganner.reset()
            }
            this.ontabclicking(this.ResourceType)

          } else {
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
          }

        })
    } catch (e) { }
  }
  oncliking() {
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      skip: 0,
      limit: 10,
      ResourceType: this.ResourceType
    }
    try {

      this._appService.postMethod("List_All_App_Image_Resource", body)
        .subscribe(resp => {
          if (resp.success) {
            this.marketingList = resp.extras.Data
            // for (let item of data) {
            //   list.push({
            //     uid: '1',
            //     name: 'guideLines',
            //     status: 'done',
            //     url: item.ImageData.ImageOriginal,
            //     thumbUrl: item.ImageData.ImageOriginal,
            //     ResourceID: item.ResourceID,
            //     ImageID: item.ImageData.ImageID
            //   })

            // }
            // this.bigBannersimages = [...list];

          }



        },
          error => {

          })
    } catch (e) { }
  }
  ontabclicking(tabNumber: number) {
    this.ResourceType = tabNumber
    this.isImageAdding = false
    this.isImageEditing = false
    //this.clear()
    this.oncliking()
  }
  onViewImages() {
    this.isImageAdding = false
    this.isImageEditing = false
    // this.clear()
    if (this.ResourceType == 1) {
      this.cropper.reset()
    } else if (this.ResourceType == 2) {
      this.cropperSmallIcons.reset()
    } else if (this.ResourceType == 3) {
      this.cropperbigganner.reset()
    }
  }
  onRemove = (item: UploadFile) => {
    this.ontabclicking(this.ResourceType)
    console.log(item)
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      ResourceID: item.ResourceID,
      ImageID: item.ImageID
    }
    try {

      this._appService.postMethod('Remove_Resource_Image', body)
        .subscribe(resp => {
          if (resp.success) {
            this.ontabclicking(this.ResourceType)

          } else {

            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) { }

  }
  EditImage(data) {
    this.selectedRecord = data
    this.isImageAdding = false
    this.isImageEditing = true
    this.serialNumber = data.SNo
    this.resourceid = data.ResourceID
    this.resourceType = data.ResourceType
    // if (this.resourceType == 1) {
    //   this.data.image = data.ImageData.ImageOriginal
    // } else if (this.resourceType == 2) {
    //   this.SmalliconsImageData.image = data.ImageData.ImageOriginal
    // } else if (this.resourceType == 3) {
    // this.BigBannersData.image = data.ImageData.ImageOriginal
    // }

  }
  EditImagetoServer(ImageID) {
    let adminData: any = JSON.parse(localStorage.getItem('adminData'))
    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      SNo: this.serialNumber,
      ImageID: ImageID,
      ResourceID: this.resourceid,
      ResourceType: this.resourceType
    }
    try {

      this._appService.postMethod("Edit_App_Image_Resource", body)
        .subscribe(resp => {
          if (resp.success) {
            // this.bigBannersimages= 
            this.isImageAdding = false
            this.isImageEditing = false
            this.serialNumber=null
            if (this.ResourceType == 1) {
              this.cropper.reset()
            } else if (this.ResourceType == 2) {
              this.cropperSmallIcons.reset()
            } else if (this.ResourceType == 3) {
              this.cropperbigganner.reset()
            }
            this.ontabclicking(this.ResourceType)

          }else{
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
          }

        })
    } catch (e) { }
  }
}
