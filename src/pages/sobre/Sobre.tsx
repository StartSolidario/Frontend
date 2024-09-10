function Sobre() {
    return (
        <>
            {/* Seção: O que é o StartSolidário */}
            <div className="bg-[#1d2c2e] flex flex-col items-center p-10">
                <h1 className="text-white text-center font-bold text-5xl mb-2">
                    O que é o StartSolidário?
                </h1>

                <div className="flex items-center justify-between max-w-4xl w-full">
                    <p className="text-white text-center text-xl p-8">
                        O Start Solidário é muito mais que um e-commerce, é um movimento que une solidariedade e propósito. Nossa plataforma conecta quem quer ajudar com quem mais precisa, oferecendo a oportunidade de transformar vidas através de doações, voluntariado e compras com significado.
                    </p>
                    <img
                        src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida.png?updatedAt=1724784792101"
                        alt="Logotipo"
                        className="w-39 h-32"
                    />
                </div>
            </div>

            {/* Seção: Como você pode fazer a diferença */}
            <div className="bg-[#324C4F] p-7 min-h-screen flex flex-col items-center">
                <div className="bg-[#1d2c2e] p-0.25 justify-center grid grid-cols-2 items-center my-8 font-jura text-white">
                    {/* Texto */}
                    <div>
                        <h1 className="font-bold text-2xl p-3 text-center font-jura text-white">
                            Como Você Pode Fazer a Diferença no StartSolidário?
                        </h1>
                        <p className="text-lg leading-relaxed p-5 text-center font-jura text-white">
                            Aqui, você não apenas adquire produtos ou pacotes de viagem, você participa de algo maior. Cada compra e cada gesto de doação reverberam em impacto social, apoiando causas que fazem a diferença na vida de muitas pessoas. Seja comprando para si ou doando para os outros, você está investindo em um futuro mais justo e inclusivo.
                        </p>
                    </div>
                  
                    {/* Imagem */}
                    <div className="mx-auto flex items-center border-2 rounded">
                        <img
                            src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/feche-pessoas-sorridentes.jpg?updatedAt=1724778221364"
                            alt="Pessoas sorrindo"
                        />
                    </div>
                </div>

                {/* Seção: Nosso Propósito */}
                <div className="bg-[#1d2c2e] p-0.25 justify-center grid grid-cols-2 my-4">
                    {/* Imagem */}
                    <div>
                        <img
                            className="mx-auto flex items-center border-2 rounded"
                            src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/pessoas-felizes-se-oferecendo-para-causas-especiais_23-2148687314.png"
                            alt="Pessoas felizes voluntariando"
                        />
                    </div>

                    {/* Texto */}
                    <div className="flex-1">
                        <h1 className="font-bold text-2xl p-8 text-center font-jura text-white">
                            Nosso Propósito
                        </h1>
                        <h3 className="text-lg leading-relaxed p-10 text-center font-jura text-white">
                            Nosso propósito é criar um ambiente onde a solidariedade seja acessível e tangível, permitindo que todos possam contribuir com o que têm de melhor: seu tempo, recursos ou disposição para ajudar. Faça parte dessa corrente do bem e descubra como pequenas ações podem gerar grandes mudanças.
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sobre;