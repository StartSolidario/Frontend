import Carrossel from "../../components/carrossel/Carrossel"
import Home_Lista from "../../components/produtos/comum/home_lista/Home_Lista"
import Home_navbar from "../../components/produtos/comum/home_navbar/Home_navbar"

function Home() {
   return (
      <div className="bg-[#F5F4D6]">
         <Home_navbar />

         <div className="flex flex-col justify-center items-center bg-[#1E765A]  pb-8 border-2 border-[#2B4042] ">
            <h2 className="text-3xl pt-2 text-[#F5F4D6]">O StartSolidario esta sempre trabalhando para erradicar o pobreza</h2>
            <p className="text-2xl pb-2 text-[#F5F4D6]">Gostaria de fazer a diferença de forma ativa? Confira nossas missoes atuais:</p>
            <Carrossel />
         </div>

         <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl py-2 mt-6 w-full text-center bg-[#1E765A] text-[#F5F4D6]">Não pode viajar? Não tem problema, ajude a financiar a viagem de alguem!</h3>
            <div className="flex flex-col justify-center items-center">
               <h4 className="text-2xl font-bold">Produtos disponiveis:</h4>
               <div>
                  < Home_Lista />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home