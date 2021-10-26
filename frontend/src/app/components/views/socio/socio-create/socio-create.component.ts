import { Cliente } from './../../../models/atendimento/cliente';
import { Socio } from './../../../models/atendimento/socio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socio-create',
  templateUrl: './socio-create.component.html',
  styleUrls: ['./socio-create.component.css']
})
export class SocioCreateComponent implements OnInit {

  socio!:Socio;
  cliente!:Cliente;
  clientes!:Cliente[];

  constructor() { }

  ngOnInit(): void {

    this.clientes = [
      {numinscricao: 0, nome:'Cliente01', estahativo: true, datanascimento: new Date(), sexo:'m' }
    ];

    this.cliente={numinscricao: 0, nome:'Cliente01', estahativo: true, datanascimento: new Date(), sexo:'m' };

    this.socio={
      cpf:'',
      endereco: '',
      tel:'',
      cliente: this.cliente
    };
  }

}
