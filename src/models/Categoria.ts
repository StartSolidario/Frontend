import Produto from "./Produto"


export default interface Tema{
    id: number;
    tipo: string;
    produto?: Produto | null;
}