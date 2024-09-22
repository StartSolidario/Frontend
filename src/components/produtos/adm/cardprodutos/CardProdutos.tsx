import { Link } from "react-router-dom"
import Produto from "../../../../models/Produto"

interface CardProdutosProps {
   prod: Produto
}

function CardProdutos({ prod }: CardProdutosProps) {
   return (
      <div className='flex flex-col border-2 border-[#2B4042] rounded-2xl overflow-hidden h-[70vh]'>
         <div className="flex flex-col justify-center items-center h-full">

            <div className="flex flex-col justify-center items-center w-full h-[60%] bg-[#1E765A] text-white">
               <h3 className='font-bold text-2xl text-center uppercase '>{prod.nome}</h3>
               <div className="w-[50%] md:w-[80%] bg-[#2B4042]">
                  <img src={prod.foto} className='w-full h-full p-1' alt="Imagem Produto" />
               </div>
            </div>

            <div className='w-full h-[40%] p-4 bg-white'>
               <h4 className='text-lg font-semibold uppercase text-center '>Detalhes:</h4>
               <p className="text-base font-semibold">Tamanho: <span className="font-normal">{prod.tamanho}</span></p>
               <p className="text-base font-semibold">Cor: <span className="font-normal">{prod.cor}</span></p>
               <p className="text-base font-semibold">Quantidade: <span className="font-normal">{prod.quantidade}</span></p>
               <p className='text-base font-semibold'>Preço: <span className="font-normal">
                     {Intl.NumberFormat('pt-BR',
                        {
                           style: 'currency',
                           currency: 'BRL'
                        }).format(prod.preco)}
                  </span>
               </p>
               <p className="text-base font-semibold">Categoria: <span className="font-normal">{prod.categoria?.nome}</span></p>
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