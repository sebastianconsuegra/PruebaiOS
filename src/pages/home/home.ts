import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public data;
	public n;

  constructor(public navCtrl: NavController) {
  	this.data=["hola0","hola1","hola2"]
  	
  	this.n=0;
  }



play(){

	// var x: string[];
 //  	x=["hola","hola2","hola3"]
	//console.log(x[1])
	this.n=this.n+1;

}



}
