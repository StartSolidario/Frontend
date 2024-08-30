import Categoria from "./Categoria"
import Usuario from "./Usuario"

export default interface Postagem{
    id: number;
    nome: string;
    tamanho: string;
    cor: string;
    preco: number;
    quantidade: number;
    foto: string;
    categoria: Categoria | null;
    usuario: Usuario | null;
}