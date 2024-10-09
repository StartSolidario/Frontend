import { Link } from "react-router-dom"
import Viagem from "../../../../models/Viagem"
import { useState } from "react";

interface CardViagensProps {
    viagem: Viagem
}

function CardViagens({ viagem }: CardViagensProps) {
    const [isImageVisible, setIsImageVisible] = useState(true);

    const handleImageClick = () => {
        if (isImageVisible) {
            setIsImageVisible(false)
        } else {
            setIsImageVisible(true)
        }
    }

    return (
        <div className='flex flex-col justify-between border-2 border-[#2B4042] rounded-2xl overflow-hidden bg-white'>
            <h1 className='py-2 bg-[#1E765A] text-white font-bold text-2xl text-center'>
                Destino - <span>{viagem.destino}</span>
            </h1>

            <div className="flex justify-center items-center">
                {isImageVisible && (
                    <img
                        src={viagem.imagem}
                        className="w-2/3 md:w-full md:h-full"
                        alt="Imagem Destino"
                        onClick={handleImageClick}
                    />
                )}
                {!isImageVisible && (
                    <div onClick={handleImageClick} className="text-center text-white bg-[#1E765A] w-full">Abrir imagem</div>
                )}
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="text-center font-semibold w-full p-2">Demais atributos:</h2>
                <div className="flex flex-col sm:flex-row justify-evenly items-center w-full">
                    <p className="p-2 font-semibold">Partida - <span className="font-normal sm:font-semibold">{viagem.data_partida}</span></p>
                    <p className="p-2 font-semibold">Retorno - <span className="font-normal sm:font-semibold">{viagem.data_retorno}</span></p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <p className="text-center font-semibold w-full pt-2">Detalhes:</p>
                    <span className="text-center w-full p-2">{viagem.detalhes}</span>
                </div>
            </div>

            <div className="flex">

                <Link to={`/editarviagem_adm/${viagem.id}`}
                    className='w-full text-slate-100 bg-emerald-600 hover:bg-emerald-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarviagem_adm/${viagem.id}`}
                    className='w-full text-slate-100 bg-yellow-800 hover:bg-yellow-950 flex items-center justify-center py-2'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardViagens