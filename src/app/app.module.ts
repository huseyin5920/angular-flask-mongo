import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { RestService } from './Services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { MynetComponent } from './mynet/mynet.component';
import { HaberturkComponent } from './haberturk/haberturk.component';
import { CnnturkComponent } from './cnnturk/cnnturk.component';
import { SabahComponent } from './sabah/sabah.component';
import { AhaberComponent } from './ahaber/ahaber.component';
import { NtvComponent } from './ntv/ntv.component';
import { BbcComponent } from './bbc/bbc.component';
import { BirsaatComponent } from './birsaat/birsaat.component';
import { BirgunComponent } from './birgun/birgun.component';


@NgModule({
  
  exports: [RouterModule],

  declarations: [
    AppComponent,
    MynetComponent,
    HaberturkComponent,
    CnnturkComponent,
    SabahComponent,
    AhaberComponent,
    NtvComponent,
    BbcComponent,
    BirsaatComponent,
    BirgunComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
