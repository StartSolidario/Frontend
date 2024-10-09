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

                    <div className="hidden sm:flex flex-col justify-center items-center py-4">
                        <p className="text-xl font-bold text-center pb-4">Obrigações e beneficios:</p>
                        <div className="flex flex-row justify-evenly items-center w-full">
                            <p className="text-center py-2 px-6 w-1/2">O voluntario deve oferecer seus serviços 4 dias por semana, 5 horas por dia</p>
                            <p className="text-center py-2 px-6 w-1/2">O voluntario que veio de fora da cidade tera moradia e alimentação garantida</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Popup
                        trigger={<button className="text-xl font-semibold border-[#2B4042] border-2 rounded-2xl py-2 px-4 hover:bg-neutral-300 cursor-pointer">Me Inscrever</button>} modal>
                        <div>
                            <VoluntariadoForms />
                        </div>
                    </Popup>
                </div>
            </div>

            <div className="hidden md:block h-full">
                <img src={viagem.imagem} className="w-full h-full" alt="Imagem Destino" />
            </div>
        </div>
    )
}

export default CardViagemComum