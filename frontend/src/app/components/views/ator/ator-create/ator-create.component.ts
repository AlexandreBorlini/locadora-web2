import { Ator } from './../../../models/controle/ator';
import { Component, OnInit } from '@angular/core';
import { AtorService } from 'src/app/components/service/ator.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-ator-create',
  templateUrl: './ator-create.component.html',
  styleUrls: ['./ator-create.component.css']
})
export class AtorCreateComponent implements OnInit {

  ator: Ator ={

    id:0,
    nome:""
  };

  constructor(private router: Router, private atorService: AtorService) { }

  ngOnInit(): void {
  }

  criarAtor():void{
    this.atorService.create(this.ator);
    this.router.navigate(['/ator']);
  }

  cancelar():void{
    this.router.navigate(['/ator']);
  }
}
function catchError(arg0: (err: any) => any): import("rxjs").OperatorFunction<Ator, unknown> {
  throw new Error('Function not implemented.');
}

