import { Classe } from './../../../models/controle/classe';
import { Ator } from './../../../models/controle/ator';
import { Titulo } from './../../../models/controle/titulo';
import { Component, OnInit } from '@angular/core';
import { Diretor } from 'src/app/components/models/controle/diretor';
import { Router } from '@angular/router';
import { TituloService } from 'src/app/components/service/titulo.service';
import { DiretorService } from 'src/app/components/service/diretor.service';
import { ClasseService } from 'src/app/components/service/classe.service';
import { AtorService } from 'src/app/components/service/ator.service';

@Component({
  selector: 'app-titulo-create',
  templateUrl: './titulo-create.component.html',
  styleUrls: ['./titulo-create.component.css']
})
export class TituloCreateComponent implements OnInit {

  titulo:Titulo = {
    id: 0,
    nome: "",
    ano: new Date(),
    sinopse: "",
    categoria: "",
    diretor: undefined,
    classe: undefined,
    atores: []
  };
  diretores:Diretor[] = new Array();
  atores:Ator[]       = new Array();
  classes:Classe[]    = new Array();

  atoresSelecionados: any;

  constructor(private router: Router, private tituloService: TituloService, 
    private diretorService: DiretorService, private classeService: ClasseService, private atorService: AtorService) { }

  ngOnInit(): void {
    this.diretorService.read().subscribe(diretores =>{
      this.diretores = diretores;
  });
  this.classeService.read().subscribe(classes =>{
    this.classes = classes;
  });
  this.atorService.read().subscribe(atores =>{
    this.atores = atores;
  });
  }
  
  criar():void{
    console.log(this.titulo);
    this.tituloService.create(this.titulo);
    this.router.navigate(['/titulo']);
  }

  cancelar():void{
    this.router.navigate(['/titulo']);
  }
}
