import { Link, useNavigate } from "react-router-dom"
import Viagem from "../../../../models/Viagem";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../contexts/AuthContext";
import { ToastAlerta } from "../../../../utils/ToastAlerta";
import { buscar } from "../../../../services/service";
import { Hourglass } from "react-loader-spinner";
import CardViagens from "../cardviagens/CardViagens";

function ListarViagens() {
   const [viagens, setViagens] = useState<Viagem[]>([]);

   let navigate = useNavigate();

   const { usuario, handleLogout } = useContext(AuthContext);
   const token = usuario.token;

   useEffect(() => {
      if (token === '') {
         ToastAlerta('Você precisa estar logado', "Info");
         navigate('/');
      }
   }, [token]);

   async function buscarProdutos() {
      try {
         await buscar('/viagens', setViagens, {
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
   }, [viagens.length]);

   return (
      <div className="flex flex-col min-h-[80vh] bg-[#F5F4D6]">
         <div className="w-full flex justify-center">
            <Link className="my-4 py-4 px-4 border-2 rounded-lg border-[#2B4042] bg-[#1E765A] text-[#F5F4D6]" to={'/cadastroviagem_adm'}>Adicionar Nova Viagem</Link>
         </div>

         {viagens.length === 0 && (
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

         <div className=" flex justify-center items-center bg-[#F5F4D6]">
            <div className="m-4 container flex flex-col">
               <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                  {viagens.map((viagem) => (
                     <CardViagens key={viagem.id} viagem={viagem} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ListarViagens