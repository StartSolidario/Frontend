import { useEffect, useState } from "react";
import { buscar } from "../../services/service";
import { Hourglass } from "react-loader-spinner";
import Produto from "../../models/Produto";
import Categoria from "../../models/Categoria";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import { Navigation, Pagination } from "swiper/modules";

import './Produtos.css';
import NavbarComum from "../../components/produtos/comum/navbarcomum/NavbarComum";
import CardComum from "../../components/produtos/comum/cardcomum/CardComum";

function Produtos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [loading, setLoading] = useState(true);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', (data: Categoria[]) => setCategorias(data), {});
        } catch (error) {
            console.error('Erro ao carregar categorias', error);
        }
    }

    async function buscarProdutos() {
        try {
            await buscar('/produtos', (data: Produto[]) => {
                setProdutos(data);
                setLoading(false);
            }, {});
        } catch (error) {
            console.error('Erro ao carregar produtos', error);
        }
    }

    useEffect(() => {
        (async () => {
            try {
                await buscarCategorias(); // Buscar categorias primeiro
            } catch (error) {
                console.error('Erro ao carregar categorias', error);
            }
        })();
    }, []); // Carregar categorias uma vez na montagem do componente

    useEffect(() => {
        if (categorias.length > 0) {
            buscarProdutos(); // Buscar produtos após categorias estarem carregadas
        }
    }, [categorias]); // Recarregar produtos quando categorias mudarem

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
        )
    }

    return (
        <div className="bg-[#F5F4D6] min-h-[80vh]">
            <NavbarComum />

            <div className="flex flex-col justify-center items-center">
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl py-2 px-4 mt-6 w-full text-center bg-[#1E765A] text-[#F5F4D6]">Toda Compra Ajuda A Financiar a Viagem de um Voluntário!</h3>

                {categorias.map(categoria => (
                    <div key={categoria.id} className="flex flex-col justify-center items-center w-full my-4">
                        <p className="text-2xl font-bold my-4">Categoria - <span>{categoria.nome}</span></p>
                        <Swiper
                            modules={[Pagination, Navigation]}
                            spaceBetween={12}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                                1536: {
                                    slidesPerView: 5,
                                },
                            }}
                            className="w-[90%] h-full py-8 px-12 bg-[#1E765A] rounded-2xl"
                        >
                            {produtos.filter(produto => produto.categoria?.nome === categoria.nome).map((produto) => (
                                <SwiperSlide key={produto.id}>
                                    <CardComum prod={produto} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Produtos;
