import { useContext } from "react"
import Produto from "../../../../models/Produto"
import { CartContext } from "../../../../contexts/CartContext"

interface CardProdutosProps {
    prod: Produto
}

function Home_Card({ prod }: CardProdutosProps) {

    const { adicionarProduto } = useContext(CartContext)

    return (
        <div className='flex flex-col border-2 border-[#1E765A] rounded-2xl bg-white'>
            <div className="flex flex-col justify-center items-center">
                <div className="w-[90%] bg-[#1E765A] my-4">
                    <img src={prod.foto} className='w-full h-full p-1' alt="Imagem Produto" />
                </div>

                <div className='flex flex-col justify-center items-center w-full'>
                    <span className="text-xl font-bold">{prod.nome}</span>

                    <div className="flex justify-around py-2">
                        <p className="px-4 text-lg font-semibold">Cor: <span className="font-normal">{prod.cor}</span></p>
                        <p className="px-4 text-lg font-semibold">Tamanho: <span className="font-normal">{prod.tamanho}</span></p>
                    </div>

                    <div className="flex flex-col">
                        <p className="self-start px-4 text-lg font-semibold">Preço: <span className="font-normal">R$ {prod.preco}</span></p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center w-full p-4">
                <button onClick={() => adicionarProduto(prod)} className="text-xl border-2 border-[#2B4042] rounded-lg px-2 text-slate-100 bg-[#1E765A] hover:bg-emerald-900">Adicionar ao Carinho</button>
            </div>
        </div>
    )
}

export default Home_Card