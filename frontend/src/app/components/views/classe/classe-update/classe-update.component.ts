import { ClasseService } from './../../../service/classe.service';
import { Classe } from './../../../models/controle/classe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router, private service: ClasseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.service.readById(id).subscribe((resp) =>{
      this.classe = resp;
    });
  }

  atualizar():void{
    this.service.update(this.classe);
    this.router.navigate(['/classe']);
  }

  cancelar():void{
    this.router.navigate(['/classe']);
  }

}
