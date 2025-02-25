import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './app/Cart/cart.component';
import { HomeComponent } from './app/home/home.component';
import { CatalogComponent } from './app/catalog/catalog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Joe's Robot Shop ENIT" },
  { path: 'catalog', component: CatalogComponent, title: "Catalog - Joe's Robot Shop ENIT" },
  { path: 'cart', component: CartComponent, title: "Cart - Joe's Robot Shop ENIT" },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }