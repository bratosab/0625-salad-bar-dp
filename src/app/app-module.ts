import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SaladModule } from './salad/salad-module';

import { Order } from './order/order';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
    declarations: [App],
    imports: [
    BrowserModule,
    AppRoutingModule,
    SaladModule,
    ReactiveFormsModule,
    Order
],
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient()
    ],
    bootstrap: [App]
})
export class AppModule { }
