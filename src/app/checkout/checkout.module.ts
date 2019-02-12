import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CachorroService } from '../services/cachorro.service';


@NgModule({
  imports: [ReactiveFormsModule, NgbModule, CommonModule, AppRoutingModule],
  declarations: [CheckoutComponent],
  providers: [CachorroService]
})
export class CheckoutModule { }