function Sobre() {
    return (
        <>
            <div className="bg-[#1d2c2e] flex flex-col items-center p-20">
                <h1 className="text-white font-bold text-center text-5xl mb-4" > O que é o StartSolidário?</h1>

                <div className="flex items-center justify-between max-w-4xl w-full">
                    <p className="text-white text-left text-xl"> O Start Solidário é muito mais que um e-commerce,
                        é um movimento que une solidariedade e propósito. Nossa plataforma
                        conecta quem quer ajudar com quem mais precisa, oferecendo a oportunidade de
                        transformar vidas através de doações, voluntariado e compras com significado.
                    </p>
                    <img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida.png?updatedAt=1724784792101" alt="Logotipo" className="w-44 h-32 ml-8" ></img>
                </div>
            </div>
            <div className="bg-[#324C4F] p-6 min-h-screen flex flex-col items-center"> {/*Body*/}
                <div className="flex lg:flex-row items-center justify-center my-8 font-jura text-white px-4 lg:px-8"> {/*Sessão sobre*/}
                    <div> {/*Sobre - Texto*/}
                        <h1 className="font-bold text-3xl lg:text-4x1 text-center mb-6"> Como Voce Pode Fazer a Diferença no StartSolidario?</h1>
                        <p className="text-lg text-start"> Aqui, você não apenas adquire produtos ou pacotes de viagem, você participa de algo maior. Cada compra e cada gesto de doação reverberam em impacto social, apoiando causas que fazem a diferença na vida de muitas pessoas. Seja comprando para si ou doando para os outros, você está investindo em um futuro mais justo e inclusivo..</p>

                    </div>

                    <div className=" mx-auto w-2/3 border-current border-2 rounded"> {/*Sobre - Imagem*/}
                        <img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/feche-pessoas-sorridentes.jpg?updatedAt=1724778221364"></img>
                    </div>
                </div>

                <div className="justify-center grid grid-cols-2"> {/*Sessão ajuda*/}
                    <div> {/*ajuda - Imagem*/}
                        <img className="mx-auto flex flitems-cenwhite border-2 rounded" src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/pessoas-felizes-se-oferecendo-para-causas-especiais_23-2148687314.png" />
                    </div>

                    <div className="flex-1"> {/*ajuda - Texto*/}
                        <h1 className="font-bold text-2xl p-6 text-center font-jura text-white">Nosso Propósito</h1>
                        <h3 className="text-lg leading-relaxed p-6 text-center font-jura text-white">  Nosso propósito é criar um ambiente onde a solidariedade seja acessível e tangível, permitindo que todos possam contribuir com o que têm de melhor: seu tempo, recursos ou disposição para ajudar. Faça parte dessa corrente do bem e descubra como pequenas ações podem gerar grandes mudanças.</h3>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre