import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtorService } from 'src/app/components/service/ator.service';
import { Ator } from '../../../models/controle/ator';

@Component({
  selector: 'app-ator-read',
  templateUrl: './ator-read.component.html',
  styleUrls: ['./ator-read.component.css']
})
export class AtorReadComponent implements OnInit {


  atores: Ator[] = new Array();
  colunas = ['Nome', 'Acao']

  constructor(private atorService: AtorService) { }

  ngOnInit(): void {

    this.atorService.read().subscribe(atores =>{
      this.atores = atores;
    });
  }

  excluir(id:String):void{
    this.atorService.delete(id);
    window.location.reload();
  }

}
