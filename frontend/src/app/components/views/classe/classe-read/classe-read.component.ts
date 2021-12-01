import { ClasseService } from './../../../service/classe.service';
import { Classe } from './../../../models/controle/classe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe-read',
  templateUrl: './classe-read.component.html',
  styleUrls: ['./classe-read.component.css']
})
export class ClasseReadComponent implements OnInit {

  classes!: Classe[];
  colunas = ['ID', 'Nome', 'Valor', 'PrazoDevolucao', 'Acao']

  constructor(private classeService: ClasseService) { }

  ngOnInit(): void {

    this.classeService.read().subscribe(classes =>{
      this.classes = classes;
    });
  }

  excluir(id:String):void{
    this.classeService.delete(id);
    //window.location.reload();
  }

}
