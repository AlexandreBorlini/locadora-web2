import { Titulo } from 'src/app/components/models/controle/titulo';
import { Item } from './../../../models/controle/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.css']
})
export class ItemReadComponent implements OnInit {

  itens!: Item[];
  titulo!:Titulo;

  colunas = ['id','numserie', 'dtaquisicao', 'tipoitem', 'Acao']

  constructor() { }

  ngOnInit(): void {

    this.titulo = {
        id:0,
        ano: new Date(),
        nome:'Titulo01',
        sinopse:'Sinopse01',
        categoria:'Categoria01',
        diretor:'Diretor01',
        classe:'Classe01',
        atores:['Ator01', 'Ator02']
    };

    this.itens = [{
      id:0,
      numserie:0,
      dtaquisicao: new Date(),
      tipoItem: 'Tipo',
      titulo: this.titulo
    }]
  }

}
