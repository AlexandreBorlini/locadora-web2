import { Classe } from './../../../models/controle/classe';
import { Ator } from './../../../models/controle/ator';
import { Titulo } from './../../../models/controle/titulo';
import { Component, OnInit } from '@angular/core';
import { Diretor } from 'src/app/components/models/controle/diretor';

@Component({
  selector: 'app-titulo-create',
  templateUrl: './titulo-create.component.html',
  styleUrls: ['./titulo-create.component.css']
})
export class TituloCreateComponent implements OnInit {

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
