import { Classe } from './../../../models/controle/classe';
import { Ator } from './../../../models/controle/ator';
import { Diretor } from './../../../models/controle/diretor';
import { Component, OnInit } from '@angular/core';
import { Titulo } from 'src/app/components/models/controle/titulo';

@Component({
  selector: 'app-titulo-update',
  templateUrl: './titulo-update.component.html',
  styleUrls: ['./titulo-update.component.css']
})
export class TituloUpdateComponent implements OnInit {

  titulo:Titulo = {
    id: 0,
    nome: "",
    ano: new Date(),
    sinopse: "",
    categoria: "",
    diretor: "",
    classe: "",
    atores: []
  };
  diretores:Diretor[] = new Array();
  atores:Ator[]       = new Array();
  classes:Classe[]    = new Array();

  atoresSelecionados: any;

  constructor() { }

  ngOnInit(): void {

    
    this.diretores = [
      {
        id:0, nome:"nome01"
      }
    ];

    this.classes = [{
      id:0, nome:'Classe01', valor:22, prazodevolucao: new Date()
    }];

    this.atores = [{
      id:0,
      nome:'Ator01'
    },
    {
      id:1,
      nome:'Ator02'
    }
  ];
  }

}
