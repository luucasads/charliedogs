import { Cachorro } from './../model/Cachorro';
import { CachorroService } from './../services/cachorro.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  buscaform: FormGroup;
  erro = false;
  public isCheckout = true;
  erroMessage: string;
  listaCachorros: Cachorro[];
  exibeHeader = false;

  constructor(private _formBuilder: FormBuilder,
    private _router: ActivatedRoute,
    private _cachorroSerivce: CachorroService) {
    this.createForm();
  }

  ngOnInit() {
     this.verificaCheckout();
  }

  get logoImg(): string {
    return environment.logoImg;
  }

  get title(): string {
    return environment.title;
  }

  private createForm() {
    this.buscaform = this._formBuilder.group({
      racaCachorro: ['', Validators.required]
    });
  }

  buscaCachorros(racaCachorro: string) {
    racaCachorro = this.buscaform.value.racaCachorro;
    if (racaCachorro === '') {
      this.erro = true;
      setTimeout(() => {
        this.erro = false;
      }, 3000);
    } else {
      this._cachorroSerivce.buscaCachorroPorRaca(racaCachorro)
        .subscribe(response => {
          this._cachorroSerivce.resultBuscaRaca.push(response);
          this.buscaform.reset();
        },
          (err: Error) => {
            let mensagem;
            mensagem = err.message;
          });
    }
  }

  verificaCheckout() {
    let teste;
     teste = this._router.url;
    console.log(teste);
    if(teste.value[0].UrlSegment.path === "checkout") {
      this.exibeHeader = false;
    } else {
      this.exibeHeader = true;
    }
  }

}
