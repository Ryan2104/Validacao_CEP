import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Este módulo é usado para fazer requisições WEB (get/post/patch/put/delete)
//Importamos porque ele não vem por padrão

import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  //Adicionar o import do HttpClientModule, HttpClient
  // Ry-- adicionamos o HttpClientModule no import para usarmos as funções de pesquisa dele  
  imports: [HttpClientModule,   BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
