import { ReactNode, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { ShoppingCart } from "@phosphor-icons/react";

function Navbar() {

   const navigate = useNavigate();

   const { usuario, handleLogout } = useContext(AuthContext)

   function logout() {
      handleLogout()
      ToastAlerta("O usuário foi desconectado!", "Info")
      navigate("/")
   }

   let component: ReactNode;

   {
      usuario.token !== "" ?
      component = (
         <div className="w-full flex justify-around bg-[#2B4042] text-[#F5F4D6] py-3">
            <div className="flex justify-start">
               <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618"
                  alt="Logo do Start Solidário" style={{ width: '225px' }} /></Link>
            </div>

            <div className="flex justify-center items-center">
               <Link to={'/voluntariado'} className="px-2 text-2xl hover:underline">Voluntariado</Link>
               <Link to={'/produtos'} className="px-2 text-2xl hover:underline">Comprar</Link>
               <Link to={'/sobre'} className="px-2 text-2xl hover:underline">Sobre nós</Link>
            </div>

            <div className="flex justify-end items-center">
               {usuario.tipo === "ADM" ?
                  <div>
                     <Link to={'/produtos_adm'} className="px-2 text-2xl hover:underline">M-Produto</Link>
                     <Link to={'/categorias_adm'} className="px-2 text-2xl hover:underline">M-Categoria</Link>
                  </div>
                  : <div> </div>
               }
               <div className="flex justify-center items-center px-2 hover:underline">
               <Link to={'/cart'}><ShoppingCart size={32} weight='bold'/> </Link>
               <Link to={'/cart'}><p className="text-2xl">Carrinho</p> </Link>
               </div>
               <button onClick={logout} className="px-6 text-2xl hover:underline">Sair</button>
            </div>
         </div>
      )

      : component = (
         <div className="w-full flex justify-around items-center bg-[#2B4042] text-[#F5F4D6] py-3">
            <div className="flex justify-start items-center">
               <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618"
                  alt="Logo do Start Solidário" style={{ width: '225px' }} /></Link>
            </div>

            <div className="flex justify-center items-center">
               <Link to={'/voluntariado'} className="px-2 text-2xl hover:underline">Voluntariado</Link>
               <Link to={'/produtos'} className="px-2 text-2xl hover:underline">Comprar</Link>
               <Link to={'/sobre'} className="px-2 text-2xl hover:underline">Sobre nós</Link>
            </div>

            <div className="flex justify-end items-center text-2xl">
               <Link to={'/login'}>Login</Link>
            </div>

         </div>
      )
   }

   return (
      <>
         {component}
      </>
   )
}

export default Navbar
