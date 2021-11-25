import { Diretor } from './diretor';
import { Classe } from './classe';
import { Ator } from './ator';
export interface Titulo{
    id: Number,
    ano: Date,
    nome: String,
    sinopse: String,
    categoria: String,
    diretor?:Diretor,
    classe?:Classe,
    atores?:Array<Ator>
};