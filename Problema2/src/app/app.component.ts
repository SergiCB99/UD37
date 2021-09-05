import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Problema02';

  nombre_usuario='';
  email_usuario='';
  mensaje_usuario='';

  listado = [{
              "Nombre":'',
              "Email":'',
              "Mensaje":''
            }];

  guardar(){
    this.listado.push({
                        "Nombre":this.nombre_usuario,
                        "Email":this.email_usuario,
                        "Mensaje":this.mensaje_usuario
                      });
  }
}
