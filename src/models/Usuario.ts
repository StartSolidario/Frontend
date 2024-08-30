import Produto from "./Produto"

export default interface Usuario{
    id: number;
    nome: string;
    idade: string;
    cpf: string;
    usuario: string;
    senha: string;
    foto: string;
    tipo?: string;
    produto?: Produto | null;
}