import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-bonanza',
  templateUrl: './bonanza.component.html',
  styleUrls: ['./bonanza.component.css']
})
export class BonanzaComponent implements OnInit {
  isAddBtnLoading = false
  isBonanzaEditing = false
  isDetailsView: number;
  IsVisible_data: number = 1

  BonanzaType = [
    {
      ind: 1,
      type: "Points",
    },
    {
      ind: 2,
      type: "Matrix",
    },
    {
      ind: 3,
      type: "Points & Matrix",
    },

  ]
  BonanzaStatusData = [
    {
      ind: 1,
      Bonanza_Status: "Live",
    },
    {
      ind: 2,
      Bonanza_Status: "Completed",
    },
    {
      ind: 3,
      Bonanza_Status: "Cancelled",
    },
    {
      ind: 4,
      Bonanza_Status: "Upcoming",
    },
    {
      ind: 5,
      Bonanza_Status: "All",
    },
  ]


  limit = 10
  skip = 0
  addBonanzaForm: FormGroup
  selectBonanzaStatusForm: FormGroup
  isloading: boolean;
  currentPage = 1
  TotalItems: any;
  ListAllBonanzaData = []
  visible: boolean
  Bonanza_Points_Data = [];
  Bonanza_Matrix_Data = [];
  BonanzaID: any;

  constructor(private fb: FormBuilder,
    private _appService: AppService,
    private nzMessageService: NzMessageService) { }


  ngOnInit() {

    this.selectBonanzaStatusForm = this.fb.group({
      Bonanza_Status: [5, [Validators.required]],
      daterange: [[]],
    })

    let StartDate: Date = this.selectBonanzaStatusForm.value.daterange[0]
    let EndDate: Date = this.selectBonanzaStatusForm.value.daterange[1]

    this.selectBonanzaStatusForm.get('daterange').valueChanges.subscribe((data: any) => {

      if (this.selectBonanzaStatusForm.get('daterange').valid) {
        console.log(data)
        this.skip = 0
        this.BonanzaList()
      }
    })

    this.selectBonanzaStatusForm.get('Bonanza_Status').valueChanges.subscribe((data: any) => {

      if (this.selectBonanzaStatusForm.get('Bonanza_Status').valid) {
        this.skip = 0
        this.BonanzaList()
      }
    })
    this.addBonanzaForm = this.fb.group({
      Bonanza_Type: [this.BonanzaType[0].ind, [Validators.required]],
      Name: [null, [Validators.required]],
      Description: [null, [Validators.required]],
      Start_Date: [null, [Validators.required]],
      End_Date: [null, [Validators.required]],
      Amount: [null, [Validators.required]],
      Points: [null, [Validators.required]],
      Bonanza_Points_Data: this.fb.array([]),
      Bonanza_Matrix_Data: this.fb.array([])
    });
    this.addBonanzaForm.get('Bonanza_Type').valueChanges.subscribe((data: any) => {

      if (this.addBonanzaForm.get('Bonanza_Type').valid) {
        const arr = <FormArray>this.addBonanzaForm.controls.Bonanza_Points_Data;
        arr.controls = [];

        const arr1 = <FormArray>this.addBonanzaForm.controls.Bonanza_Matrix_Data;
        arr1.controls = [];
      }
    })
    this.BonanzaList()
  }




