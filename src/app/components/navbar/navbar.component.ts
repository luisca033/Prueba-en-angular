import { Component, OnInit } from '@angular/core';
import { PalabrasService } from 'src/app/services/palabras.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public numero:number=0;
  constructor(private palabras:PalabrasService) { 
    this.numero=this.palabras.longitud
  }

  ngOnInit(): void {
  }

}
