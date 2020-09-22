import { Component } from '@angular/core';

@Component({
    selector: 'sample',
    template: `<div><h1>{{title}}</h1>
    <br><br>
    <img [src]="showImage">
    <br><br>
    <input type="text" #myname [(ngModel)]="username">{{username}} 
    <br><br>
    <p *ngIf="showPara">This is Citibank paragraph</p> 
    <br><br>
    <ul>
        <li *ngFor="let city of cities">{{city}}</li>
    </ul>
    <br><br>
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">RED</p>
        <p *ngSwitchCase="'green'">GREEN</p>
        <p *ngSwitchDefault>Invalid color</p>
    </div>
    <div [ngClass]="{myClass:class_one}">This is my division</div>
    <p [ngStyle]="{'font-style':style, 'background-color':background_color}">
    This is FontStyle...</p>
    <input type="submit" value="Ok" (click)="handleClickEvent(myname)">
    <br><br>
    Account Object: {{accObj|json}}
    <br><br>
    Currency Value: {{amt|currency:'CAD'}}
    <br><br>
    Medium Date Value: {{dates|date:'medium'}}
    <br><br>
    Full Date Value: {{dates|date:'fullDate'}}
    <br><br>
    Year Date Value: {{dates|date:'yy'}}
    <br><br>
    Hour minutes Date Value: {{dates|date:'Hm'}}
    <br><br>
    Decimal Value: {{decimal|number:'3.3-5'}}
    <br><br>
    Lowercase Value: {{tempString|lowercase}}
    <br><br>
    Uppercase Value: {{tempString|uppercase}}
    <br><br>
    Percentage Value: {{percentage|percent:'3.2-3'}}
    <br><br>
    Sliced string Value: {{tempString|slice:2:6}}
    </div>`,
    styles:['h4{color:red;}','.myClass{color:blue;}']
})
export class SampleComponent{

    public title:string = 'Citi components...';
    public showImage:string = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    
    handleClickEvent(elementRef: any){
        console.log('OK button clicked!', elementRef.value);
    }
    public username:string='';
    public showPara:boolean=true;
    public cities=['Pune', 'Mumbai', 'Delhi'];
    public color:string="red";
    public class_one=true;
    public style='italic';
    public background_color='cyan';

    public accObj={id:1, name:'Nikita'};
    public amt=25.15;
    public dates=Date();
    public decimal=21.45;
    public tempString ='Angular';
    public percentage=0.89;
}
