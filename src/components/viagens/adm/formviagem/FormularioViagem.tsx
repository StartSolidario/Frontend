import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Viagem from "../../../../models/Viagem";
import AuthContext from "../../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../../services/service";
import { ToastAlerta } from "../../../../utils/ToastAlerta";
import { RotatingLines } from "react-loader-spinner";

function FormularioViagem() {
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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setViagem({
            ...viagem,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate('/viagens_adm')
    }

    async function gerarNovaViagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {

            try {
                await atualizar(`/viagens`, viagem, setViagem, {
                    headers: { 'Authorization': token }
                });
                ToastAlerta('Viagem atualizada com sucesso!', 'Sucesso');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao atualizar a Viagem!', 'Erro')
                }
            }

        } else {

            try {
                await cadastrar(`/viagens`, viagem, setViagem, {
                    headers: { 'Authorization': token }
                });
                ToastAlerta('Viagem cadastrada com sucesso!', 'Sucesso');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao cadastrar a Viagem!', 'Erro')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="bg-yellow-100 min-h-[80vh]">
            <div className="flex flex-col justify-center items-center mx-auto container">
                <h1 className="my-8 text-4xl text-center">
                    {id === undefined ? 'Cadastrar Viagem' : 'Editar Viagem'}
                </h1>

                <form className="flex flex-col gap-4 w-4/5 md:w-3/4 lg:w-1/2 mb-8" onSubmit={gerarNovaViagem}>
                    <div className="flex flex-col gap-2">
                        <label>Destino da Viagem</label>
                        <input
                            type="text"
                            placeholder="Destino"
                            name='destino'
                            className="border-2 border-slate-700 p-2 rounded"
                            value={viagem.destino}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Data de Partida</label>
                        <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            name='data_partida'
                            className="border-2 border-slate-700 p-2 rounded"
                            value={viagem.data_partida}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Data de Retorno</label>
                        <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            name='data_retorno'
                            className="border-2 border-slate-700 p-2 rounded"
                            value={viagem.data_retorno}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Imagem do Destino</label>
                        <input
                            type="text"
                            placeholder="URL"
                            name='imagem'
                            className="border-2 border-slate-700 p-2 rounded"
                            value={viagem.imagem}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Detalhes da missão</label>
                        <input
                            type="text"
                            placeholder="Missão"
                            name='detalhes'
                            className="border-2 border-slate-700 p-2 rounded"
                            value={viagem.detalhes}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex justify-around">
                        <button
                            className="flex justify-center items-center w-[40%] py-2 text-slate-100 bg-emerald-600 hover:bg-emerald-800 border border-slate-700 rounded-lg"
                            type="submit">

                            {isLoading ? <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                                <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                            }

                        </button>

                        <button className='flex justify-center items-center w-[40%] py-2 text-slate-100 bg-yellow-800 hover:bg-yellow-950 border border-slate-700 rounded-lg'
                            onClick={retornar}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormularioViagem