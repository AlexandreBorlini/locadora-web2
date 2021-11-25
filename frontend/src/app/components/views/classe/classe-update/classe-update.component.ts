import { Classe } from './../../../models/controle/classe';
import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/components/service/classe.service';

@Component({
  selector: 'app-classe-update',
  templateUrl: './classe-update.component.html',
  styleUrls: ['./classe-update.component.css']
})
export class ClasseUpdateComponent implements OnInit {

  classe:Classe = {
    id:0,
    prazodevolucao:0,
    valor:0,
    nome:""
  };

  constructor(private classeService: ClasseService) { }

  ngOnInit(): void {
  }

}
