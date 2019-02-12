import { HeaderModule } from './../header/header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [HomeComponent,],
  providers: []
})
export class HomeModule { }