import { Cliente } from 'src/app/components/models/atendimento/cliente';
import { Socio } from './../../../models/atendimento/socio';
import { Component, OnInit } from '@angular/core';
import { SocioService } from 'src/app/components/service/socio.service';
import { ClienteService } from 'src/app/components/service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-socio-update',
  templateUrl: './socio-update.component.html',
  styleUrls: ['./socio-update.component.css']
})
export class SocioUpdateComponent implements OnInit {

  socio!:Socio;
  dependentes!:Cliente[];

  constructor(private router: Router, 
    private clienteService: ClienteService, private socioService:SocioService, private route: ActivatedRoute) { }

  ngOnInit(): void {

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

    this.clienteService.read().subscribe(clientes =>{
      this.dependentes = clientes;
    });

    const id = this.route.snapshot.paramMap.get('id') || "";
    this.socioService.readById(id).subscribe((resp) =>{
      this.socio = resp;
    });
  }

  atualizar():void{
    this.socioService.update(this.socio);
    this.router.navigate(['/socio']);
  }

  cancelar():void{
    this.router.navigate(['/socio']);
  }
}