  BonanzaList() {
    this.isloading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let StartDate: Date = this.selectBonanzaStatusForm.get('daterange').value[0]
    let EndDate: Date = this.selectBonanzaStatusForm.get('daterange').value[1]
    let userdata = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      Bonanza_Status: this.selectBonanzaStatusForm.get('Bonanza_Status').value,
      Whether_Date_Filter: this.selectBonanzaStatusForm.get('daterange').value.length > 0 ?true : false,
      Start_Date:this.selectBonanzaStatusForm.get('daterange').value.length > 0 ? StartDate:'',
      End_Date:this.selectBonanzaStatusForm.get('daterange').value.length > 0 ? EndDate:'',
      skip: this.skip,
      limit: this.limit
    }
    try {

      this._appService.postMethod('List_All_Bonanza', userdata)
        .subscribe(resp => {
          this.isloading = false

          if (resp.success) {
            this.ListAllBonanzaData = resp.extras.Data
          } else {
            this.isloading = false
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);


          }
        },
          error => {

          })
    } catch (e) {

    }

  }

  onDetail_View(data, i: number) {
    let index = i;
    if (this.isDetailsView == index) {
      this.isDetailsView = -1
    }
    else {
      this.isDetailsView = index
      // this.BonanzaList()
    }

  }
  onClickpoints(data, type) {
    if (type == 1) {
      this.Bonanza_Points_Data = data.Bonanza_Points_Data
      console.log(this.Bonanza_Points_Data)
    } else if (type == 2) {
      this.Bonanza_Matrix_Data = data.Bonanza_Matrix_Data
    }


  }

  SubmitBonanzaForm() {
    // for (const i in this.addBonanzaForm.controls) {
    //   this.addBonanzaForm.controls[i].markAsDirty();
    //   this.addBonanzaForm.controls[i].updateValueAndValidity();
    // }
    // if(this.addBonanzaForm.invalid){
    //   this.nzMessageService.warning('Enter All tags')
    //   return false
    // }
    this.isAddBtnLoading = true
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    let body = {}
    let url = ''

    if (this.isBonanzaEditing == true) {
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Bonanza_Type: this.addBonanzaForm.value.Bonanza_Type,
        Name: this.addBonanzaForm.value.Name,
        Description: this.addBonanzaForm.value.Description,
        Start_Date: this.addBonanzaForm.value.Start_Date,
        End_Date: this.addBonanzaForm.value.End_Date,
        Amount: this.addBonanzaForm.value.Amount,
        Points: this.addBonanzaForm.value.Points,
        Bonanza_Points_Data: this.addBonanzaForm.value.Bonanza_Points_Data,
        Bonanza_Matrix_Data: this.addBonanzaForm.value.Bonanza_Matrix_Data,
        BonanzaID: this.BonanzaID
      }
      url = 'Edit_Bonanza'
    } else {
      body = {
        AdminID: adminData.AdminID,
        SessionID: adminData.SessionID,
        Bonanza_Type: this.addBonanzaForm.value.Bonanza_Type,
        Name: this.addBonanzaForm.value.Name,
        Description: this.addBonanzaForm.value.Description,
        Start_Date: this.addBonanzaForm.value.Start_Date,
        End_Date: this.addBonanzaForm.value.End_Date,
        Amount: this.addBonanzaForm.value.Amount,
        Points: this.addBonanzaForm.value.Points,
        Bonanza_Points_Data: this.addBonanzaForm.value.Bonanza_Points_Data,
        Bonanza_Matrix_Data: this.addBonanzaForm.value.Bonanza_Matrix_Data,

      }
      url = 'Create_Bonanza'
    }


    try {
      this._appService.postMethod(url, body)
        .subscribe(resp => {
          if (resp.success) {
            this.isAddBtnLoading = false
            this.visible = false;
            this.BonanzaList()
            if (this.isBonanzaEditing) {
              this.nzMessageService.success('Bonanza Update Sucessfully')
            } else {
              this.nzMessageService.success('Bonanza Added Sucessfully')
            }
            this.BonanzaClose()
          } else {
            this.isAddBtnLoading = false
            // this.visible = false;
            this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
          }
        },
          error => {

          })
    } catch (e) {
    }
  }
  open() {
    this.visible = true;
    this.isBonanzaEditing = false
    this.addBonanzaForm.reset({
      Bonanza_Type: 1
    })
  }
  BonanzaClose(): void {
    this.visible = false;
    this.isAddBtnLoading = false
    this.addBonanzaForm.reset({
      Bonanza_Type: 1
    })

    // const control = this.addBonanzaForm.controls.Bonanza_Points_Data as FormArray;
    // console.log(control.length)
    // for (let i = 0; i < control.length; i++){
    //   control.removeAt(i);
    // }
    const arr = <FormArray>this.addBonanzaForm.controls.Bonanza_Points_Data;
    arr.controls = [];

    const arr1 = <FormArray>this.addBonanzaForm.controls.Bonanza_Matrix_Data;
    arr1.controls = [];
  }

  addPointsLevelControls() {
    const control = this.addBonanzaForm.controls.Bonanza_Points_Data as FormArray;
    control.push(this.onPushArrayControls());
  }
  onRemovePointsLevelDataControls(j) {
    const control = <FormArray>this.addBonanzaForm.controls['Bonanza_Points_Data'];
    control.removeAt(j);
  }

  addMatrixLevelsControls() {
    const control = <FormArray>this.addBonanzaForm.controls['Bonanza_Matrix_Data'];
    control.push(this.onPushMatrixLevelsControls());
  }

  onRemoveMatrixLevelsDataControls(i) {
    const control = <FormArray>this.addBonanzaForm.controls['Bonanza_Matrix_Data'];
    control.removeAt(i);
  }
  onEditBonanza(type) {
    this.visible = true
    this.BonanzaID = type.BonanzaID

   if(type.Bonanza_Type == 1 || type.Bonanza_Type == 3){
    let Bonanza_Points_Data = []
    Bonanza_Points_Data = type.Bonanza_Points_Data
    for (let i = 0; i < Bonanza_Points_Data.length; i++) {
      this.addPointsLevelControls()
    }
   }
    if(type.Bonanza_Type == 2 || type.Bonanza_Type ==3){
      let Bonanza_Matrix_Data = []
      Bonanza_Matrix_Data = type.Bonanza_Matrix_Data
      for (let i = 0; i < Bonanza_Matrix_Data.length; i++) {
        this.addMatrixLevelsControls()
      }
    }
    this.addBonanzaForm.patchValue({
      Bonanza_Type: type.Bonanza_Type,
      Name: type.Name,
      Description: type.Description,
      Start_Date: type.Start_Date,
      End_Date: type.End_Date,
      Amount: type.Points_Calculation_Data.Amount,
      Points: type.Points_Calculation_Data.Points,
      Bonanza_Points_Data: type.Bonanza_Points_Data,
      Bonanza_Matrix_Data: type.Bonanza_Matrix_Data,
    },{emitEvent: false})
    this.isBonanzaEditing = true

  }
  onPushArrayControls() {
    return this.fb.group({
      Levels: [null, [Validators.required]],
      Min_Points: [null, [Validators.required]],
      Max_Points: [null, [Validators.required]],
      Winning: [null, [Validators.required]],
    });

  }
  onPushMatrixLevelsControls() {
    return this.fb.group({
      Levels: [null, [Validators.required]],
      Matrix: [null, [Validators.required]],
      Winning: [null, [Validators.required]],
    });

  }



  get arrayControls() {
    return this.addBonanzaForm.get('Bonanza_Points_Data') as FormGroup;
  }
  get MatrixLevelsControls() {
    return this.addBonanzaForm.get('Bonanza_Matrix_Data') as FormGroup;
  }
  onDeletedBonanza(data, index) {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))

    let body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      BonanzaID: data.BonanzaID
    }
    try {

      this._appService.postMethod('Delete_Bonanza', body)
        .subscribe(resp => {
          this.isloading = false
          if (resp.success) {
            this.nzMessageService.success('Bonanza Deleted Sucessfully')
            this.BonanzaList()
          } else {
            this.isloading = false
            this.nzMessageService.error(resp.extras.msg)
          }
        },
          error => {

          })
    } catch (e) {

    }

  }

  onAction(data) {
    let adminData: any = JSON.parse(localStorage.getItem("adminData"))
    const body = {
      AdminID: adminData.AdminID,
      SessionID: adminData.SessionID,
      BonanzaID: data.BonanzaID
    }
    try {
      this._appService.postMethod('Activate_Inactivate_Bonanza', body)
        .subscribe(resp => {
          if (resp.success) {
            let msg;
            if (data.Status) {
              msg = 'Inactivated Successfully'
            } else {
              msg = 'Activated Successfully'
            }
            this.BonanzaList()
            this.nzMessageService.success(msg)
          } else {
            this.nzMessageService.error(resp.extras.msg)

          }
        },
          error => {

          })
    } catch (e) { }
  }
  closePreferncesBonanza() {
    this.addBonanzaForm.reset({
      Bonanza_Type: 1
    })
    this.isAddBtnLoading = false

    const arr = <FormArray>this.addBonanzaForm.controls.Bonanza_Points_Data;
    arr.controls = [];

    const arr1 = <FormArray>this.addBonanzaForm.controls.Bonanza_Matrix_Data;
    arr1.controls = [];
    // const control = this.addBonanzaForm.controls.Bonanza_Points_Data as FormArray;
    // control.clear()
    // const bonanzapoints = <FormArray>this.addBonanzaForm.controls['Bonanza_Points_Data'];
    // bonanzapoints.cle;
    // const BonanzaMatrix = <FormArray>this.addBonanzaForm.controls['Bonanza_Matrix_Data'];
    // BonanzaMatrix.clear();
  }
}
