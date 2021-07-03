import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  public longitud:any;
  constructor() { 
    this.calcularLongitud()
  }
  guardarInformacion(envio:any){
    console.log('desde el servicio la publicacion es ', envio);
    let local:any=localStorage.getItem('publicaciones')
    if(localStorage.getItem('publicaciones')){
      let datos:any=JSON.parse(local)
      datos.push(envio)
      localStorage.setItem('publicaciones',JSON.stringify(datos))
      this.calcularLongitud()
    }
    else{
      let datos=[];
      datos.push(envio)
      localStorage.setItem('publicaciones',JSON.stringify(datos))
    }
    
    
    return {estado:'ok'}
  }
  enviarInformacion(){
    return localStorage.getItem('publicaciones')
  }
  calcularLongitud(){
    let datos=localStorage.getItem('publicaciones')
    if (datos) {
      let vec=JSON.parse(datos)
      this.longitud=vec.length;
      
    } else {
      this.longitud=0  
    }
    
  }
}
