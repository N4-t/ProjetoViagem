import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemViagensComponent } from './listagem-viagens/listagem-viagens.component';
import { NovaViagemComponent } from './nova-viagem/nova-viagem.component';
import { ExcluirViagemComponent } from './excluir-viagem/excluir-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemViagensComponent,
    NovaViagemComponent,
    ExcluirViagemComponent,
    DetalhesViagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
