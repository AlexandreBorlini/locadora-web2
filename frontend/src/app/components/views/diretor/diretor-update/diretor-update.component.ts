import { DiretorService } from './../../../service/diretor.service';
import { Diretor } from 'src/app/components/models/controle/diretor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diretor-update',
  templateUrl: './diretor-update.component.html',
  styleUrls: ['./diretor-update.component.css']
})
export class DiretorUpdateComponent implements OnInit {

  diretor: Diretor ={

    id:0,
    nome:""
  };


  constructor(private router: Router, private service: DiretorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.service.readById(id).subscribe((resp) =>{
      this.diretor = resp;
    });
  }

  atualizar():void{
    this.service.update(this.diretor);
    this.router.navigate(['/diretor']);
  }

  cancelar():void{
    this.router.navigate(['/diretor']);
  }

}
