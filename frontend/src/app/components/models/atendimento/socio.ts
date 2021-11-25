import { Cliente } from "./cliente";

export interface Socio extends Cliente{
    cpf:String,
    endereco:String,
    tel:String,
    dependentes: Cliente[]
};