import { Component, OnInit } from '@angular/core';
import {Diretor} from '../../../models/controle/diretor'

@Component({
  selector: 'app-diretor-create',
  templateUrl: './diretor-create.component.html',
  styleUrls: ['./diretor-create.component.css']
})
export class DiretorCreateComponent implements OnInit {

  diretor: Diretor ={

    id:0,
    nome:""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
