import { CachorroService } from './../services/cachorro.service';
import { Cachorro } from './../model/Cachorro';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeForm: FormGroup;
  erro = false;
  exibeResultadoBusca = false;

  constructor(private _formBuilder: FormBuilder,
    private _cachorroService: CachorroService) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.verificaResultBusca();
  }

  get logoImg(): string {
    return environment.logoImg;
  }

  get listaCachorros(): Cachorro[] {
    return this._cachorroService.resultBuscaRaca;
  }

  getCachorroPorId(id: string) {
    let quantidadeCachorros = this.homeForm.value.quantidadeCachorros;
    let mensagem;
    if (this.homeForm.value.quantidadeCachorros === 0) {
      this.erro = true;
      setTimeout(() => {
        this.erro = false;
      }, 3000);
    } else {
      this._cachorroService.buscaCachorroPorId(id)
        .subscribe(response => {
          this._cachorroService.carrinho.cachorros.push(response);
          this._cachorroService.carrinho.quantidade = quantidadeCachorros;
          this.homeForm.reset();
        },
          (err: Error) => {
            mensagem = err.message;
          });
    }
  }

  private createForm() {
    this.homeForm = this._formBuilder.group({
      quantidadeCachorros: [0, Validators.required]
    });
  }

  private verificaResultBusca() {
    if (this._cachorroService.resultBuscaRaca === undefined) {
      this.exibeResultadoBusca = false;
    } else {
      this.exibeResultadoBusca = true;
    }
  }
}
