import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector:'first-component',
    template:`<div><h1>Inside First Component...</h1>
    <br><br><h3>{{title}}</h3>
    </div>`
})
export class FirstComponent{
    public activateRoute:ActivatedRoute;
    public title:string='';
    constructor(activatedRoute:ActivatedRoute){
        this.activateRoute=activatedRoute;
    }
    ngOnInit(){
        this.title=this.activateRoute.snapshot.params['title'];
    }
}

