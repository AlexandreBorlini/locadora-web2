import { Cliente } from './cliente';
import {Item} from '../controle/item'
export interface Locacao{
    id?: Number,
    valorCobrado: Number,
    multaCobrada: Number,
    dataDevolucaoEfetiva: Date,
    dataDevolucaoPrevista: Date,
    datalocacao: Date,
    item:Item,
    cliente:Cliente
};