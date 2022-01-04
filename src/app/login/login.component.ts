import { AppService } from 'src/app/app.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  isLoadingOne: boolean;



  constructor(private fb: FormBuilder,
    private _appService:AppService,
    private nzMessageService:NzMessageService,
    private router:Router) {
  }

  ngOnInit(): void {
    this.isLoadingOne=false
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(this.validateForm.valid){
      this.isLoadingOne=true
      let userdata={
        EmailID:this.validateForm.value.userName,
        Password:this.validateForm.value.password
      }
      try {
        this._appService.postMethod('Login', userdata)
          .subscribe(resp => {
  
            if (resp.success) {
             this.router.navigate(['/dashboard'])
             localStorage.setItem('adminData',JSON.stringify(resp.extras.AdminData))
             //this.isLoadingOne=false

            } else {
              // if(parseInt(this._appService.apiMessages[resp.extras.msg])==6){
              //   this.router.navigate(['/login'])
              // }
              this.isLoadingOne=false
              this.nzMessageService.create('error', this._appService.apiMessages[resp.extras.msg]);
  
  
            }
          },
            error => {
  
            })
      } catch (e) {
  
      }



    }


    
  }

}
