import { ListagemViagensComponent } from './listagem-viagens/listagem-viagens.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaViagemComponent } from './nova-viagem/nova-viagem.component';
import { ExcluirViagemComponent } from './excluir-viagem/excluir-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';

const routes: Routes = [
  {path:'lista-viagens', component:ListagemViagensComponent},
  {path:'cadastra-viagem', component:NovaViagemComponent},
  {path:'excluir-viagem', component:ExcluirViagemComponent},
  {path:'detalhes-viagem', component:DetalhesViagemComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
