import { Classe } from './../../../models/controle/classe';
import { Ator } from './../../../models/controle/ator';
import { Diretor } from './../../../models/controle/diretor';
import { Component, OnInit } from '@angular/core';
import { Titulo } from 'src/app/components/models/controle/titulo';
import { TituloService } from 'src/app/components/service/titulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AtorService } from 'src/app/components/service/ator.service';
import { ClasseService } from 'src/app/components/service/classe.service';
import { DiretorService } from 'src/app/components/service/diretor.service';

@Component({
  selector: 'app-titulo-update',
  templateUrl: './titulo-update.component.html',
  styleUrls: ['./titulo-update.component.css']
})
export class TituloUpdateComponent implements OnInit {

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
    private diretorService: DiretorService, private classeService: ClasseService, private atorService: AtorService, private route: ActivatedRoute) { }

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

  const id = this.route.snapshot.paramMap.get('id') || "";
  this.tituloService.readById(id).subscribe((resp) =>{
    this.titulo = resp;
  });
  }

  atualizar():void{
    this.tituloService.update(this.titulo);
    this.router.navigate(['/titulo']);
  }

  cancelar():void{
    this.router.navigate(['/titulo']);
  }
}
