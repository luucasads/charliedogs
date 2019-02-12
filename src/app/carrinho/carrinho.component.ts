import { Cachorro } from './../model/Cachorro';
import { Carrinho } from './../model/Carrinho';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho: Carrinho;
  listacarrchoros: Cachorro[];
  exibeCarrinho = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.verificaCarrinho();
  }

  removerCachorro(cachorro: Cachorro) {
    if (this.listacarrchoros) {
      let idx = this.listacarrchoros.indexOf(cachorro);
      this.listacarrchoros.splice(idx, 1);
      }        
  }

  verificaCarrinho () {
      if(this.listacarrchoros) {
        this.exibeCarrinho = true;
      } else {
        this.exibeCarrinho = false;
      }
   }
}
