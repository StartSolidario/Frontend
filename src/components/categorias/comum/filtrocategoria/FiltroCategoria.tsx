import { useContext, useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Produto from "../../../../models/Produto";
import Categoria from "../../../../models/Categoria";
import AuthContext from "../../../../contexts/AuthContext";
import { buscar } from "../../../../services/service";
import { ToastAlerta } from "../../../../utils/ToastAlerta";
import NavbarComum from "../../../produtos/comum/navbarcomum/NavbarComum";
import CardComum from "../../../produtos/comum/cardcomum/CardComum";

function FiltroCategoria() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categoria, setCategoria] = useState<Categoria | null>(null); // Estado para armazenar a categoria
    const [loading, setLoading] = useState(true); // Estado de carregamento

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>(); // Use id da categoria

    async function buscarProdutos() {
        try {
            await buscar(`/categorias/${id}/produtos`, (data: Produto[]) => {
                setProdutos(data);
            }, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                ToastAlerta('O token expirou, favor logar novamente', "Info");
                handleLogout();
            }
        }
    }

    async function buscarCategoria() {
        try {
            await buscar(`/categorias/${id}`, (data: Categoria) => {
                setCategoria(data);
                setLoading(false); // Define que o carregamento terminou
            }, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        buscarProdutos();
        buscarCategoria();
    }, [id]); // A busca de produtos e da categoria será disparada quando o id mudar

    if (loading) {
        return (
            <div className="bg-[#F5F4D6] min-h-[80vh]">
                <NavbarComum />
                <Hourglass
                    visible={true}
                    height="120"
                    width="120"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass="mx-auto my-8"
                    colors={['#10b981', '#065f46']}
                />
            </div>
        );
    }

    return (
        <div className="bg-[#F5F4D6] min-h-[80vh]">
            <NavbarComum />

            <div>
                <div className="bg-[#F5F4D6] flex flex-col justify-center items-center">
                    <p className="text-lg md:text-xl lg:text-2xl text-white text-center font-bold w-full bg-[#1E765A] px-8 py-2">
                        Produtos da Categoria - <span>{categoria?.nome || "Nome não disponível"}</span>
                    </p>

                    <div className="flex flex-col container">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-4 mx-8'>
                            {produtos.map((produto) => (
                                <CardComum key={produto.id} prod={produto} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FiltroCategoria;
