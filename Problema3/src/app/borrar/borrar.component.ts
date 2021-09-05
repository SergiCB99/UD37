import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  constructor() { }

  @Input() ID:any;

  @ViewChild(AppComponent, { static: true })padre: AppComponent;

  borrar(ID: any){

    //for(var x=0;x<this.padre.listado.length;x++){
      console.log(this.padre);
    //}

  }

  ngOnInit(): void {
  }

}

