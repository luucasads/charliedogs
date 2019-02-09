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
  isLoading = false;

  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  get logoImg(): string {
    return environment.logoImg;
  }

  private createForm() {
    this.homeForm = this._formBuilder.group({
      racaCachorro: ['', Validators.required]
    });
  }
}
