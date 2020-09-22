import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'product-form',
    templateUrl: './product.component.html',
    styles: ['table,td,th {border: 1px solid black;}'],
    providers: [ProductService]
})
export class ProductComponent{
    public products=[];
    public productService:ProductService;
    public product=null;    
    public str:string="Hello";
    public activateRoute:ActivatedRoute;
    public router:Router;
    public id:number;
    
    constructor(productService: ProductService, activatedRoute:ActivatedRoute, router:Router){
        this.router=router;
        this.activateRoute=activatedRoute;
        this.productService=productService;
        let observable:Observable<Object>=productService.getProducts();
        observable.subscribe((response:any)=> this.products = response);
    }
    onSubmit(productFormValue: any){
        console.log('Submitting the form: ', productFormValue);
        console.log('product quantity: ', productFormValue.quantity);
        //this.productService.addProduct(productFormValue);
        
        this.productService.addProduct(productFormValue).subscribe(res => this.products.push(res));
      
    }
    quantityChanged(e: any) {
        //event comes as parameter, you'll have to find selected data manually using event.target element
        this.str="Bye";
        // this.selectedQuantity = e.target.qty;
        // this.selectedProd[i].qty = this.selectedQuantity;
     }
     onEdit(editprod: any) {
        
        this.product = editprod;
        //this.product=
        //document.getElementById("new").innerHTML="<edit></edit>";
        let navigationExtras: NavigationExtras = {
            queryParams: editprod
        };
        console.log(navigationExtras);
            this.router.navigate(["edit"], navigationExtras);
        
        //this.router.navigate(['/edit', this.editprod.id]);
    }
    onDelete(id:number){
        console.log(id);
        this.productService.deleteProduct(id).subscribe(res=>console.log(res));
        window.location.reload();

    }
}

//  <ul>
//      <li *ngFor="let product of products">{{product|json}}</li>
//  </ul>