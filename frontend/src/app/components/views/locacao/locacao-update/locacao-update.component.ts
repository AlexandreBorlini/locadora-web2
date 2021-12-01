import { LocacaoService } from './../../../service/locacao.service';
import { ItemService } from './../../../service/item.service';
import { ClienteService } from './../../../service/cliente.service';
import { Locacao } from './../../../models/atendimento/locacao';
import { Cliente } from 'src/app/components/models/atendimento/cliente';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/models/controle/item';
import { Titulo } from 'src/app/components/models/controle/titulo';
import { ActivatedRoute, Router } from '@angular/router';
import { TituloService } from 'src/app/components/service/titulo.service';
import { ClasseService } from 'src/app/components/service/classe.service';
import { AtorService } from 'src/app/components/service/ator.service';
import { DiretorService } from 'src/app/components/service/diretor.service';

@Component({
  selector: 'app-locacao-update',
  templateUrl: './locacao-update.component.html',
  styleUrls: ['./locacao-update.component.css']
})
export class LocacaoUpdateComponent implements OnInit {

  titulos: Titulo[]   = new Array();
  itens: Item[]       = new Array();
  clientes: Cliente[] = new Array();
  cliente!: Cliente;
  item!: Item;
  locacao!:Locacao;

  constructor(private router: Router, private tituloService: TituloService, private itemService: ItemService,
    private clienteService:ClienteService, private route: ActivatedRoute, private locacaoService:LocacaoService) { }

  ngOnInit(): void {

    this.locacao = {

      id: 0,
      datalocacao: new Date(),
      dataDevolucaoPrevista: new Date(),
      dataDevolucaoEfetiva: new Date(),
      valorCobrado: 0,
      multaCobrada: 0,
      cliente: this.cliente,
      item: this.item
    }

    const id = this.route.snapshot.paramMap.get('id') || "";
    console.log(id);
    this.locacaoService.readById(id).subscribe((resp) =>{
      this.locacao = resp;
    });

    this.clienteService.read().subscribe(clientes =>{
      this.clientes = clientes;
    });

    this.tituloService.read().subscribe(titulos =>{
      this.titulos = titulos;
    });

    this.itemService.read().subscribe(itens =>{
      this.itens = itens;
    });
  }

  atualizar():void{
    this.locacaoService.update(this.locacao);
    this.router.navigate(['/locacao']);
  }

  cancelar():void{
    this.router.navigate(['/locacao']);
  }
}
