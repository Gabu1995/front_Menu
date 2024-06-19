import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdenMenuComponent } from './components/orden-menu/orden-menu.component';
import { HomeComponent } from './components/home/home.component';
import { MenuAdminComponent } from './components/Admin/menu-admin/menu-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ordenes', component: OrdenMenuComponent },
  { path: 'administracion', component: MenuAdminComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
