import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  a:number; 
  b:number; 
  private result:Number;

  onOperation(event:Event){
    let op = (<HTMLInputElement>event.target).id; 
    switch(op){
      case 's': 
        this.result = this.a + this.b;
        break;

      case 'r': 
        this.result = this.a - this.b;
        break;
      
      case 'm': 
        this.result = this.a * this.b;
        break;

      case 'd': 
        this.result = this.a / this.b;
        break;
    }
  }

  getResult(){
    return this.result;
    console.log(this.a,this.b)
  }
}