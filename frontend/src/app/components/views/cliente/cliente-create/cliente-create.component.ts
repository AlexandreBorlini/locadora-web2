import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/components/models/atendimento/cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente!:Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
