import { Component, OnInit } from '@angular/core';
import { Titulo } from 'src/app/components/models/controle/titulo';

@Component({
  selector: 'app-titulo-read',
  templateUrl: './titulo-read.component.html',
  styleUrls: ['./titulo-read.component.css']
})
export class TituloReadComponent implements OnInit {

  titulos!: Titulo[];
  colunas = ['ID', 'Ano', 'Nome', 'Sinopse', 'Categoria', 'Diretor', 'Classe', 'Atores','Acao']

  constructor() { }

  ngOnInit(): void {

    this.titulos = [
      {
        id:0,
        ano: new Date(),
        nome:'Nome01',
        sinopse:'Sinopse01',
        categoria:'categoria01',
        diretor:'Diretor01',
        classe:'Classe01',
        atores:['Monga', 'Gorila']
      }
    ]
  }

}
