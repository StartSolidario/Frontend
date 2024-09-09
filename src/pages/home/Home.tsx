import { MagnifyingGlass, TShirt } from "@phosphor-icons/react"
import Carrossel from "../../components/carrossel/Carrossel"

function Home() {
   return (
      <div className="bg-[#F5F4D6]">
         <div className="flex flex-col justify-center items-center pt-8">
            <form className="relative flex w-3/5 rounded-xl">
               <input
                  className="w-full rounded-xl border px-6 py-2 text-base font-medium outline-none placeholder:font-medium focus:border-gray-500"
                  type="text"
                  placeholder="Buscar Produto"
               />

               <button className="absolute right-0 top-0 flex rounded-xl px-3 py-2 outline-none" aria-label="Buscar">
                  <MagnifyingGlass size={32} />
               </button>
            </form>

            <div className='flex gap-10 py-4'>
               <span className="flex flex-col justify-center items-center">
                  <TShirt size={48} weight='bold' />
                  <p className="text-base">Categoria</p>
               </span>
               <span className="flex flex-col justify-center items-center">
                  <TShirt size={48} weight='bold' />
                  <p className="text-base">Categoria</p>
               </span>
               <span className="flex flex-col justify-center items-center">
                  <TShirt size={48} weight='bold' />
                  <p className="text-base">Categoria</p>
               </span>
               <span className="flex flex-col justify-center items-center">
                  <TShirt size={48} weight='bold' />
                  <p className="text-base">Categoria</p>
               </span>
            </div>
         </div>

         <div className="flex flex-col justify-center items-center bg-[#1E765A] mx-20 pb-8 border-2 border-[#2B4042] rounded-2xl">
            <h2 className="text-3xl pt-2 text-[#F5F4D6]">O StartSolidario esta sempre trabalhando para erradicar o pobreza</h2>
            <p className="text-2xl pb-2 text-[#F5F4D6]">Gostaria de fazer a diferença de forma ativa? Confira nossas missoes atuais:</p>
            <Carrossel />
         </div>
      </div>
   )
}

export default Home