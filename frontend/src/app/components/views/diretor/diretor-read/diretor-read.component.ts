import { DiretorService } from './../../../service/diretor.service';
import { Diretor } from './../../../models/controle/diretor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diretor-read',
  templateUrl: './diretor-read.component.html',
  styleUrls: ['./diretor-read.component.css']
})
export class DiretorReadComponent implements OnInit {

  diretores!: Diretor[];
  colunas = ['ID', 'Nome', 'Acao']

  constructor(private router: Router, private service: DiretorService) { }

  ngOnInit(): void {

    this.service.read().subscribe(diretores =>{
      this.diretores = diretores;
    });
  }

  excluir(id:String):void{
    this.service.delete(id);
    window.location.reload();
  }
}
