import { CachorroService } from './services/cachorro.service';
import { CheckoutModule } from './checkout/checkout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarrinhoModule } from './carrinho/carrinho.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    NgbModule,
    CarrinhoModule,
    CheckoutModule
  ],
  providers: [CachorroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
