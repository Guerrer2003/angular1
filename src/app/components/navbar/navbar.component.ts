import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  titulo: string;
  contacto: string;
  constructor(){
    this.titulo= "Incuyo";
    this.contacto= "Contactarse"
  }
}
