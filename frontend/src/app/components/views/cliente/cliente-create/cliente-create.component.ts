import { ClienteService } from './../../../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/components/models/atendimento/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente:Cliente = {

    numinscricao: 0,
    nome: "",
    estahativo: true,
    datanascimento: new Date(),
    sexo: 'm'
  };

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  criar():void{ 

    this.clienteService.create(this.cliente);
    this.router.navigate(['/cliente']);
  }

  cancelar():void{
    this.router.navigate(['/cliente']);
  }

}
