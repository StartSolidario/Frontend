import Popup from "reactjs-popup"
import Viagem from "../../../../models/Viagem"
import VoluntariadoForms from "../../../voluntariado/VoluntariadoForms"

interface CardViagensProps {
    viagem: Viagem
}

function CardViagemComum({ viagem }: CardViagensProps) {
    return (
        <div className="grid grid-cols-3 justify-center items-center">
            <div className="col-span-3 md:col-span-2 flex flex-col justify-center items-center p-2">
                <div>
                    <h1 className="font-bold text-2xl">Missão - <span>{viagem.destino}</span></h1>

                    <div className="flex flex-col sm:flex-row justify-evenly items-center w-full">
                        <p className="p-2 font-semibold">Partida - <span className="font-normal sm:font-semibold">{viagem.data_partida}</span></p>
                        <p className="p-2 font-semibold">Retorno - <span className="font-normal sm:font-semibold">{viagem.data_retorno}</span></p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p className="text-center font-semibold w-full pt-2">Detalhes:</p>
                        <span className="text-center w-full p-2">{viagem.detalhes}</span>
                    </div>
                </div>

                <div>
                    <Popup
                        trigger={<button className="text-xl font-semibold border-[#2B4042] border-2 rounded-2xl py-2 px-4 hover:bg-[#2B4042] cursor-pointer">Me Inscrever</button>} modal>
                        <div>
                            <VoluntariadoForms />
                        </div>
                    </Popup>
                </div>
            </div>

            <div className="hidden md:block h-full">
                <img src={viagem.imagem} className="w-full h-full" alt="Imagem Destino"/>
            </div>
        </div>
    )
}

export default CardViagemComum