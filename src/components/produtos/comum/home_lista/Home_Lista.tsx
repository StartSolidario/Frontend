import { useContext, useEffect, useState } from "react";
import { buscar } from "../../../../services/service";

import { Hourglass } from "react-loader-spinner";
import { ToastAlerta } from "../../../../utils/ToastAlerta";

import AuthContext from "../../../../contexts/AuthContext";
import Produto from "../../../../models/Produto";
import Home_Card from "../home_card/Home_Card";

function Home_Lista() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
 
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
 
    async function buscarProdutos() {
       try {
          await buscar('/produtos', setProdutos, {
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
    return (
       <>
          <div className="flex flex-col bg-[#F5F4D6]">
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
                      {produtos.map((produto) => (
                         <Home_Card key={produto.id} prod={produto} />
                      ))}
                   </div>
                </div>
             </div>
          </div>
       </>
    )
 }

export default Home_Lista