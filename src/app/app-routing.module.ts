import { CheckoutComponent } from './checkout/checkout.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'carrinho', component: CarrinhoComponent },
{ path: 'checkout', component: CheckoutComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }