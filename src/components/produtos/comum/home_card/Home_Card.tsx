import Produto from "../../../../models/Produto"

interface CardProdutosProps {
    prod: Produto
}

function Home_Card({ prod }: CardProdutosProps) {
    return (
        <div className='flex flex-col border-2 border-[#2B4042] rounded-2xl bg-slate-200'>
            <div className="flex flex-col justify-center items-center">
                <div className="w-[90%] bg-[#2B4042] my-4">
                    <img src={prod.foto} className='w-full h-full p-2' alt="Imagem Produto" />
                </div>

                <div className='flex flex-col justify-center items-center w-full'>
                    <span className="text-xl font-bold">{prod.nome}</span>
                    <span className="self-start px-4 text-lg">Cor: {prod.cor}</span>
                    <span className="self-start px-4 text-lg">Tamanho: {prod.tamanho}</span>
                    <span className="self-start px-4 text-lg">Estoque: {prod.quantidade}</span>
                    <span className="self-start px-4 text-lg">Preço: R${prod.preco}</span>
                </div>
            </div>

            <div className="flex justify-center items-center w-full p-4 gap-6">
                <p className="text-xl border-2 border-[#2B4042] px-2">X/X</p>
                <button className="text-xl border-2 border-[#2B4042] px-2">Adicionar</button>
            </div>
        </div>
    )
}

export default Home_Card