import { Component, OnInit } from '@angular/core';
import { PalabrasService } from 'src/app/services/palabras.service';
import Swall from "sweetalert2";
@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent implements OnInit {

  public datos:any
  public estado:boolean=false
  public ocurrencias:any=[]
  public busqueda:any;
  public estado2:boolean=false
  constructor(private palabra:PalabrasService) { }

  ngOnInit(): void {
  }
/* ---------------------------------------------------------------------------------- */
  buscarPalabra(criterio:string){
  if(criterio!=''){
    this.busqueda=criterio
    this.datos=this.palabra.enviarInformacion()
    this.datos=JSON.parse(this.datos)
    console.log('Los datos del local son ', this.datos);
    
    for (const pal of this.datos) {
    console.log('---------');  
    
    pal.cuenta=this.contarPalabras(pal.parrafo)
    }
    this.estado=true
    
    for (let ocu of this.ocurrencias) {
    
      let s=JSON.stringify(ocu)
    
      ocu.string=s
    }
    console.log('ocurrencias',this.ocurrencias);
  }
  else{
    Swall.fire({title:'Ingrese criterio de busqueda',
                    showConfirmButton:false,
                  timer:1000})
  }
  }
/* ---------------------------------------------------------------------------------- */
  contarPalabras(str:string){
    let words = str.split(' ');
    console.log(words); 
    let occurances:any = {};
    for (const word of words) {
      if (occurances[word]) {
        occurances[word]++;
      } else {
        occurances[word] = 1;
      }
      
    }
    console.log('pal occurances',occurances); 

    let max = 0;
    let mostRepeatedWord = '';
  
    for (let word of words) {
      if (occurances[word] > max) {
        max = occurances[word];
        mostRepeatedWord = word;
      }
    }
    this.ocurrencias.push(occurances)
    
    console.log('Dato de las ocurrencias', this.ocurrencias);
    for (let word of words) {
      console.log('----------------------');
      console.log(word);
      console.log('----------------------');
      if(word===this.busqueda){
        this.estado2=true;
        console.log('\n\ncambio de estado\n\n');
      }
    }
    return mostRepeatedWord;

  }

/* ---------------------------------------------------------------------------------- */
}
