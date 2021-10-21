import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { LocacaoUpdateComponent } from './components/views/locacao/locacao-update/locacao-update.component';
import { ItemUpdateComponent } from './components/views/item/item-update/item-update.component';
import { LocacaoCrudComponent } from './components/views/locacao/locacao-crud/locacao-crud.component';
import { SocioCrudComponent } from './components/views/socio/socio-crud/socio-crud.component';
import { TituloUpdateComponent } from './components/views/titulo/titulo-update/titulo-update.component';
import { TituloCreateComponent } from './components/views/titulo/titulo-create/titulo-create.component';
import { TituloCrudComponent } from './components/views/titulo/titulo-crud/titulo-crud.component';
import { ClasseUpdateComponent } from './components/views/classe/classe-update/classe-update.component';
import { ClasseCreateComponent } from './components/views/classe/classe-create/classe-create.component';
import { ClasseCrudComponent } from './components/views/classe/classe-crud/classe-crud.component';
import { AtorUpdateComponent } from './components/views/ator/ator-update/ator-update.component';
import { AtorCreateComponent } from './components/views/ator/ator-create/ator-create.component';
import { AtorCrudComponent } from './components/views/ator/ator-crud/ator-crud.component';
import { DiretorUpdateComponent } from './components/views/diretor/diretor-update/diretor-update.component';
import { DiretorCreateComponent } from './components/views/diretor/diretor-create/diretor-create.component';
import { DiretorCrudComponent } from './components/views/diretor/diretor-crud/diretor-crud.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SocioCreateComponent } from './components/views/socio/socio-create/socio-create.component';
import { SocioUpdateComponent } from './components/views/socio/socio-update/socio-update.component';
import { LocacaoCreateComponent } from './components/views/locacao/locacao-create/locacao-create.component';
import { ItemCreateComponent } from './components/views/item/item-create/item-create.component';
import { ItemCrudComponent } from './components/views/item/item-crud/item-crud.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteCrudComponent } from './components/views/cliente/cliente-crud/cliente-crud.component';

const routes: Routes = [
  
  // Tela inicial
  {
    path:"",
    component: HomeComponent
  },

  // Diretor
  {
    path:"diretor",
    component: DiretorCrudComponent
  },
  {
    path:"diretor-create",
    component: DiretorCreateComponent
  },
  {
    path:"diretor-update",
    component: DiretorUpdateComponent
  },

  // Ator
  {
    path:"ator",
    component: AtorCrudComponent
  },
  {
    path:"ator-create",
    component: AtorCreateComponent
  },
  {
    path:"ator-update",
    component: AtorUpdateComponent
  },

  // Item
  {
    path:"item",
    component: ItemCrudComponent
  },
  {
    path:"item-create",
    component: ItemCreateComponent
  },
  {
    path:"item-update",
    component: ItemUpdateComponent
  },

  // Locação
  {
    path:"locacao",
    component: LocacaoCrudComponent
  },
  {
    path:"locacao-create",
    component: LocacaoCreateComponent
  },
  {
    path:"locacao-update",
    component: LocacaoUpdateComponent
  },

  // Socio
  {
    path:"socio",
    component: SocioCrudComponent
  },
  {
    path:"socio-create",
    component: SocioCreateComponent
  },
  {
    path:"socio-update",
    component: SocioUpdateComponent
  },

  // Titulo
  {
    path:"titulo",
    component: TituloCrudComponent
  },
  {
    path:"titulo-create",
    component: TituloCreateComponent
  },
  {
    path:"titulo-update",
    component: TituloUpdateComponent
  },

  // Classe
  {
    path:"classe",
    component: ClasseCrudComponent
  },
  {
    path:"classe-create",
    component: ClasseCreateComponent
  },
  {
    path:"classe-update",
    component: ClasseUpdateComponent
  },

  // Cliente
  {
    path:"cliente",
    component: ClienteCrudComponent
  },
  {
    path:"cliente-create",
    component: ClienteCreateComponent
  },
  {
    path:"cliente-update",
    component: ClienteUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
