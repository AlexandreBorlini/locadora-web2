import { ItemService } from './../../../service/item.service';
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

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    this.itemService.read().subscribe(itens =>{
      this.itens = itens;
    });
  }
  
  excluir(id:String):void{
    this.itemService.delete(id);
    window.location.reload();
  }

}
