import { Carrinho } from './../model/Carrinho';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Cachorro } from '../model/Cachorro';
import { Compra } from './../model/Compra';

@Injectable()
export class CachorroService {

  private _url = environment.apiURL;
  public carrinho: Carrinho;
  public resultBuscaRaca: Cachorro[];

  constructor(private http: HttpClient) { }

  listarCachorros() {
    return this.http.get<Cachorro[]>(this._url);
  }

  buscaCachorroPorRaca(racaCachorro: string) {
    return this.http.get<Cachorro>(this._url + '/' + racaCachorro);
  }

  buscaCachorroPorId(id: string) {
    return this.http.get<Cachorro>(this._url + '/' + id);
  }

  criaCompraCachorro(compra:Compra) {
    return this.http.post(this._url, compra);
  }

}