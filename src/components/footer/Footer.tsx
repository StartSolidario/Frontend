import { GithubLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
   let data = new Date().getFullYear();

   return (
      <div className="w-full min-h-[10vh] flex justify-evenly items-center bg-[#2B4042] text-[#F5F4D6] py-4">
         <div className="hidden md:flex justify-center items-center">
            <p className="px-2 text-lg md:text-xl lg:text-2xl">© {data} StartSolidario, Inc.</p>
         </div>

         <div className="flex justify-center items-center">
            <Link to={'/sobre'} className="px-2 text-lg md:text-xl lg:text-2xl hover:underline">Sobre Nós</Link>
            <Link to={'/contato'} className="px-2 text-lg md:text-xl lg:text-2xl hover:underline">Contate-nos</Link>
         </div>

         <div className="flex justify-center items-center">
            <a href="https://github.com/StartSolidario" target="_blank" className="flex justify-center items-center">
               <p className="px-2 text-lg md:text-xl lg:text-2xl hover:underline">Github</p>
               <GithubLogo size={40} weight='bold' />
            </a>
         </div>
      </div>
   )
}

export default Footer;
