import Carrossel from "../../components/carrossel/Carrossel"
import Home_navbar from "../../components/produtos/comum/home_navbar/Home_navbar"

function Home() {
   return (
      <div className="bg-[#F5F4D6]">
         <Home_navbar />

         <div className="flex flex-col justify-center items-center bg-[#1E765A] mx-20 pb-8 border-2 border-[#2B4042] rounded-2xl">
            <h2 className="text-3xl pt-2 text-[#F5F4D6]">O StartSolidario esta sempre trabalhando para erradicar o pobreza</h2>
            <p className="text-2xl pb-2 text-[#F5F4D6]">Gostaria de fazer a diferença de forma ativa? Confira nossas missoes atuais:</p>
            <Carrossel />
         </div>

         <div>
            
         </div>
      </div>
   )
}

export default Home