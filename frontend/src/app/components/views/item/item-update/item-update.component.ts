import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/models/controle/item';
import { Titulo } from 'src/app/components/models/controle/titulo';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {

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
