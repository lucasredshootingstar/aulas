import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConversorTemp } from './conversor-temp/conversor-temp';
import { CalcMedia } from './calc-media/calc-media';
import { Apolice } from './apolice/apolice';
import { Imc } from './imc/imc';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ConversorTemp,
    CalcMedia,
    Apolice,
    Imc,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule { }
