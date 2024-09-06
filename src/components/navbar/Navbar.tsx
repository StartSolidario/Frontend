import { ReactNode, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

   const navigate = useNavigate();

   const { usuario, handleLogout } = useContext(AuthContext)

   function logout() {
      handleLogout()
      ToastAlerta("O usuário foi desconectado!", "Info")
      navigate("/")
   }

   let component: ReactNode;

   if (usuario.token !== "" && usuario.tipo !== "") {
      component = (
         <div className="w-full flex justify-around items-center bg-[#2B4042] text-[#F5F4D6] py-3">
            <div className="flex justify-start items-center">
               <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618" alt="Logo do Start Solidário" style={{ width: '225px' }} /></Link>
            </div>

            <div className="flex justify-center items-center">
               <Link to={'/voluntariado'} className="px-2 text-2xl hover:underline">Voluntariado</Link>
               <Link to={'/comprar'} className="px-2 text-2xl hover:underline">Comprar</Link>
               <Link to={'/sobre'} className="px-2 text-2xl hover:underline">Sobre nós</Link>
            </div>

            <div className="flex justify-end items-center">
               <Link to={'/produtos_adm'} className="px-2 text-2xl hover:underline">M-Produto</Link>
               <Link to={'/categorias_adm'} className="px-2 text-2xl hover:underline">M-Categoria</Link>
               <button onClick={logout} className="px-2 text-2xl hover:underline">Sair</button>
            </div>
         </div>)

   } else if (usuario.token !== "" && usuario.tipo == "") {
      component = (
         <div className="w-full flex justify-around items-center bg-[#2B4042] text-[#F5F4D6] py-3">
            <div className="flex justify-start items-center">
               <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618" alt="Logo do Start Solidário" style={{ width: '225px' }} /></Link>
            </div>

            <div className="flex justify-center items-center">
               <Link to={'/voluntariado'} className="px-2 text-2xl hover:underline">Voluntariado</Link>
               <Link to={'/comprar'} className="px-2 text-2xl hover:underline">Comprar</Link>
               <Link to={'/sobre'} className="px-2 text-2xl hover:underline">Sobre nós</Link>
            </div>

            <div className="flex justify-end items-center text-2xl">
               <button onClick={logout}>Sair</button>
            </div>
         </div>
      )

   } else {
      component = (
         <div className="w-full flex justify-around items-center bg-[#2B4042] text-[#F5F4D6] py-3">
            <div className="flex justify-start items-center">
               <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618" alt="Logo do Start Solidário" style={{ width: '225px' }} /></Link>
            </div>

            <div className="flex justify-center items-center">
               <Link to={'/voluntariado'} className="px-2 text-2xl hover:underline">Voluntariado</Link>
               <Link to={'/comprar'} className="px-2 text-2xl hover:underline">Comprar</Link>
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
