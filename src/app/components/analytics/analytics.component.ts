import { Component, OnInit } from '@angular/core';
import { PalabrasService } from 'src/app/services/palabras.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  public datos:any
  public ocurrencias:any=[]
  public palabrasMas:any[]=[]
  constructor(private palabra:PalabrasService) {
    this.datos=this.palabra.enviarInformacion()
    this.datos=JSON.parse(this.datos)
    this.ordenarDesc(this.datos, 'titulo');
    this.buscarPalabra()
    
   }

  ngOnInit(): void {
  }

  /* --------------------------------------------------------- */
buscarPalabra(){
    this.datos=this.palabra.enviarInformacion()
    this.datos=JSON.parse(this.datos)
        
    for (const pal of this.datos) {
    
    
    pal.cuenta=this.contarPalabras(pal.parrafo)
    }
    
    
    for (let ocu of this.ocurrencias) {
    
      let s=JSON.stringify(ocu)
      s=JSON.parse(s);
      ocu.objeto=s
    }
    
   
  }
/* ---------------------------------------------------------------------------------- */
  contarPalabras(str:string){
    let words = str.split(' ');
    
    let occurances:any = {};
    
    for (const word of words) {
      if (occurances[word]) {
        occurances[word]++;
      } else {
        occurances[word] = 1;
      }
      
    }
    
    let vectorLocal:any[]=[]
  for (let index = 0; index < 3; index++) {
    let max = 0;
    let mostRepeatedWord = '';
    
    
    for (let word of words) {
      if (occurances[word] > max) {
        max = occurances[word];
        mostRepeatedWord = word;
        
      }
    }
    vectorLocal.push(mostRepeatedWord)
    delete occurances[mostRepeatedWord]
  

  
    
  }
  this.palabrasMas.push(vectorLocal)    

 
    
    this.ocurrencias.push(occurances)
    
    //console.log('prueb',occurances);
  
    //return mostRepeatedWord;

  }
  /* --------------------------------------------------------- */
  
  
  /* Pruebas */
  metodoPrueba(p_array_json:any, p_key:any){
    p_array_json.sort(function (a:any, b:any) {
      return a[p_key] > b[p_key];
   });
  }
  ordenarDesc(p_array_json:any, p_key:any) {
    this.metodoPrueba(p_array_json, p_key); p_array_json.reverse(); 
 }
}
