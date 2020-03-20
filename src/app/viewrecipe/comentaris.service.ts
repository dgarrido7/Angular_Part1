import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarisService {

  rct={
    nombre:null,
    estrellas:null,
    comentario:null
  }

  //array comentaris
  comentaris = [{nombre:'vadella', estrellas:'5', comentario:'Buena'},
               {nombre:'pasta', estrellas:'4', comentario:'Rico y tal'},
               {nombre:'lasanga', estrellas:'1', comentario:'tiene coronavirus :('},
               {nombre:'coronavirus', estrellas:'5', comentario:'Gustosa'},
               {nombre:'gazpacho', estrellas:'3', comentario:'Aprovado'},
              ];
              
//RETORNAR COMENTARIS
  retornar() {
    return this.comentaris;
  }
  hayRegistros() {
    return this.comentaris.length>0;              
  }

  borrar(rct) {
    for(let x=0;x<this.comentaris.length;x++)
      if (this.comentaris[x].nombre==rct.nombre)
      {
        this.comentaris.splice(x,1);
        return;
      }
  }

  //AGREGAR COMENTARI
  agregar(cod,des,pre) { 

    var items = new Array();

    var rct2={
      nombre:cod,
      estrellas:des,
      comentario:pre
    }


    if (localStorage.getItem("receptes") === null) {
      items.push(rct2);
      localStorage.setItem('receptes', JSON.stringify(items));
      }
      else
      {
      var cartItems = JSON.parse(localStorage.getItem("receptes"));
      cartItems.push(rct2);


    this.comentaris.push({nombre:cod,
                         estrellas:des,
                         comentario:pre}); 
      
  }
}

  seleccionar(rct) {
    this.rct.nombre=rct.nombre;
    this.rct.estrellas=rct.estrellas;
    this.rct.comentario=rct.comentario;
  }

  modificar() {
    for(let x=0;x<this.comentaris.length;x++)
      if (this.comentaris[x].nombre==this.rct.nombre)
      {
        this.comentaris[x].estrellas=this.rct.estrellas;
        this.comentaris[x].comentario=this.rct.comentario;
        return;
      }        
    alert('No existe la estrellas ingresado');
  }
}