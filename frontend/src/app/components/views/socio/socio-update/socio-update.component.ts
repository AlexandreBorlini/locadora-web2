import { Cliente } from 'src/app/components/models/atendimento/cliente';
import { Socio } from './../../../models/atendimento/socio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socio-update',
  templateUrl: './socio-update.component.html',
  styleUrls: ['./socio-update.component.css']
})
export class SocioUpdateComponent implements OnInit {

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
      numinscricao:0,
      estahativo:true,
      nome:'',
      datanascimento:new Date(),
      sexo:'',
      dependentes: []
    };
  }
}
