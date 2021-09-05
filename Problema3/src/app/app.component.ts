import { Component, ViewChild } from '@angular/core';
import { BorrarComponent } from './borrar/borrar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Problema03';

  listado = [
  {
    "ID":'1',
    "Usuario":'Usuario',
    "Sector":'Sector',
    "UC":'Ayer'
  },
  {
    "ID":'2',
    "Usuario":'Usuario',
    "Sector":'Sector',
    "UC":'Ayer'
  },
  {
    "ID":'3',
    "Usuario":'Usuario',
    "Sector":'Sector',
    "UC":'Ayer'
  },
  {
    "ID":'4',
    "Usuario":'Usuario',
    "Sector":'Sector',
    "UC":'Ayer'
  },
  {
    "ID":'5',
    "Usuario":'Usuario',
    "Sector":'Sector',
    "UC":'Ayer'
  }
  ];

}
