import { Item } from './../../../models/controle/item';
import { Titulo } from 'src/app/components/models/controle/titulo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  item!:Item;
  titulo!:Titulo;
  titulos!:Titulo[];

  constructor() { }

  ngOnInit(): void {

    this.titulos = [{
      id:0,
      ano: new Date(),
      nome:'Titulo01',
      sinopse:'Sinopse01',
      categoria:'Categoria01',
      diretor:'Diretor01',
      classe:'Classe01',
      atores:['Ator01', 'Ator02']
    }];

    this.item = {
        id: 0,
        dtaquisicao: new Date(),
        numserie: 0,
        tipoItem: "Tipo",
        titulo: this.titulo
    };
  }

}
