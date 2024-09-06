import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../../models/Categoria";
import { buscar, deletar } from "../../../../services/service";
import { ToastAlerta } from "../../../../utils/ToastAlerta";
import AuthContext from "../../../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
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
        navigate('/categorias_adm/')
    }

    /**
     * Criamos a função deletarTema, responsável por deletar 
     * um tema da aplicação (DELETE).
     */
    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, {
                headers: { Authorization: token }
            })
            ToastAlerta('A Categoria foi apagada com sucesso!', 'Sucesso')
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            } else {
                ToastAlerta('Erro ao Excluir a Categoria!', 'Erro')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="bg-[#F5F4D6] h-[80vh]">
            <div className='mx-auto w-1/3'>
                <h1 className='pt-8 pb-4 text-4xl text-center'>Deletar Categoria</h1>
                <p className='mb-4 font-semibold text-center'>
                    Você tem certeza de que deseja apagar a Categoria a seguir?</p>
                <div className=' border-2 border-[#2B4042] rounded-2xl flex flex-col justify-between overflow-hidden'>
                    <header
                        className='bg-[#1E765A] text-white px-6 py-2 font-bold text-2xl'>
                        Categoria
                    </header>
                    <p className='bg-slate-200 p-8 h-full text-3xl'>{categoria.tipo}</p>
                    <div className="flex">
                        <button
                            className='w-full text-slate-100 bg-yellow-800 hover:bg-yellow-950 flex items-center justify-center py-2'
                            onClick={retornar}
                        >
                            Não
                        </button>
                        <button
                            className='w-full text-slate-100 bg-emerald-500 hover:bg-emerald-800 flex items-center justify-center py-2'
                            onClick={deletarCategoria}
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
export default DeletarCategoria