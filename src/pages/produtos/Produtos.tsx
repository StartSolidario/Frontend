import { useContext, useEffect, useState } from "react";
import Home_navbar from "../../components/produtos/comum/home_navbar/Home_navbar"
import AuthContext from "../../contexts/AuthContext";
import Produto from "../../models/Produto";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { buscar } from "../../services/service";
import { Hourglass } from "react-loader-spinner";
import Home_Card from "../../components/produtos/comum/home_card/Home_Card";

function Produtos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutos() {
        try {
            await buscar("/produtos", setProdutos, {
                headers: {
                    Authorization: token,
                },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                ToastAlerta('O token expirou, favor logar novamente', "Info")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    return (
        <div className="bg-[#F5F4D6] min-h-[80vh]">
            <Home_navbar />

            <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl py-2 mt-6 w-full text-center bg-[#1E765A] text-[#F5F4D6]">Toda Compra Ajuda A Financiar a Viagem de um Voluntario!</h3>

                <div className="flex flex-col justify-center items-center">
                    <p className="text-2xl font-bold">Categoria: <span>Pet</span></p>
                    {produtos.length === 0 && (
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
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                                {produtos.map((produto) => (
                                    <Home_Card key={produto.id} prod={produto} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produtos