import { SocioService } from './../../../service/socio.service';
import { Cliente } from './../../../models/atendimento/cliente';
import { Socio } from './../../../models/atendimento/socio';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/components/service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socio-create',
  templateUrl: './socio-create.component.html',
  styleUrls: ['./socio-create.component.css']
})
export class SocioCreateComponent implements OnInit {

  socio!:Socio;
  dependentes!:Cliente[];

  constructor(private router: Router, 
    private clienteService: ClienteService, private socioService:SocioService) { }

  ngOnInit(): void {

    this.clienteService.read().subscribe(clientes =>{
      this.dependentes = clientes;
    });

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
  
  criar():void{
    this.socioService.create(this.socio);
    this.router.navigate(['/socio']);
  }

  cancelar():void{
    this.router.navigate(['/socio']);
  }
}
