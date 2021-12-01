import { LocacaoService } from './../../../service/locacao.service';
import { Titulo } from 'src/app/components/models/controle/titulo';
import { Cliente } from './../../../models/atendimento/cliente';
import { Locacao } from './../../../models/atendimento/locacao';
import { Item } from 'src/app/components/models/controle/item';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/components/service/cliente.service';
import { Router } from '@angular/router';
import { TituloService } from 'src/app/components/service/titulo.service';
import { ItemService } from 'src/app/components/service/item.service';

@Component({
  selector: 'app-locacao-read',
  templateUrl: './locacao-read.component.html',
  styleUrls: ['./locacao-read.component.css']
})
export class LocacaoReadComponent implements OnInit {

  locacoes!: Locacao[];
  colunas = ['ID', 'DataLoc', 'DataDevEfet', 'DataDevPrev', 'ValCobrado', 'MultaCobrada', 'Item', 'Cliente', 'Acao']

  constructor(private router: Router, private locacaoService: LocacaoService) { }

  ngOnInit(): void {

    this.locacaoService.read().subscribe(locacao =>{
      this.locacoes = locacao;
    });
  }

  excluir(id:String):void{
    this.locacaoService.delete(id);
    window.location.reload();
  }

}
