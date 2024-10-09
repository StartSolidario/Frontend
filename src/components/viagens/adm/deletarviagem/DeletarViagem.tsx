import { useNavigate, useParams } from "react-router-dom";
import Viagem from "../../../../models/Viagem";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../contexts/AuthContext";
import { buscar, deletar } from "../../../../services/service";
import { ToastAlerta } from "../../../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";

function DeletarViagem() {
    
    const navigate = useNavigate()

    const [viagem, setViagem] = useState<Viagem>({} as Viagem);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/viagens/${id}`, setViagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'Info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate('/viagens_adm')
    }

    async function deletarViagem() {
        setIsLoading(true)

        try {
            await deletar(`/viagens/${id}`, {
                headers: { Authorization: token }
            })
            ToastAlerta('A Viagem foi apagada com sucesso!', 'Sucesso')
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            } else {
                ToastAlerta('Erro ao Excluir a Viagem!', 'Erro')
            }
        }

        setIsLoading(false)
        retornar()
    }
    
    return (
        <div className="bg-yellow-100 min-h-[80vh] py-8">
            <div className='mx-auto w-3/4 md:w-2/4 lg:w-1/3'>
                <h1 className='pt-8 pb-4 text-4xl text-center'>Deletar Viagem</h1>

                <p className='mb-4 font-semibold text-center'>Você tem certeza de que deseja apagar a Viagem a seguir?</p>

                <div className='border-2 border-[#2B4042] rounded-2xl flex flex-col justify-between overflow-hidden'>
                    <header className='py-2 bg-[#1E765A] text-white font-bold text-2xl text-center'>
                        Destino - <span>{viagem.destino}</span>
                    </header>

                    <div className="flex justify-center items-center bg-slate-100">
                        <img className="w-3/4 h-full" src={viagem.imagem}></img>
                    </div>
                    <div className="flex">
                        <button
                            className='w-full text-slate-100 bg-yellow-800 hover:bg-yellow-950 flex items-center justify-center py-2'
                            onClick={retornar}
                        >
                            Não
                        </button>
                        <button
                            className='w-full text-slate-100 bg-emerald-600 hover:bg-emerald-800 flex items-center justify-center py-2'
                            onClick={deletarViagem}
                        >
                            {isLoading ? <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                                <span>Sim</span>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarViagem