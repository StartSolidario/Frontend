import { useContext, useEffect, useState } from "react";
import Categoria from "../../../../models/Categoria";
import { buscar } from "../../../../services/service";
import AuthContext from "../../../../contexts/AuthContext";
import CardCategoriaComum from "../cardcategoriacomum/CardCategoriaComum";

function ListarCardCategoriaComum() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const { handleLogout, usuario } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarCategorias() {
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

    //Monitora os cards
    useEffect(() => {
        buscarCategorias();
    }, [categorias.length])

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="flex w-full md:w-3/4 lg:w-2/3 px-4">
                    {categorias.map((categoria) => (
                        <CardCategoriaComum key={categoria.id} categoria={categoria} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListarCardCategoriaComum;