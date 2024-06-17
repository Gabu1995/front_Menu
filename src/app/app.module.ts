import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { LimitTo } from './pipe/limit-to';

@NgModule({
  declarations: [
    AppComponent,
    ItemMenuComponent,
    CartComponent,
    LimitTo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    CardModule,
    RatingModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LimitTo]
})
export class AppModule { }