import { Classe } from './../../../models/controle/classe';
import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/components/service/classe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe-create',
  templateUrl: './classe-create.component.html',
  styleUrls: ['./classe-create.component.css']
})
export class ClasseCreateComponent implements OnInit {

  classe:Classe = {
    id:0,
    prazodevolucao:0,
    valor:0,
    nome:""
  };

  constructor(private router: Router, private classeService: ClasseService) { }

  ngOnInit(): void {
  }

  criar():void{
    this.classeService.create(this.classe);
    this.router.navigate(['/classe']);
  }

  cancelar():void{
    this.router.navigate(['/classe']);
  }
}
