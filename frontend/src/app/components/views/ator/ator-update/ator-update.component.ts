import { Ator } from './../../../models/controle/ator';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtorService } from 'src/app/components/service/ator.service';

@Component({
  selector: 'app-ator-update',
  templateUrl: './ator-update.component.html',
  styleUrls: ['./ator-update.component.css']
})
export class AtorUpdateComponent implements OnInit {


  ator: Ator ={

    id:0,
    nome:""
  };

  constructor(private router: Router, private atorService: AtorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.atorService.readById(id).subscribe((ator) =>{
      this.ator = ator;
    });
  }

  atualizar():void{
    this.atorService.update(this.ator);
    this.router.navigate(['/ator']);
  }

  cancelar():void{
    this.router.navigate(['/ator']);
  }

}
