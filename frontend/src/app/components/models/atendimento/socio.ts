import { Cliente } from "./cliente";

export interface Socio{
    cpf:String,
    endereco:String,
    tel:String,
    cliente: Cliente
};