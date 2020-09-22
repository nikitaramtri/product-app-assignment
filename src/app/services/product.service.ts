import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService{
    public baseURL="http://localhost:8080/myapp";
    public httpClient:HttpClient;
    constructor(httpClient:HttpClient){
        this.httpClient=httpClient;
    }
    addProduct(productObj:any):Observable<Object>{

        return this.httpClient.post(this.baseURL+'/product', productObj);
    
        //console.log("Products pushed into the array");
    }

    getProducts(){
        return this.httpClient.get(this.baseURL+'/product'); //returns observable
    }
    updateProduct(id:number, value:any):Observable<Object>{
        return this.httpClient.put(this.baseURL+'/product/'+id, value);
    }
    deleteProduct(id:number):Observable<any>{
        return this.httpClient.delete(this.baseURL+'/product/'+id, {responseType:'text'});
        
    }
}