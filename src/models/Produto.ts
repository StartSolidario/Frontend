import Categoria from "./Categoria"

export default interface Produto{
    id: number;
    nome: string;
    tamanho: string;
    cor: string;
    preco: number;
    quantidade: number;
    foto: string;
    categoria: Categoria | null;
}