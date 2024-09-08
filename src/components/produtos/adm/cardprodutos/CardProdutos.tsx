import { Link } from "react-router-dom"
import Produto from "../../../../models/Produto"

interface CardProdutosProps {
   prod: Produto
}

function CardProdutos({ prod }: CardProdutosProps) {
   return (
      <div className='border-2 border-[#2B4042] flex flex-col rounded-2xl overflow-hidden justify-between'>
         <div>
            <div className="flex flex-col w-full bg-[#1E765A] text-white py-2 px-4 items-center justify-center gap-4">
               <h3 className='py-2 px-6 font-bold text-2xl text-center uppercase '>{prod.nome}</h3>
               <div className="w-[80%] bg-[#2B4042]">
                  <img src={prod.foto} className='w-full h-full p-4' alt="Imagem Produto" />
               </div>
            </div>
            <div className='p-4 bg-slate-200'>
               <h4 className='text-lg font-semibold uppercase text-center '>Detalhes:</h4>
               <p className="text-base font-semibold">Tamanho: <span className="font-normal">{prod.tamanho}</span></p>
               <p className="text-base font-semibold">Cor: <span className="font-normal">{prod.cor}</span></p>
               <p className="text-base font-semibold">Quantidade: <span className="font-normal">{prod.quantidade}</span></p>
               <p className="text-base font-semibold">preco: <span className="font-normal">{prod.preco}</span></p>
               <p className="text-base font-semibold">categoria: <span className="font-normal">{prod.categoria?.tipo}</span></p>
            </div>
         </div>
         <div className="flex">
            <Link to={`/editarproduto_adm/${prod.id}`} className='w-full text-slate-100 bg-emerald-500 hover:bg-emerald-800 flex items-center justify-center py-2'>
               <button>Editar</button>
            </Link>
            <Link to={`/deletarproduto_adm/${prod.id}`} className='w-full text-slate-100 bg-yellow-800 hover:bg-yellow-950 flex items-center justify-center py-2'>
               <button>Deletar</button>
            </Link>
         </div>
      </div>
   )
}

export default CardProdutos