import { useContext, useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Produto from "../../../../models/Produto";
import AuthContext from "../../../../contexts/AuthContext";
import { buscar } from "../../../../services/service";
import { ToastAlerta } from "../../../../utils/ToastAlerta";
import NavbarComum from "../navbarcomum/NavbarComum";
import CardComum from "../cardcomum/CardComum";

function FiltroComum() {
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
       <div className="bg-yellow-100 min-h-[80vh]">
          <NavbarComum />
 
          <div>
             <p className="text-base md:text-lg lg:text-xl w-full bg-[#1E765A] text-white px-8 py-2">
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
 
             <div className="bg-yellow-100 flex justify-center">
                <div className="m-4 container flex flex-col">
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                      {produtosFiltrados.map((produto) => (
                         <CardComum key={produto.id} prod={produto} />
                      ))}
                   </div>
                </div>
             </div>
          </div>
       </div>
    )
}

export default FiltroComum