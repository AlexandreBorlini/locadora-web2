import { Diretor } from './../../../models/controle/diretor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretor-read',
  templateUrl: './diretor-read.component.html',
  styleUrls: ['./diretor-read.component.css']
})
export class DiretorReadComponent implements OnInit {

  diretores!: Diretor[];
  colunas = ['ID', 'Nome', 'Acao']

  constructor() { }

  ngOnInit(): void {

    this.diretores = [
      {id:0, 
        nome:"Diretor01"
      }
    ];
  }

}
