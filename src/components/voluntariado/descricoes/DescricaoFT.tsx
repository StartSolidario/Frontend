function DescricaoFT() {
    return (
        <div className='bg-[#1E765A] h-[90vh] w-[70%] m-auto border-2 border-[#2B4042] rounded-2xl'>
            <form className="flex flex-col justify-center items-center w-full h-full text-[#F5F4D6]">
                <div className="flex flex-col h-[90%]">
                    <div className="flex flex-col items-center py-4">
                        <p className="text-4xl font-bold">Destino: São Paulo</p>
                        <div className="flex justify-evenly w-4/5 py-2">
                            <p className="text-2xl font-semibold">Saida - <span className="font-normal">10/2024</span></p>
                            <p className="text-2xl font-semibold">Volta - <span className="font-normal">11/2024</span></p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center py-4">
                        <div className="flex flex-col items-center">
                            <p className="text-3xl font-semibold text-center py-2">Missão: Fortaleza </p>
                            <p className="text-3xl text-center py-2 w-3/5">O StartSolidario esta buscando voluntarios para Trabalhar em cozinhas comunitarias e abrigos quando o frio chegar</p>
                        </div>
                        <div className="flex flex-col items-center py-4">
                            <p className="text-3xl font-bold text-center py-4">Obrigaçoes e beneficios:</p>
                            <div className="flex justify-evenly w-full">
                                <p className="text-2xl text-center py-2 px-6 w-1/2">O voluntario deve oferecer seus serviços 5 dias por semana, 5 horas por dia</p>
                                <p className="text-2xl text-center py-2 px-6 w-1/2">O voluntario que veio de fora de São Paulo tera moradia e alimentação garantida</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center h-[10%]">
                    <button type="submit" className="border-2 rounded-xl">
                        <span className="text-xl text-center py-4 px-8">Fechar</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DescricaoFT