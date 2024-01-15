import { Component, OnInit } from '@angular/core';
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: 'matrix-javard',
  templateUrl: './matrixInJavaRd.component.html',
  styleUrls: ['./matrixInJavaRd.component.css']
})
export class JavaRdComponent implements OnInit {

  ngOnInit() {  
   
} 

modelRentJR: any;
modelEfektJR: any;
precio: any;
comision: any;
valorFinal: any;

constructor() { //Siin toob sisse
  this.modelRentJR = environment.modelRent;
  this.modelEfektJR = environment.modelEfekt;
  this.precio = this.modelEfektJR * 100;
  this.comision = this.modelRentJR * 100;
  this.valorFinal = this.precio+this.comision;
//  this.modelStruct = environment.modelStruktuur;
  //this.lahtemudel = parseFloat(this.modelStruct)*100;
  
}
//precio = 12;
//comision = 24;
//valorFinal = 36;


  getPrecio(event) {
    this.precio = event.value;
    this.valorFinal = (event.value + this.comision) /2;
  }

  getComision(event) {
    this.comision = event.value;
    this.valorFinal = (event.value + this.precio) /2;
  }


}