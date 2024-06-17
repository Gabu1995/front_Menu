import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'menu', component: ItemMenuComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
