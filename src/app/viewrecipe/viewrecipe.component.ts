//IMPORTEM TOT

import { Component, OnInit } from '@angular/core';
import { ReceptesService } from './receptes.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ComentarisService } from './comentaris.service';


@Component({
  selector: 'app-viewrecipe',
  templateUrl: './viewrecipe.component.html',
  styleUrls: ['./viewrecipe.component.css']
})
export class ViewrecipeComponent implements OnInit {
  //VARIABLES
    receptes = null;
    comentaris = null;
    items;
    CommentForm;
    query;
    filtro = 'nombre';
    tipus = 'recepte';

    constructor(private receptesServicio: ReceptesService,private comentarisServicio: ComentarisService,private formBuilder: FormBuilder) {
    

    }

    
    
    ngOnInit() {
      //AL INICIAR REVISEM LES CONDICIONS DEL FORMULARI
      this.CommentForm = this.formBuilder.group({
        nombre: new FormControl('', [Validators.required, Validators.minLength(1)]),
        estrellas: new FormControl('', [Validators.required,Validators.maxLength(1)]),
        comentario: new FormControl('', [Validators.required,Validators.minLength(10)])
    });
    //PASEM LES DADES DE LES RECEPTES I ELS COMENTARIS
      this.receptes=this.receptesServicio.retornar();
      this.comentaris=this.comentarisServicio.retornar();
    }

    //AL FER SUBMIT DEL FORMULARI PASEM LES DADES DELS COMENTARIS AL SEU PROPI SERVEI
    onSubmit(customerData) {
      // Process checkout data here
      this.comentarisServicio.agregar(customerData.nombre,customerData.estrellas,customerData.comentario);
      this.CommentForm.reset();
  
      console.warn("La recepte s'ha afegit", customerData);
    }

    //FUNCIONS PER ALTERNAR ENTRE RECEPTES I COMENTARIS
    onRecepte() {

      this.tipus='recepte';
    }

    onComment() {

      this.tipus='comentari';
    }
    
  
  }