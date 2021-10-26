import { Titulo } from 'src/app/components/models/controle/titulo';
export interface Item{
    id?:number,
    numserie: Number,
    dtaquisicao: Date,
    tipoItem: String,
    titulo: Titulo
};