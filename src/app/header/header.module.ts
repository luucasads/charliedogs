import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [ReactiveFormsModule, NgbModule, CommonModule],
  exports:[HeaderComponent],
  declarations: [HeaderComponent],
  providers: []
})
export class HeaderModule { }