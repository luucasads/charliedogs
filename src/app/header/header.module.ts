import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CachorroService } from '../services/cachorro.service';



@NgModule({
  imports: [ReactiveFormsModule, NgbModule, CommonModule, AppRoutingModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [CachorroService]
})
export class HeaderModule { }