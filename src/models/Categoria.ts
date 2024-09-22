import Produto from "./Produto"


export default interface Categoria{
    id: number;
    nome: string;
    imagem: string;
    produto?: Produto | null;
}