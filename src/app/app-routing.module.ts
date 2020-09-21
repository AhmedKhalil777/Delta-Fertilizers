import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details', component: ProductDetailsComponent },
  { path: 'products/:searchText', component: ProductsListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
