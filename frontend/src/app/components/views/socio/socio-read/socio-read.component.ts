import { ClienteService } from './../../../service/cliente.service';
import { SocioService } from './../../../service/socio.service';
import { Socio } from './../../../models/atendimento/socio';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/components/models/atendimento/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socio-read',
  templateUrl: './socio-read.component.html',
  styleUrls: ['./socio-read.component.css']
})
export class SocioReadComponent implements OnInit {

  socios!: Socio[];
  colunas = ['Cpf', 'Endereço', 'Telefone', 'Nome', 'NumeroInscricao', 'DataNascimento', 'Sexo', 'EstahAtivo', 'Acao']

  constructor(private router: Router, private service: SocioService) { }

  ngOnInit(): void {

    this.service.read().subscribe(socios =>{
      this.socios = socios;
    });
  }

  excluir(id:String):void{
    this.service.delete(id);
    window.location.reload();
  }
}
