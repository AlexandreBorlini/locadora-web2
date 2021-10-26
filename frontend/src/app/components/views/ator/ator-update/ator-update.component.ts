import { Ator } from './../../../models/controle/ator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ator-update',
  templateUrl: './ator-update.component.html',
  styleUrls: ['./ator-update.component.css']
})
export class AtorUpdateComponent implements OnInit {


  ator: Ator ={

    id:0,
    nome:""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
