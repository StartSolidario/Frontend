import { useEffect, useState } from "react";
import Carrossel from "../../components/carrossel/Carrossel"
import Home_navbar from "../../components/produtos/comum/home_navbar/Home_navbar"
import Produto from "../../models/Produto";
import Categoria from "../../models/Categoria";
import { buscar } from "../../services/service";
import { Hourglass } from "react-loader-spinner";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import { Navigation, Pagination } from "swiper/modules";

import '../produtos/Produtos.css';
import Home_Card from "../../components/produtos/comum/home_card/Home_Card";

function Home() {
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
            <Home_navbar />
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
      <div className="bg-[#F5F4D6]">
         <Home_navbar />

         <div className="">            
            <h2 className="text-5xl text-center font-bold pt-4 text-gray-800"> Start Solidário: Unidos para Erradicar a Pobreza</h2>
            <p className="text-xl pt-4 pb-4 text-center py-6 text-gray-700">Você deseja ser parte da transformação? Explore nossas missões atuais e faça a diferença hoje mesmo:</p></div>

            <div className=" flex justify-center text-center items-center bg-[#1E765A] py-4 border-2 border-[#2B4042] ">
               <Carrossel />
            </div>

         <div className="bg-[#F5F4D6] min-h-[80vh]">
            <div className="flex flex-col justify-center items-center py-16">
            <h3 className="text-3xl py-4 mt-10  text-center ">
            <strong>Não pode embarcar nesta jornada? Sem problemas!</strong></h3>
            <h4 className=" text-3xl  text-center ">Você ainda pode contribuir para realizar futuros ao financiar a viagem de alguém.</h4>

                {categorias.map(categoria => (
                    <div key={categoria.id} className="flex flex-col justify-center items-center w-full mx-4 my-4 py-16">
                        <p className="text-4xl font-bold my-4">Categoria - <span className="text-[#1E765A]">{categoria.tipo}</span></p>
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
                            }}
                            className="w-full h-[90%] border-[#2B4042] py-8 px-12 "
                        >
                            {produtos.filter(produto => produto.categoria?.tipo === categoria.tipo).map((produto) => (
                                <SwiperSlide key={produto.id}>
                                    <Home_Card prod={produto} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ))}
            </div>
        </div>
      </div>
   )
}

export default Home