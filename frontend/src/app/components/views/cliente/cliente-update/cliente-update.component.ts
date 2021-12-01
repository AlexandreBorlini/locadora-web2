import { Cliente } from 'src/app/components/models/atendimento/cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/components/service/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente:Cliente = {

    numinscricao: 0,
    nome: "",
    estahativo: true,
    datanascimento: new Date(),
    sexo: 'm'
  };

  constructor(private router: Router,private route: ActivatedRoute, private service:ClienteService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id') || "";
    this.service.readById(id).subscribe((cliente) =>{
      this.cliente = cliente;
    });
  }

  atualizar():void{
    this.service.update(this.cliente);
    this.router.navigate(['/cliente']);
  }

  cancelar():void{
    this.router.navigate(['/cliente']);
  }

}
