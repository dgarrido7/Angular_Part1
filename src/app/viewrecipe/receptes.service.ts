import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceptesService {
//RECEPTE BUIDA
  rct={
    nombre:null,
    receta:null,
    ingredientes:null
  }

  //ARRAY DE RECEPTES
  recetas = [{nombre:'vadella', receta:'remena', ingredientes:'Ingredient1,Ingredient2...'},
               {nombre:'pasta', receta:'remena', ingredientes:'Ingredient1,Ingredient2...'},
               {nombre:'lasanga', receta:'remena', ingredientes:'Ingredient1,Ingredient2...'},
               {nombre:'coronavirus', receta:'remena', ingredientes:'Ingredient1,Ingredient2...'},
               {nombre:'gazpacho', receta:'remena', ingredientes:'Ingredient1,Ingredient2...'},
              ];
              

  //RETORNAR ARRAY
  retornar() {
    return this.recetas;
  }

  //ALTRES FUNCIONS DE PROVA
  hayRegistros() {
    return this.recetas.length>0;              
  }

  borrar(rct) {
    for(let x=0;x<this.recetas.length;x++)
      if (this.recetas[x].nombre==rct.nombre)
      {
        this.recetas.splice(x,1);
        return;
      }
  }
//AGREGAR RECEPTE
  agregar(cod,des,pre) { 

    var items = new Array();

    var rct2={
      nombre:cod,
      receta:des,
      ingredientes:pre
    }


    if (localStorage.getItem("receptes") === null) {
      items.push(rct2);
      localStorage.setItem('receptes', JSON.stringify(items));
      }
      else
      {
      var cartItems = JSON.parse(localStorage.getItem("receptes"));
      cartItems.push(rct2);


    this.recetas.push({nombre:cod,
                         receta:des,
                         ingredientes:pre}); 
      
  }
}

  seleccionar(rct) {
    this.rct.nombre=rct.nombre;
    this.rct.receta=rct.receta;
    this.rct.ingredientes=rct.ingredientes;
  }

  modificar() {
    for(let x=0;x<this.recetas.length;x++)
      if (this.recetas[x].nombre==this.rct.nombre)
      {
        this.recetas[x].receta=this.rct.receta;
        this.recetas[x].ingredientes=this.rct.ingredientes;
        return;
      }        
    alert('No existe la receta ingresado');
  }
}