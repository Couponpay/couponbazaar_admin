import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName;
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  Admin_Section_Permision: boolean= false;
  constructor(private router: Router) {
    let data = JSON.parse(localStorage.getItem("adminData"))
     this.userName=data.Name
     this.Admin_Section_Permision=data.Admin_Section_Permision
  }
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  onSignout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
