import { useContext, useEffect, useState } from "react";
import Produto from "../../models/Produto";
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { buscar } from "../../services/service";
import Home_navbar from "../../components/produtos/comum/home_navbar/Home_navbar";
import Home_Card from "../../components/produtos/comum/home_card/Home_Card";
import { Hourglass } from "react-loader-spinner";
import { useParams } from "react-router-dom";

function Produtos_Filtro() {
   const [produtos, setProdutos] = useState<Produto[]>([]);

   const { usuario, handleLogout } = useContext(AuthContext);
   const token = usuario.token;

   const { keyword } = useParams();

   async function buscarProdutos() {
      try {
         // Faz a busca utilizando a URL atual (com keyword ou sem)
         await buscar(window.location.pathname, setProdutos, {
            headers: {
               Authorization: token,
            },
         });
      } catch (error: any) {
         if (error.toString().includes('401')) {
            ToastAlerta('O token expirou, favor logar novamente', "Info");
            handleLogout();
         }
      }
   }

   useEffect(() => {
      // Remover o reload e manter a busca de produtos
      buscarProdutos();
   }, [keyword]); // A busca de produtos será disparada quando a keyword mudar

   const produtosFiltrados = produtos.filter((produto) =>
      keyword ? produto.nome.toLowerCase().includes(keyword.toLowerCase()) : true
   );

   return (
      <div className="bg-[#F5F4D6] min-h-[80vh]">
         <Home_navbar />

         <div>
            <p className="text-xl w-full bg-[#1E765A] text-white px-8 py-2">
               Caminho-Filtragem: <span className="font-semibold">{window.location.pathname}</span>
            </p>

            {produtos.length === 0 && (
               <Hourglass
                  visible={true}
                  height="120"
                  width="120"
                  ariaLabel="hourglass-loading"
                  wrapperStyle={{}}
                  wrapperClass="mx-auto my-8"
                  colors={['#10b981', '#065f46']}
               />
            )}

            <div className="bg-[#F5F4D6] flex justify-center">
               <div className="my-4 container flex flex-col">
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                     {produtosFiltrados.map((produto) => (
                        <Home_Card key={produto.id} prod={produto} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Produtos_Filtro;
