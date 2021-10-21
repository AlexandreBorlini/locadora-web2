import { Cliente } from './../../../models/atendimento/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes!: Cliente[];
  colunas = ['NumeroInscricao', 'Nome', 'DataNascimento', 'Sexo', 'EstahAtivo', 'Acao'];

  constructor() { }

  ngOnInit(): void {

    this.clientes = [{
      numinscricao: 0,
      nome: 'Cliente01',
      datanascimento: new Date(),
      sexo: 'm',
      estahativo: false
    }]
  }

}
