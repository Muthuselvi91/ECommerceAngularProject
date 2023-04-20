import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HeaderComponent } from './header/header.component';
import { FashionComponent } from './fashion/fashion.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ElectronicsComponent,
    HeaderComponent,
    FashionComponent,
    HomeAppliancesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
