import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'child',
    template:`<div><h2>Child Component</h2>
    <br>Parent-to-Child: 
    <input type="text" [value]="childTitle">
    <br><br>Child-toParent: 
    <input type="text" #childTextBoxValue (keyup)="handleChildEvent(childTextBoxValue.value)">
    </div>`,
    inputs: ['childTitle'],
    outputs: ['childEvent']
})
export class ChildComponent{
    public childTitle:string='Parent-to-Child';
    public childEvent=new EventEmitter();
    handleChildEvent(childTextBoxValue:string){
        this.childEvent.emit(childTextBoxValue);
    }
}
