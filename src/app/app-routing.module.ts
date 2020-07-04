import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MynetComponent} from "../app/mynet/mynet.component"
import {HaberturkComponent} from "../app/haberturk/haberturk.component"
import { from } from 'rxjs';
import { CnnturkComponent } from './cnnturk/cnnturk.component';
import { SabahComponent } from './sabah/sabah.component';
import { AhaberComponent } from './ahaber/ahaber.component';
import { NtvComponent } from './ntv/ntv.component';
import { BbcComponent } from './bbc/bbc.component';
import { BirsaatComponent } from './birsaat/birsaat.component';
import { BirgunComponent } from './birgun/birgun.component';


const routes: Routes = [
  {path:'Mynet', component:MynetComponent},
  {path:'Haberturk', component:HaberturkComponent},
  {path:'Cnnturk', component:CnnturkComponent},
  {path:'Sabah', component:SabahComponent},
  {path:'Ahaber', component:AhaberComponent},
  {path:'Ntv', component:NtvComponent},
  {path:'Bbc', component:BbcComponent},
  {path:'Birsaat', component:BirsaatComponent},
  {path:'Birgun', component:BirgunComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[MynetComponent]