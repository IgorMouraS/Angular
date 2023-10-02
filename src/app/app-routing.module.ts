import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FotoIntroComponent } from './components/foto-intro/foto-intro.component';
import { HomeComponent } from './pages/home/home.component';
import { AreaTelaComponent } from './pages/area-tela/area-tela.component';
import { SobreTelaComponent } from './pages/sobre-tela/sobre-tela.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'area',
  component: AreaTelaComponent
},
{
  path: 'sobre',
  component: SobreTelaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
