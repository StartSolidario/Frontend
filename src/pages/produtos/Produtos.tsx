import { useContext, useEffect, useState } from "react";
import Produto from "../../models/Produto";
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { buscar } from "../../services/service";
import Home_navbar from "../../components/produtos/comum/home_navbar/Home_navbar";
import CardProdutos from "../../components/produtos/adm/cardprodutos/CardProdutos";

function Produtos() {
   const [produtos, setProdutos] = useState<Produto[]>([]);

   const { usuario, handleLogout } = useContext(AuthContext);
   const token = usuario.token;

   async function buscarProdutos() {
      try {
         await buscar(window.location.pathname, setProdutos, {
            headers: {
               Authorization: token,
            },
         })
      } catch (error: any) {
         if (error.toString().includes('401')) {
            ToastAlerta('O token expirou, favor logar novamente', "Info")
            handleLogout()
         }
      }
   }

   useEffect(() => {
      buscarProdutos();
   }, [produtos.length]);

   useEffect(() => {
      buscarProdutos();
   }, [window.location.pathname]);
   
   return (
      <div className="bg-[#F5F4D6]">
         <Home_navbar />
         <div>
            <p>Caminho: <span>{window.location.pathname}</span></p>
            <div className="bg-[#F5F4D6] flex justify-center">
               <div className="my-4 container flex flex-col">
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                     {produtos.map((produto) => (
                        <CardProdutos key={produto.id} prod={produto} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Produtos