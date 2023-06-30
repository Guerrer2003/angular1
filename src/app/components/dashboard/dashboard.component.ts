import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  texto: string;
  textEvent: string;
  constructor(){
    
    
    this.texto="property binding"
    this.textEvent="Juanjo Guerrero"
  }

  
  
  cambiarTexto(): void{
    this.textEvent = "Cambio el título con event binding"
  }

}
