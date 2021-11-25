import { Titulo } from 'src/app/components/models/controle/titulo';
import { Item } from './../../../models/controle/item';
import { Component, OnInit } from '@angular/core';
import { TituloService } from 'src/app/components/service/titulo.service';

@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.css']
})
export class ItemReadComponent implements OnInit {

  itens!: Item[];
  titulo!:Titulo;
  titulos!:Titulo[];

  colunas = ['id','numserie', 'dtaquisicao', 'tipoitem', 'Acao']

  constructor(private tituloService: TituloService) { }

  ngOnInit(): void {

    this.tituloService.read().subscribe(titulos =>{
      this.titulos = titulos;
    });

    this.itens = [{
      id:0,
      numserie:0,
      dtaquisicao: new Date(),
      tipoItem: 'Tipo',
      titulo: this.titulo
    }]
  }

}
