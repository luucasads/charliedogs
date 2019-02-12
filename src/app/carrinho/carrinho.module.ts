import { CarrinhoComponent } from './carrinho.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [ReactiveFormsModule, NgbModule, CommonModule, AppRoutingModule],
  declarations: [CarrinhoComponent],
  providers: []
})
export class CarrinhoModule { }