import { TituloService } from './../../../service/titulo.service';
import { AtorService } from './../../../service/ator.service';
import { ClasseService } from './../../../service/classe.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/models/controle/item';
import { Titulo } from 'src/app/components/models/controle/titulo';
import { DiretorService } from 'src/app/components/service/diretor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {

  item!:Item;
  titulo!:Titulo;
  titulos!:Titulo[];

  constructor(private router: Router, private tituloService: TituloService) { }

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
}
