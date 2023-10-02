import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoIntroComponent } from './components/foto-intro/foto-intro.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { AreaTelaComponent } from './pages/area-tela/area-tela.component';
import { TituloDescricaoComponent } from './components/titulo-descricao/titulo-descricao.component';
import { SobreTelaComponent } from './pages/sobre-tela/sobre-tela.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoIntroComponent,
    MenuComponent,
    CardComponent,
    HomeComponent,
    AreaTelaComponent,
    TituloDescricaoComponent,
    SobreTelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
