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
      <div className='mx-auto w-1/3 container'>
         <h1 className='my-4 text-4xl text-center'>Deletar Produto</h1>

         <p className='mb-4 font-semibold text-center'>
            Você tem certeza de que deseja apagar o produto a seguir?
         </p>

         <div className='flex flex-col justify-between border rounded-2xl overflow-hidden'>
            <header
               className='bg-indigo-600 px-6 py-2 font-bold text-2xl text-white'>
               Produto
            </header>
            <div className="p-4">
               <p className='h-full text-xl'>{produto.nome}</p>
               <p>Preço: {produto.preco}</p>
               <p>quantidade: {produto.quantidade}</p>
            </div>
            <div className="flex">
               <button
                  className='bg-red-400 hover:bg-red-600 py-2 w-full text-slate-100'
                  onClick={retornar}>
                  Não
               </button>
               <button
                  className='flex justify-center items-center bg-indigo-400 hover:bg-indigo-600 w-full text-slate-100'
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
   )
}

export default DeletarProduto