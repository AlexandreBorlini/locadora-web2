import { Ator } from './../../../models/controle/ator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ator-create',
  templateUrl: './ator-create.component.html',
  styleUrls: ['./ator-create.component.css']
})
export class AtorCreateComponent implements OnInit {

  ator: Ator ={

    id:0,
    nome:""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
