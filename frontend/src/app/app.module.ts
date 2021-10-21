import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AtorCreateComponent } from './components/views/ator/ator-create/ator-create.component';
import { AtorReadComponent } from './components/views/ator/ator-read/ator-read.component';
import { DiretorCreateComponent } from './components/views/diretor/diretor-create/diretor-create.component';
import { DiretorReadComponent } from './components/views/diretor/diretor-read/diretor-read.component';
import { DiretorCrudComponent } from './components/views/diretor/diretor-crud/diretor-crud.component';
import { AtorCrudComponent } from './components/views/ator/ator-crud/ator-crud.component';
import { DiretorUpdateComponent } from './components/views/diretor/diretor-update/diretor-update.component';
import { AtorUpdateComponent } from './components/views/ator/ator-update/ator-update.component';
import { ItemCrudComponent } from './components/views/item/item-crud/item-crud.component';
import { ItemCreateComponent } from './components/views/item/item-create/item-create.component';
import { ItemUpdateComponent } from './components/views/item/item-update/item-update.component';
import { ItemReadComponent } from './components/views/item/item-read/item-read.component';
import { TituloCrudComponent } from './components/views/titulo/titulo-crud/titulo-crud.component';
import { TituloUpdateComponent } from './components/views/titulo/titulo-update/titulo-update.component';
import { TituloCreateComponent } from './components/views/titulo/titulo-create/titulo-create.component';
import { TituloReadComponent } from './components/views/titulo/titulo-read/titulo-read.component';
import { ClasseCrudComponent } from './components/views/classe/classe-crud/classe-crud.component';
import { ClasseCreateComponent } from './components/views/classe/classe-create/classe-create.component';
import { ClasseReadComponent } from './components/views/classe/classe-read/classe-read.component';
import { ClasseUpdateComponent } from './components/views/classe/classe-update/classe-update.component';
import { LocacaoCrudComponent } from './components/views/locacao/locacao-crud/locacao-crud.component';
import { LocacaoReadComponent } from './components/views/locacao/locacao-read/locacao-read.component';
import { LocacaoCreateComponent } from './components/views/locacao/locacao-create/locacao-create.component';
import { UpdateComponent } from './components/views/locacao/update/update.component';
import { SocioCrudComponent } from './components/views/socio/socio-crud/socio-crud.component';
import { SocioUpdateComponent } from './components/views/socio/socio-update/socio-update.component';
import { SocioCreateComponent } from './components/views/socio/socio-create/socio-create.component';
import { SocioReadComponent } from './components/views/socio/socio-read/socio-read.component';
import { ClienteCrudComponent } from './components/views/cliente/cliente-crud/cliente-crud.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { LocacaoUpdateComponent } from './components/views/locacao/locacao-update/locacao-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    AtorCreateComponent,
    AtorReadComponent,
    DiretorCreateComponent,
    DiretorReadComponent,
    DiretorCrudComponent,
    AtorCrudComponent,
    DiretorUpdateComponent,
    AtorUpdateComponent,
    ItemCrudComponent,
    ItemCreateComponent,
    ItemUpdateComponent,
    ItemReadComponent,
    TituloCrudComponent,
    TituloUpdateComponent,
    TituloCreateComponent,
    TituloReadComponent,
    ClasseCrudComponent,
    ClasseCreateComponent,
    ClasseReadComponent,
    ClasseUpdateComponent,
    LocacaoCrudComponent,
    LocacaoReadComponent,
    LocacaoCreateComponent,
    UpdateComponent,
    SocioCrudComponent,
    SocioUpdateComponent,
    SocioCreateComponent,
    SocioReadComponent,
    ClienteCrudComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteCreateComponent,
    LocacaoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
