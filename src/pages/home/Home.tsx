import Carrossel from "../../components/carrossel/Carrossel"
import Home_Lista from "../../components/produtos/comum/home_lista/Home_Lista"
import Home_navbar from "../../components/produtos/comum/home_navbar/Home_navbar"

function Home() {
   return (
      <div className="bg-[#F5F4D6]">
         <Home_navbar />

         <div>            
            <h2 className="text-5xl text-center font-bold pt-4 text-gray-800">O Start Solidário: Unidos para Erradicar a Pobreza</h2>
            <p className="text-xl pt-4 pb-4c text-center py-6 text-gray-700">Você deseja ser parte da transformação? Explore nossas missões atuais e faça a diferença hoje mesmo:</p></div>


         <div className="flex flex-col justify-center items-center bg-[#1E765A]  pb-8 border-2 border-[#2B4042] ">

            <Carrossel />
         </div>

         <div className="flex flex-col justify-center items-center">
         <h3 className="text-3xl py-4 mt-10  text-center ">
            <strong>Não pode embarcar nesta jornada? Sem problemas!</strong></h3>
            <h4 className=" text-3xl  text-center ">Você ainda pode contribuir para realizar futuros ao financiar a viagem de alguém.</h4>

            <div className="flex flex-col justify-center items-center py-10">
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