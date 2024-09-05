import { useContext, useEffect, useState } from "react";
import { DNA } from 'react-loader-spinner';
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
            <div className="w-full flex justify-center">
                <Link className="" to={'/cadastrocategoria_adm'}>Adicionar Categoria</Link>
            </div>

            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="bg-gray-200 flex justify-center">
                <div className="my-4 container flex flex-col">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarCategorias;