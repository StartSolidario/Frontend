function Sobre() {
    return (
        <>
            {/* Seção: O que é o StartSolidário */}
            <div className="bg-[#1d2c2e] flex flex-col items-center p-10">
                <h1 className="text-white text-center font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    O que é o StartSolidário?
                </h1>

                <div className="flex items-center justify-between max-w-4xl w-full">
                    <p className="text-white text-center text-base md:text-lg lg:text-xl px-4">
                        O Start Solidário é muito mais que um e-commerce, é um movimento que une solidariedade e propósito. Nossa plataforma conecta quem quer ajudar com quem mais precisa, oferecendo a oportunidade de transformar vidas através de doações, voluntariado e compras com significado.
                    </p>
                    
                    <img
                        src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida.png?updatedAt=1724784792101"
                        alt="Logotipo"
                        className="hidden md:block w-2/5"
                    />
                </div>
            </div>

            {/* Seção: Como você pode fazer a diferença e Nosso Propósito */}
            <div className="flex flex-col justify-center items-center p-8 gap-8 bg-[#324C4F]">

                {/* Seção: Como você pode fazer a diferença */}
                <div className="flex justify-center items-center w-full 2xl:w-4/5 text-white bg-[#1d2c2e]">
                    {/* Texto */}
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold pt-2 text-center text-white">
                            Como Você Pode Fazer a Diferença no StartSolidário?
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed py-2 px-4 text-center text-white">
                            Aqui, você não apenas adquire produtos ou pacotes de viagem, você participa de algo maior. Cada compra e cada gesto de doação reverberam em impacto social, apoiando causas que fazem a diferença na vida de muitas pessoas. Seja comprando para si ou doando para os outros, você está investindo em um futuro mais justo e inclusivo.
                        </p>
                    </div>
                  
                    {/* Imagem */}
                    <div className="hidden lg:flex w-1/3 items-center border-2 rounded">
                        <img
                            src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/feche-pessoas-sorridentes.jpg?updatedAt=1724778221364"
                            alt="Pessoas sorrindo"
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Seção: Nosso Propósito */}
                <div className="flex justify-center items-center w-full 2xl:w-4/5 text-white bg-[#1d2c2e]">
                    {/* Imagem */}
                    <div className="hidden lg:flex w-1/3 items-center border-2 rounded">
                        <img
                            className="w-full"
                            src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/pessoas-felizes-se-oferecendo-para-causas-especiais_23-2148687314.png"
                            alt="Pessoas felizes voluntariando"
                        />
                    </div>

                    {/* Texto */}
                    <div className="w-full lg:w-2/3">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-center text-white pt-2">
                            Nosso Propósito
                        </h3>
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center text-white py-2 px-4">
                            Nosso propósito é criar um ambiente onde a solidariedade seja acessível e tangível, permitindo que todos possam contribuir com o que têm de melhor: seu tempo, recursos ou disposição para ajudar. Faça parte dessa corrente do bem e descubra como pequenas ações podem gerar grandes mudanças.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre;