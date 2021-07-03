import { createR3ProviderExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PalabrasService } from 'src/app/services/palabras.service';
import Swall from "sweetalert2";
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private palabras:PalabrasService, private route:Router) { }

  ngOnInit(): void {
  }
  guardarPublicacion(titulo:string,parrafo:string){

    if(titulo!='' && parrafo!=''){
      console.log(`los datos son: titulo ${titulo}  parrafo ${parrafo}`);
      let publicacion={
        titulo,
        parrafo
      }
      console.log('publicacion',publicacion);
      let info=this.palabras.guardarInformacion(publicacion)
      console.log('info',info);
      if(info.estado=='ok'){
        Swall.fire({title:'Post guardado',
                    showConfirmButton:false,
                  timer:1000})
      }
      
      this.navegar()
    }
    else{
      Swall.fire({title:'Ingrese datos',
                    showConfirmButton:false,
                  timer:1000})
    }
  }
  navegar(){
    this.route.navigateByUrl('/analitycs')
  }
}
