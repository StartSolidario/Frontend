import { useContext, useEffect, useState } from "react";
import { Hourglass } from 'react-loader-spinner';
import Categoria from "../../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategoria";
import { buscar } from "../../../../services/service";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../../contexts/AuthContext";
import { ToastAlerta } from "../../../../utils/ToastAlerta";

function ListarCategorias() {

    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const { handleLogout, usuario } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarTemas() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: { authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    //Monitora o Token
    useEffect(() => {
        if (token == '') {
            ToastAlerta('Voce precisa estar logado!', "Info")
            navigate('/')
        }
    }, [token])

    //Monitora os cards
    useEffect(() => {
        buscarTemas();
    }, [categorias.length])

    return (
        <>
            <div className="flex flex-col h-[80vh] bg-[#F5F4D6]">
                <div className="w-full flex justify-center">
                    <Link className="my-4 py-4 px-4 border-2 rounded-lg border-[#2B4042] bg-[#1E765A] text-[#F5F4D6]" to={'/cadastrocategoria_adm'}>Adicionar Nova Categoria</Link>
                </div>

                {categorias.length === 0 && (
                    <Hourglass
                        visible={true}
                        height="120"
                        width="120"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass="mx-auto my-8"
                        colors={['#10b981', '#065f46']}
                    />
                )}

                <div className="bg-[#F5F4D6] flex justify-center">
                    <div className="my-4 container flex flex-col">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categorias.map((categoria) => (
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarCategorias;