import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'edit',
    templateUrl: './edit.component.html',
    styles: ['table,td,th {border: 1px solid black;}'],
    providers: [ProductService]
})
export class EditComponent {
    public products = [];
    public product: any;
    public prod: any={};
    public id: number;
    public productService: ProductService;
    public activateRoute: ActivatedRoute;

    constructor(productService: ProductService, activatedRoute: ActivatedRoute) {
        this.activateRoute = activatedRoute;
        this.productService = productService;
        let observable: Observable<Object> = productService.getProducts();
        observable.subscribe((response: any) => this.products = response);
    }

    onSubmit(prod: any) {
        console.log("!!!!!!!");
        console.log('Submitting product form: ', prod);
        let id = this.product.id;
        prod['id'] = id;
        // this.products[id-1].name = prod.name;
        // this.products[id-1].quantity = prod.quantity;
        // this.products[id-1].price = prod.price;

        console.log(this.products);
        console.log(prod.id);
        this.productService.updateProduct(id, prod).subscribe(res => console.log(res));
        window.history.go(-1);

    }


    ngOnInit() {
        this.product = this.activateRoute.snapshot.queryParams;
        console.log(this.product);
        this.prod = {...this.product};
        console.log(this.prod);
        console.log(this.activateRoute.snapshot);
    }

    onCancel() {
        window.history.go(-1);
    }
}