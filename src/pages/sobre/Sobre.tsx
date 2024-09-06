function Sobre() {
  return (
    <>
    <div className="bg-[#324C4F] p-6 min-h-screen flex flex-col items-center"> {/*Body*/}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full my-8 font-jura text-white"> {/*Sessão sobre*/}
            <div> {/*Sobre - Texto*/}
                <h1 className="font-bold text-2xl text-center mb-4"> Como Voce Pode Fazer a Diferença no StartSolidario?</h1>
                <p className="text-center"> Aqui, você não apenas adquire produtos ou pacotes de viagem, você participa de algo maior. Cada compra e cada gesto de doação reverberam em impacto social, apoiando causas que fazem a diferença na vida de muitas pessoas. Seja comprando para si ou doando para os outros, você está investindo em um futuro mais justo e inclusivo..</p>

            </div>

            <div className=" mx-auto w-2/3 border-current border-2 rounded"> {/*Sobre - Imagem*/}
                <img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/feche-pessoas-sorridentes.jpg?updatedAt=1724778221364"></img>
            </div>
        </div>
        
        <div className="justify-center grid grid-cols-2 "> {/*Sessão ajuda*/}
            <div> {/*ajuda - Imagem*/}
                <img className="mx-auto flex flex-col md:flex-row items-center border-white border-2 rounded" src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/pessoas-felizes-se-oferecendo-para-causas-especiais_23-2148687314.png" />
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