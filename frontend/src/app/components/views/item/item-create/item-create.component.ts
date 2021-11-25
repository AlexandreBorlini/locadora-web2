import { ItemService } from './../../../service/item.service';
import { Item } from './../../../models/controle/item';
import { Titulo } from 'src/app/components/models/controle/titulo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TituloService } from 'src/app/components/service/titulo.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  item!:Item;
  titulo!:Titulo;
  titulos!:Titulo[];

  constructor(private router: Router, private itemService: ItemService, private tituloService: TituloService) { }

  ngOnInit(): void {

    this.tituloService.read().subscribe(titulos =>{
      this.titulos = titulos;
  });

    this.item = {
        id: 0,
        dtaquisicao: new Date(),
        numserie: 0,
        tipoItem: "Tipo",
        titulo: this.titulo
    };
  }

  criar():void{

    console.log(this.titulo);

    this.itemService.create(this.item);
    this.router.navigate(['/item']);
  }

  cancelar():void{
    this.router.navigate(['/item']);
  }

}
