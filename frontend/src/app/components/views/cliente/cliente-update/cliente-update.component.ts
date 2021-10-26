import { Cliente } from 'src/app/components/models/atendimento/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente!:Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
