import { DiretorService } from './../../../service/diretor.service';
import { Component, OnInit } from '@angular/core';
import {Diretor} from '../../../models/controle/diretor'
import { Router } from '@angular/router';

@Component({
  selector: 'app-diretor-create',
  templateUrl: './diretor-create.component.html',
  styleUrls: ['./diretor-create.component.css']
})
export class DiretorCreateComponent implements OnInit {

  diretor: Diretor ={

    id:0,
    nome:""
  };

  constructor(private router: Router, private diretorService: DiretorService) { }

  ngOnInit(): void {
  }

  criar():void{
    this.diretorService.create(this.diretor);
    this.router.navigate(['/diretor']);
  }

  cancelar():void{
    this.router.navigate(['/diretor']);
  }

}
