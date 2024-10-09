import { ReactNode, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { ShoppingCart, SignOut } from "@phosphor-icons/react";

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
            <div className="w-full min-h-[10vh] bg-[#2B4042] text-white py-3">
               <div className="flex flex-col md:flex-row justify-around items-center">
                  <div className="flex justify-center items-center w-1/2 sm:w-2/5 md:w-1/5">
                     <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618" alt="Logo do Start Solidário" /> </Link>
                  </div>

                  <div className="flex justify-center items-center my-2">
                     <Link to={'/produtos'} className="px-2 text-lg sm:text-2xl md:text-xl lg:text-2xl hover:underline">Comprar</Link>
                     <Link to={'/sobre'} className="px-2 text-lg sm:text-2xl md:text-xl lg:text-2xl hover:underline">Sobre nós</Link>
                     <Link to={'/contato'} className="px-2 text-lg sm:text-2xl md:text-xl lg:text-2xl hover:underline">Contate-nos</Link>
                  </div>

                  <div className="flex justify-center items-center">
                     <div className="flex justify-center items-center px-2 hover:underline">

                        <div className="hidden lg:block"><Link to={'/cart'}><ShoppingCart size={38} weight='bold' /></Link></div>
                        <div className="block lg:hidden"><Link to={'/cart'}><ShoppingCart size={30} weight='bold' /></Link></div>

                        <Link to={'/cart'}><p className="text-xl sm:text-2xl md:text-xl lg:text-2xl">Carrinho</p> </Link>
                     </div>

                     <div className="flex justify-center items-center px-2 hover:underline">

                        <div className="hidden lg:block"><button onClick={logout} className="flex px-6 text-xl sm:text-2xl md:text-xl lg:text-2xl hover:underline"><SignOut size={38} weight='bold' />Sair</button></div>
                        <div className="block lg:hidden"><button onClick={logout} className="flex px-6 text-xl sm:text-2xl md:text-xl lg:text-2xl hover:underline"><SignOut size={30} weight='bold' />Sair</button></div>

                     </div>
                  </div>

               </div>
               {usuario.tipo === "Administrador" ?
                  <div className="flex flex-col justify-center items-center">
                     <h2 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold mt-4">Painel do Administrador:</h2>
                     <div className="flex justify-center items-center">
                        <Link to={'/produtos_adm'} className="px-2 text-xl sm:text-2xl md:text-xl lg:text-2xl hover:underline">Produtos</Link>
                        <Link to={'/categorias_adm'} className="px-2 text-xl sm:text-2xl md:text-xl lg:text-2xl hover:underline">Categorias</Link>
                        <Link to={'/viagens_adm'} className="px-2 text-xl sm:text-2xl md:text-xl lg:text-2xl hover:underline">Viagens</Link>
                     </div>
                  </div>
                  : <div></div>
               }
            </div>

         )

         : component = (
            <div className="flex flex-col md:flex-row justify-around items-center w-full min-h-[10vh] bg-[#2B4042] text-white py-3">
               <div className="flex justify-center items-center w-1/2 sm:w-2/5 md:w-1/5">
                  <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618" alt="Logo do Start Solidário" /> </Link>
               </div>

               <div className="flex justify-center items-center my-2">
                  <Link to={'/produtos'} className="px-2 text-xl sm:text-2xl md:text-xl lg:text-2xl hover:underline">Comprar</Link>
                  <Link to={'/sobre'} className="px-2 text-xl sm:text-2xl md:text-xl lg:text-2xl hover:underline">Sobre nós</Link>
                  <Link to={'/contato'} className="px-2 text-xl sm:text-2xl md:text-xl lg:text-2xl hover:underline">Contate-nos</Link>
               </div>

               <div className="flex justify-center items-center">
                  <Link to={'/login'} className="text-xl sm:text-2xl md:text-xl lg:text-2xl">Login</Link>
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
