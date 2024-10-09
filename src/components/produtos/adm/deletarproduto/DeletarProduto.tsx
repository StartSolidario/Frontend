import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AuthContext from "../../../../contexts/AuthContext"
import Produto from "../../../../models/Produto"
import { buscar, deletar } from "../../../../services/service"
import { ToastAlerta } from "../../../../utils/ToastAlerta"
import { RotatingLines } from "react-loader-spinner"

function DeletarProduto() {

   const navigate = useNavigate()

   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [produto, setProduto] = useState<Produto>({} as Produto)

   const { id } = useParams<{ id: string }>()

   const { usuario, handleLogout } = useContext(AuthContext)
   const token = usuario.token

   async function buscarPorId(id: string) {
      try {
         await buscar(`/produtos/${id}`, setProduto, {
            headers: {
               'Authorization': token
            }
         })
      } catch (error: any) {
         if (error.toString().includes('401')) {
            handleLogout()
         }
      }
   }

   useEffect(() => {
      if (token === '') {
         ToastAlerta('Você precisa estar logado', 'info')
         navigate('/')
      }
   }, [token])

   useEffect(() => {
      if (id !== undefined) {
         buscarPorId(id)
      }
   }, [id])

   async function deletarProduto() {
      setIsLoading(true)

      try {
         await deletar(`/produtos/${id}`, {
            headers: {
               'Authorization': token
            }
         })

         ToastAlerta('Produto apagado com sucesso', 'Sucesso')

      } catch (error: any) {
         if (error.toString().includes('401')) {
            handleLogout()
         } else {
            ToastAlerta('Erro ao deletar o produto.', 'Erro')
         }
      }

      setIsLoading(false)
      retornar()
   }

   function retornar() {
      navigate("/produtos_adm")
   }

   return (
      <div className="bg-yellow-100 min-h-[80vh] py-8">
         <div className='mx-auto w-3/4 md:w-2/4 lg:w-1/3'>
            <h1 className='py-2 text-4xl text-center'>Deletar Produto</h1>

            <p className='mb-4 font-semibold text-center'>Você tem certeza de que deseja apagar o produto a seguir?</p>

            <div className='border-2 border-[#2B4042] rounded-2xl flex flex-col justify-between overflow-hidden'>
               <div className="flex flex-col w-full bg-[#1E765A] text-white py-2 px-4 items-center justify-center gap-4">
                  <h3 className='py-2 px-6 font-bold text-lg md:text-xl lg:text-2xl text-center uppercase'>{produto.nome}</h3>
                  <div className="w-[80%] bg-[#2B4042]">
                     <img src={produto.foto} className='w-full h-full p-4' alt="Imagem Produto" />
                  </div>
               </div>
               <div className='p-4 bg-slate-200'>
                  <h4 className='text-lg font-semibold uppercase text-center '>Detalhes:</h4>
                  <p className="text-base font-semibold">Tamanho: <span className="font-normal">{produto.tamanho}</span></p>
                  <p className="text-base font-semibold">Cor: <span className="font-normal">{produto.cor}</span></p>
                  <p className="text-base font-semibold">Quantidade: <span className="font-normal">{produto.quantidade}</span></p>
                  <p className="text-base font-semibold">preco: <span className="font-normal">{produto.preco}</span></p>
                  <p className="text-base font-semibold">categoria: <span className="font-normal">{produto.categoria?.nome}</span></p>
               </div>

               <div className="flex">
                  <button
                     className='w-full text-slate-100 bg-yellow-800 hover:bg-yellow-950 flex items-center justify-center py-2'
                     onClick={retornar}>
                     Não
                  </button>
                  <button
                     className='w-full text-slate-100 bg-emerald-600 hover:bg-emerald-800 flex items-center justify-center py-2'
                     onClick={deletarProduto}>

                     {isLoading ?
                        <RotatingLines
                           strokeColor="white"
                           strokeWidth="5"
                           animationDuration="0.75"
                           width="24"
                           visible={true}
                        /> :
                        <span>Sim</span>
                     }
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DeletarProduto