import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  buscaform: FormGroup;
  erro = false;
  erroMessage: string;
  private _erro = new Subject<string>();

  constructor( private _formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
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
     console.log(racaCachorro);
      if(racaCachorro === '') {
          this.erro = true;
          setTimeout(() => {
            this.erro = false;
          }, 10);
      } else {
        // cahama funcação de busca;
      }
  }

}
