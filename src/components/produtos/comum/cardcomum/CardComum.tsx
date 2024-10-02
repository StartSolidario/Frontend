import { useContext } from "react"
import Produto from "../../../../models/Produto"
import { CartContext } from "../../../../contexts/CartContext"

interface CardProdutosProps {
    prod: Produto
}

function CardComum({ prod }: CardProdutosProps) {

    const { adicionarProduto } = useContext(CartContext)

    return (
        <div className='flex flex-col border-2 border-[#1E765A] rounded-2xl bg-white h-[80vh]'>
            <div className="flex flex-col justify-center items-center h-full">
                <div className="w-[75%] h-[50%] bg-[#1E765A] my-4">
                    <img src={prod.foto} className='w-full h-full p-1' alt="Imagem Produto" />
                </div>

                <div className='flex flex-col justify-evenly items-center w-full h-[50%]'>
                    <span className="flex justify-center items-center text-center text-base md:text-lg lg:text-xl font-bold">{prod.nome}</span>

                    <div className="flex flex-col justify-center items-center gap-4 w-full text-center">
                        <p className="px-4 text-base lg:text-lg font-semibold">Cor: <span className="font-normal">{prod.cor}</span></p>
                        <p className="px-4 text-base lg:text-lg font-semibold">Tamanho: <span className="font-normal">{prod.tamanho}</span></p>
                    </div>

                    <div className="flex flex-col">
                        <p className='self-start px-4 text-lg font-semibold'>Preço: <span className="self-start px-4 text-lg font-semibold">
                                {Intl.NumberFormat('pt-BR',
                                    {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(prod.preco)}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center w-full p-2">
                <button onClick={() => adicionarProduto(prod)} className="text-lg border-2 border-[#2B4042] rounded-lg px-2 text-slate-100 bg-[#1E765A] hover:bg-emerald-900">Adicionar ao Carrinho</button>
            </div>
        </div>
    )
}

export default CardComum