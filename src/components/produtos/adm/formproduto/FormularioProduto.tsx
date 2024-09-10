import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../../services/service";

import AuthContext from "../../../../contexts/AuthContext";
import Categoria from "../../../../models/Categoria";
import Produto from "../../../../models/Produto";

import { ToastAlerta } from "../../../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";

function FormularioProduto() {

   const navigate = useNavigate();

   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [categorias, setCategorias] = useState<Categoria[]>([])

   const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipo: '', })
   const [produto, setProduto] = useState<Produto>({} as Produto)

   const { id } = useParams<{ id: string }>()

   const { usuario, handleLogout } = useContext(AuthContext)
   const token = usuario.token

   async function buscarProdutoPorId(id: string) {
      try {
         await buscar(`/produtos/${id}`, setProduto, {
            headers: { Authorization: token }
         })
      } catch (error: any) {
         if (error.toString().includes('401')) {
            handleLogout()
         }
      }
   }

   async function buscarCategoriaPorId(id: string) {
      try {
         await buscar(`/categorias/${id}`, setCategoria, {
            headers: { Authorization: token }
         })
      } catch (error: any) {
         if (error.toString().includes('401')) {
            handleLogout()
         }
      }
   }

   async function buscarCategorias() {
      try {
         await buscar('/categorias', setCategorias, {
            headers: { Authorization: token }
         })
      } catch (error: any) {
         if (error.toString().includes('401')) {
            handleLogout()
         }
      }
   }

   useEffect(() => {
      if (token === '') {
         ToastAlerta('Você precisa estar logado', 'Info');
         navigate('/');
      }
   }, [token])

   useEffect(() => {
      buscarCategorias()

      if (id !== undefined) {
         buscarProdutoPorId(id)
      }
   }, [id])

   useEffect(() => {
      setProduto({
         ...produto,
         categoria: categoria,
      })
   }, [categoria])

   function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

      // Variável temporária
       let value: any;

      // Verifica se o campo se chama preco
       if (e.target.name === "preco") {
           // Em caso positivo, converte para float
           value = parseFloat(Number(e.target.value).toFixed(2))
       } else {
           // Em caso negativo, mantém o valor atual
           value = e.target.value
       }

       setProduto({
           ...produto,
           [e.target.name]: value, // Passa como valor do atributo a variável value
           categoria: categoria
       });
   }

   function retornar() {
      navigate('/produtos_adm');
   }

   async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      setIsLoading(true)

      // Verifica se o produto está sendo montado corretamente
      console.log("Produto enviado para cadastro: ", produto);


      if (id !== undefined) {
         try {
            await atualizar(`/produtos`, produto, setProduto, {
               headers: {
                  Authorization: token,
               },
            });

            ToastAlerta('Produto atualizado com sucesso', 'Sucesso')

         } catch (error: any) {
            if (error.toString().includes('401')) {
               handleLogout()
            } else {
               ToastAlerta('Erro ao atualizar o Produto', 'Erro')
            }
         }

      } else {
         try {
            await cadastrar(`/produtos`, produto, setProduto, {
               headers: {
                  Authorization: token,
               }
            })

            ToastAlerta('Produto cadastrado com sucesso', 'Sucesso');

         } catch (error: any) {
            console.log("Erro ao cadastrar o produto: ", error);
            if (error.toString().includes('401')) {
               handleLogout()
            } else {
               ToastAlerta('Erro ao cadastrar o Produto', 'Erro');
            }
         }
      }

      setIsLoading(false)
      retornar()
   }

   const carregandoCategoria = categoria.tipo === '';

   return (
      <div className="bg-[#F5F4D6] min-h-[80vh] py-8">
         <div className="flex flex-col items-center mx-auto container">
            <h1 className="my-8 text-4xl text-center">
               {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>

            <form className="flex flex-col gap-4 w-1/2" onSubmit={gerarNovoProduto}>
               <div className="flex flex-col gap-2">
                  <label htmlFor="titulo">Nome do Produto</label>
                  <input
                     type="text"
                     placeholder="Nome"
                     name="nome"
                     required
                     className="border-2 border-slate-700 p-2 rounded"
                     value={produto.nome}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
               </div>

               <div className="flex flex-col gap-2">
                  <label htmlFor="titulo">Preço do Produto</label>
                  <input
                     type="number"
                     step=".01"
                     placeholder="Preço"
                     name="preco"
                     required
                     className="border-2 border-slate-700 p-2 rounded"
                     value={produto.preco}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
               </div>

               <div className="flex flex-col gap-2">
                  <label htmlFor="titulo">Quantidade Disponivel do Produto</label>
                  <input
                     type="number"
                     placeholder="Quantidade"
                     name="quantidade"
                     required
                     className="border-2 border-slate-700 p-2 rounded"
                     value={produto.quantidade}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
               </div>

               <div className="flex flex-col gap-2">
                  <label htmlFor="titulo">URL-Foto do Produto</label>
                  <input
                     type="text"
                     placeholder="URL"
                     name="foto"
                     required
                     className="border-2 border-slate-700 p-2 rounded"
                     value={produto.foto}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
               </div>

               <div className="flex flex-col gap-2">
                  <label htmlFor="titulo">Tamanho do Produto</label>
                  <input
                     type="text"
                     placeholder="Tamanho"
                     name="tamanho"
                     className="border-2 border-slate-700 p-2 rounded"
                     value={produto.tamanho}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
               </div>

               <div className="flex flex-col gap-2">
                  <label htmlFor="titulo">Cor do Produto</label>
                  <input
                     type="text"
                     placeholder="Cor"
                     name="cor"
                     className="border-2 border-slate-700 p-2 rounded"
                     value={produto.cor}
                     onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
               </div>

               <div className="flex flex-col gap-2">
                  <p>Categoria do Produto</p>
                  <select name="categoria" id="categoria" className='border-2 border-slate-700 p-2 rounded'
                     onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                  >
                     <option value="" selected disabled>Selecione uma Categoria</option>

                     {categorias.map((categoria) => (
                        <>
                           <option value={categoria.id} >{categoria.tipo}</option>
                        </>
                     ))}

                  </select>
               </div>

               <div className="flex justify-around">
                  <button
                     className="flex justify-center items-center w-[40%] py-2 text-slate-100 bg-emerald-500 hover:bg-emerald-800 disabled:bg-slate-500 border border-slate-700 rounded-lg"
                     type="submit"
                     disabled={carregandoCategoria}>

                     {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                     /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                     }

                  </button>

                  <button className='flex justify-center items-center w-[40%] py-2 text-slate-100 bg-yellow-800 hover:bg-yellow-950 border border-slate-700 rounded-lg'
                     onClick={retornar}
                  >
                     Cancelar
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default FormularioProduto
