import { TituloService } from './../../../service/titulo.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/models/controle/item';
import { Titulo } from 'src/app/components/models/controle/titulo';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/components/service/item.service';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {

  item!:Item;
  titulo!:Titulo;
  titulos!:Titulo[];

  constructor(private router: Router, private route: ActivatedRoute,private itemService: ItemService, private tituloService: TituloService) { }

  ngOnInit(): void {

    this.item = {
      id: 0,
      dtaquisicao: new Date(),
      numserie: 0,
      tipoItem: "Tipo",
      titulo: this.titulo
  };

  this.tituloService.read().subscribe(titulos =>{
      this.titulos = titulos;
  });

  const id = this.route.snapshot.paramMap.get('id') || "";
  this.itemService.readById(id).subscribe((resp) =>{
    this.item = resp;
  });
  }

  atualizar():void{
    this.itemService.update(this.item);
    this.router.navigate(['/item']);
  }

  cancelar():void{
    this.router.navigate(['/item']);
  }
}
