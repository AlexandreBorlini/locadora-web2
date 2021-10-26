import { Diretor } from 'src/app/components/models/controle/diretor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretor-update',
  templateUrl: './diretor-update.component.html',
  styleUrls: ['./diretor-update.component.css']
})
export class DiretorUpdateComponent implements OnInit {

  diretor: Diretor ={

    id:0,
    nome:""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
