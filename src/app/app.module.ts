import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SampleComponent} from './components/sample.components';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child.component';
import {ProductComponent} from './components/product/product.component';
//import {ProductService } from './services/product.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {getLocaleFirstDayOfWeek} from '@angular/common';
import {FirstComponent} from './components/first.component';
import {SecondComponent} from './components/second.component';
import {EditComponent} from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent, SampleComponent, ChildComponent, ProductComponent, FirstComponent, SecondComponent, EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component:ProductComponent},
      {path:'first/:title',component:FirstComponent},
      {path:'second',component:SecondComponent},
      {path: 'edit', component:EditComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
