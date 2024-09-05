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
            <div className="w-1/3 flex justify-start">
               <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618" alt="Logo do Start Solidário" style={{ width: '225px' }} /></Link>
            </div>

            <div className="w-1/3 flex justify-center px-8">
               <ul className="flex">
                  <li><Link to={'/voluntariado'} className="px-5 text-3xl">Voluntariado</Link></li>
                  <li><Link to={'/comprar'} className="px-5 text-3xl">Comprar</Link></li>
                  <li><Link to={'/sobre'} className="px-5 text-3xl">Sobre nós</Link></li>
               </ul>
            </div>

            <div className="w-1/3 flex justify-end px-8 text-3xl">
               <Link to={'/login'} className="px-5 text-3xl">M-Produto</Link>
               <Link to={'/categorias_adm'} className="px-5 text-3xl">M-Categoria</Link>
               <p onClick={logout} className="px-5 text-3xl">Sair</p>
            </div>
         </div>)
   } else if (usuario.token !== "" && usuario.tipo == "") {
      component = (
         <div className="w-full flex justify-around items-center bg-[#2B4042] text-[#F5F4D6] py-3">
            <div className="flex justify-start">
               <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618" alt="Logo do Start Solidário" style={{ width: '225px' }} /></Link>
            </div>

            <div className="flex justify-center px-8">
               <ul className="flex">
                  <li><Link to={'/voluntariado'} className="px-5 text-3xl">Voluntariado</Link></li>
                  <li><Link to={'/comprar'} className="px-5 text-3xl">Comprar</Link></li>
                  <li><Link to={'/sobre'} className="px-5 text-3xl">Sobre nós</Link></li>
               </ul>
            </div>

            <div className="flex justify-end px-8 text-3xl">
               <p onClick={logout} className="px-5 text-3xl">Sair</p>
            </div>
         </div>
      )
   } else {
      component = (
         <div className="w-full flex justify-around items-center bg-[#2B4042] text-[#F5F4D6] py-3">
            <div className="flex justify-start">
               <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618" alt="Logo do Start Solidário" style={{ width: '225px' }} /></Link>
            </div>

            <div className="flex justify-center px-8">
               <ul className="flex">
                  <li><Link to={'/voluntariado'} className="px-5 text-3xl">Voluntariado</Link></li>
                  <li><Link to={'/comprar'} className="px-5 text-3xl">Comprar</Link></li>
                  <li><Link to={'/sobre'} className="px-5 text-3xl">Sobre nós</Link></li>
               </ul>
            </div>

            <div className="flex justify-end px-8 text-3xl">
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
