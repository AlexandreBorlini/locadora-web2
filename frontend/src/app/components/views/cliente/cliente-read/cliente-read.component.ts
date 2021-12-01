import { ClienteService } from './../../../service/cliente.service';
import { Cliente } from './../../../models/atendimento/cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes!: Cliente[];
  colunas = ['NumeroInscricao', 'Nome', 'DataNascimento', 'Sexo', 'EstahAtivo', 'Acao'];

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {

    this.clienteService.read().subscribe(clientes =>{
      console.log(clientes);
      this.clientes = clientes;
    });
  }

  excluir(id:String):void{
    this.clienteService.delete(id);
    window.location.reload();
  }

}
