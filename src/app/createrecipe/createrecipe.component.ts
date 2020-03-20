import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { ReceptesService } from '../viewrecipe/receptes.service';

@Component({
  selector: 'app-createrecipe',
  templateUrl: './createrecipe.component.html',
  styleUrls: ['./createrecipe.component.css']
})
export class CreaterecipeComponent implements OnInit {
  //VARIABLES
  items;
  checkoutForm;

  constructor(
    private ReceptesService: ReceptesService,
    private formBuilder: FormBuilder,
  ) {
    //VARIABLE FORMULARI
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      receta: '',
      ingredientes:''
    });
  }

  ngOnInit() {
  }

  //AL FER SUBMIT PASEM LES DADES AL SERVEI
  onSubmit(customerData) {
    // Process checkout data here
    this.ReceptesService.agregar(customerData.nombre,customerData.receta,customerData.ingredientes);
    this.checkoutForm.reset();

    console.warn("La recepte s'ha afegit", customerData);
  }
}