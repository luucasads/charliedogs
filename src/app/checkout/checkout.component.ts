import { Comprador } from './../model/Comprador';
import { Cachorro } from './../model/Cachorro';
import { Compra } from './../model/Compra';
import { CachorroService } from './../services/cachorro.service';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from './../header/header.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutform: FormGroup;
  carrinhoinfo = this._cachorroService.carrinho;
  cachorros: Cachorro[];
  erro = false;
  sucesso = false;

  constructor(private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _cachorroService: CachorroService,
    private _router: Router) {
    this.createForm();

  }

  ngOnInit() {
  }

  private createForm() {
    this.checkoutform = this._formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: [''],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      cep: ['', Validators.required]
    });
  }

  private resetCarrinho() {
    this.checkoutform.reset();
    this._cachorroService.carrinho.quantidade = 0;
    this._cachorroService.carrinho.valorTotal = 0;
    this._cachorroService.carrinho.cachorros.length = 0;
  }

  private cadastraCompra() {
    if (this.checkoutform.valid) {
      let mensagem: string;

      let comprador: Comprador = {
        id: '',
        nome: this.checkoutform.value.nome,
        sobrenome: this.checkoutform.value.sobrenome,
        cpf: this.checkoutform.value.cpf,
        email: this.checkoutform.value.email,
        rua: this.checkoutform.value.rua,
        numero: this.checkoutform.value.numero,
        bairro: this.checkoutform.value.bairro,
        complemento: this.checkoutform.value.complemento,
        cidade: this.checkoutform.value.cidade,
        estado: this.checkoutform.value.estado,
        cep: this.checkoutform.value.cep
      }

      let compra: Compra = {
        id: '',
        cachorros: this.carrinhoinfo.cachorros,
        valorCompra: this.carrinhoinfo.valorTotal,
        quantidade: this.carrinhoinfo.quantidade,
        comprador: comprador
      }

      this._cachorroService.criaCompraCachorro(compra)
        .subscribe(() => {
          this.sucesso = true;
          setTimeout(() => {
            this.sucesso = false;
          }, 3000);
          this._router.navigate(['/home']);
          this.resetCarrinho();

        },
          (err: Error) => {
            mensagem = err.message;
          }
        );
    } else {
      this.erro = true;
      setTimeout(() => {
        this.erro = false;
      }, 4000);

    }
  }
}
