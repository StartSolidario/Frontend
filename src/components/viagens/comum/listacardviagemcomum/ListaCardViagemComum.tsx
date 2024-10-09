import { useContext, useEffect, useState } from "react";
import Viagem from "../../../../models/Viagem";
import AuthContext from "../../../../contexts/AuthContext";
import { buscar } from "../../../../services/service";
import CardViagemComum from "../cardviagemcomum/CardViagemComum";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function ListaCardViagemComum() {
    const [viagens, setViagens] = useState<Viagem[]>([])

    const { handleLogout, usuario } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarViagens() {
        try {
            await buscar('/viagens', setViagens, {
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
        buscarViagens();
    }, [viagens.length])

    return (
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={12}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}

            loop={true}
            autoplay={{
                delay: 7500,
                disableOnInteraction: false,
            }}

            className="w-full h-full"
        >
            {viagens.map((viagem) => (
                <SwiperSlide key={viagem.id}>
                    <div className="mx-12 bg-neutral-100 border-2 border-[#2B4042] rounded-2xl overflow-hidden">
                        <CardViagemComum viagem={viagem} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ListaCardViagemComum