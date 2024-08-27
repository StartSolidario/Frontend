import { Link } from "react-router-dom"

function Navbar() {
   return (
      <>
         <div className="w-full flex items-center bg-[#2B4042] text-[#F5F4D6] py-2">
            <div className="w-1/3 flex justify-start px-8">
            <Link to={'/'}><img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida.png?updatedAt=1724784792101" alt="Logo do Start Solidário" style={{width: '75px'}} /></Link>
            </div>

            <div className="w-1/3 flex justify-center px-8">
               <ul className="flex">
                  <li><Link to={'/voluntariado'} className="px-5 text-3xl">Voluntariado</Link></li>
                  <li><Link to={'/comprar'} className="px-5 text-3xl">Comprar</Link></li>
                  <li><Link to={'/contato'} className="px-5 text-3xl">Contato</Link></li>
               </ul>
            </div>

            <div className="w-1/3 flex justify-end px-8 text-3xl">
               <Link to={'/login'}><p>Login</p></Link>
            </div>
         </div>
      </>
   )
}

export default Navbar
