import { Socio } from './../../../models/atendimento/socio';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/components/models/atendimento/cliente';

@Component({
  selector: 'app-socio-read',
  templateUrl: './socio-read.component.html',
  styleUrls: ['./socio-read.component.css']
})
export class SocioReadComponent implements OnInit {

  socios!: Socio[];
  cliente!: Cliente;
  colunas = ['Cpf', 'Endereço', 'Telefone', 'Nome', 'Acao']

  constructor() { }

  ngOnInit(): void {

    this.cliente = {
      numinscricao: 0,
      nome: 'String',
      estahativo: true,
      datanascimento: new Date(2001, 1),
      sexo: 'm'
    }

    this.socios = [{
      cpf:'',
      endereco: '',
      tel:'',
      numinscricao:0,
      estahativo:true,
      nome:'',
      datanascimento:new Date(),
      sexo:'',
      dependentes: []
    }]
  }

}
