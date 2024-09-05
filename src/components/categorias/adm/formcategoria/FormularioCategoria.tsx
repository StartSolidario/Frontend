import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../../models/Categoria";
import AuthContext from "../../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../../services/service";
import { ToastAlerta } from "../../../../utils/ToastAlerta";

function FormularioCategoria() {

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate('/categorias_adm')
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {

            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                });
                ToastAlerta('Categoria atualizado com sucesso!', 'Sucesso');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao atualizar o Categoria!', 'Erro')
                }
            }

        } else {

            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                });
                ToastAlerta('Categoria cadastrada com sucesso!', 'Sucesso');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta('Erro ao cadastrar a Categoria!', 'Erro')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="flex flex-col justify-center items-center mx-auto container">
            <h1 className="my-8 text-4xl text-center">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="flex flex-col gap-4 w-1/2"
                onSubmit={gerarNovaCategoria}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="tipo">Descrição do Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua Categoria"
                        name='tipo'
                        className="border-2 border-slate-700 p-2 rounded"
                        value={categoria.tipo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="flex justify-center bg-indigo-400 hover:bg-indigo-800 mx-auto py-2 rounded w-1/2 text-slate-100"
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
            </form>
        </div>
    );
}

export default FormularioCategoria;