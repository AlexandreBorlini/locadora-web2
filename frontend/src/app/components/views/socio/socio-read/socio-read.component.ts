import { Socio } from './../../../models/atendimento/socio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socio-read',
  templateUrl: './socio-read.component.html',
  styleUrls: ['./socio-read.component.css']
})
export class SocioReadComponent implements OnInit {

  socios!: Socio[];
  colunas = ['Cpf', 'Endereço', 'Telefone', 'Acao']

  constructor() { }

  ngOnInit(): void {

    this.socios = [{
      cpf:'cpf01',
      endereco:'Endereco01',
      tel:'Telefone01'
    }]
  }

}
