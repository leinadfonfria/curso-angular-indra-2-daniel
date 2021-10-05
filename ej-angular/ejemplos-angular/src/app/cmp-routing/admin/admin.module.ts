import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ADMIN_ROUTER_MODULE } from './admin.routes';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    ADMIN_ROUTER_MODULE
  ]
})
export class AdminModule { }
