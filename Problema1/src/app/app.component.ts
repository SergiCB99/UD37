import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Problema01';

  nombre_usuario='';
  CIF_usuario='';
  direccion_usuario='';
  grupo_usuario='';

  listado = [{
              "Nombre":'',
              "CIF":'',
              "Direccion":'',
              "Grupo":''
            }];

  guardar(){
    this.listado.push({
                        "Nombre":this.nombre_usuario,
                        "CIF":this.CIF_usuario,
                        "Direccion":this.direccion_usuario,
                        "Grupo":this.grupo_usuario
                      });
  }

}
