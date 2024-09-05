import { ReactNode, useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext";

function Navbar() {

   // const navigate = useNavigate();

   const { usuario } = useContext(AuthContext)

   // function logout(){
   //     handleLogout()
   //     ToastAlerta("O usuário foi desconectado!", "Info")
   //     navigate("/")
   // }

   let component: ReactNode;

   if (usuario.token !== "" && usuario.tipo !== "") {
      component = (
         <div className="w-full flex items-center bg-[#2B4042] text-[#F5F4D6] py-3">
            <div className="w-[20%] flex justify-start px-8">
               <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618" alt="Logo do Start Solidário" style={{ width: '225px' }} /></Link>
            </div>

            <div className="w-[60%] flex justify-center px-8">
               <ul className="flex">
                  <li><Link to={'/voluntariado'} className="px-5 text-3xl">Voluntariado</Link></li>
                  <li><Link to={'/comprar'} className="px-5 text-3xl">Comprar</Link></li>
                  <li><Link to={'/sobre'} className="px-5 text-3xl">Sobre nós</Link></li>
               </ul>
            </div>

            <div className="w-[20%] flex justify-end px-8 text-3xl">
               <Link to={'/login'}>M-Produto</Link>
               <Link to={'/login'}>M-Categoria</Link>
               <Link to={'/login'}>Sair</Link>
            </div>
         </div>)
   } else if(usuario.token !== "" && usuario.tipo == "") {
      component = (
         <div className="w-full flex items-center bg-[#2B4042] text-[#F5F4D6] py-3">
            <div className="w-[20%] flex justify-start px-8">
               <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618" alt="Logo do Start Solidário" style={{ width: '225px' }} /></Link>
            </div>

            <div className="w-[60%] flex justify-center px-8">
               <ul className="flex">
                  <li><Link to={'/voluntariado'} className="px-5 text-3xl">Voluntariado</Link></li>
                  <li><Link to={'/comprar'} className="px-5 text-3xl">Comprar</Link></li>
                  <li><Link to={'/sobre'} className="px-5 text-3xl">Sobre nós</Link></li>
               </ul>
            </div>

            <div className="w-[20%] flex justify-end px-8 text-3xl">
               <Link to={'/login'}>Login</Link>
            </div>
         </div>
      )
   } else {
      component = (
         <div className="w-full flex items-center bg-[#2B4042] text-[#F5F4D6] py-3">
            <div className="w-[20%] flex justify-start px-8">
               <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida-with-text-double-font.png?updatedAt=1724785507618" alt="Logo do Start Solidário" style={{ width: '225px' }} /></Link>
            </div>

            <div className="w-[60%] flex justify-center px-8">
               <ul className="flex">
                  <li><Link to={'/voluntariado'} className="px-5 text-3xl">Voluntariado</Link></li>
                  <li><Link to={'/comprar'} className="px-5 text-3xl">Comprar</Link></li>
                  <li><Link to={'/sobre'} className="px-5 text-3xl">Sobre nós</Link></li>
               </ul>
            </div>

            <div className="w-[20%] flex justify-end px-8 text-3xl">
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
