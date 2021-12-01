import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Titulo } from 'src/app/components/models/controle/titulo';
import { AtorService } from 'src/app/components/service/ator.service';
import { ClasseService } from 'src/app/components/service/classe.service';
import { DiretorService } from 'src/app/components/service/diretor.service';
import { TituloService } from 'src/app/components/service/titulo.service';

@Component({
  selector: 'app-titulo-read',
  templateUrl: './titulo-read.component.html',
  styleUrls: ['./titulo-read.component.css']
})
export class TituloReadComponent implements OnInit {

  titulos!: Titulo[];
  colunas = ['ID', 'Ano', 'Nome', 'Sinopse', 'Categoria', 'Diretor', 'Classe', 'Atores','Acao']

  constructor(private router: Router, private tituloService: TituloService) { }

  ngOnInit(): void {
    this.tituloService.read().subscribe(titulos =>{
      this.titulos = titulos;
    });
  }
  excluir(id:String):void{
    this.tituloService.delete(id);
    window.location.reload();
  }

}
