import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcMedia } from './calc-media/calc-media';
import { Apolice } from './apolice/apolice';
import { ConversorTemp } from './conversor-temp/conversor-temp';
import { Imc } from './imc/imc';

const routes: Routes = [
{
  path: 'calc-media',
  component: CalcMedia
},
{
  path: 'apolice',
  component: Apolice
},
{
  path: 'conversor-temp',
  component: ConversorTemp
},
{
  path: 'imc',
  component: Imc
},
{
  path: '**',
  redirectTo: 'calc-media',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
