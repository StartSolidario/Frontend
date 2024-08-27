function Home() {
  return (
    <>
    <div className="bg-gradient-to-l from-[#C2E0CA] via-[#F5F4D6] to-[#C2E0CA] p-6 "> {/*Body*/}
        <div className="flex justify-center grid grid-cols-2 "> {/*Sessão sobre*/}
            <div> {/*Sobre - Texto*/}
                <h1 className="font-bold text-center text-2xl p-6"> O que é o Start Solidário? </h1>
                <h3 className="text-center"> O Start Solidário é muito mais que um e-commerce, é um movimento que une solidariedade e propósito. 
                    Nossa plataforma conecta quem quer ajudar com quem mais precisa, 
                    oferecendo a oportunidade de transformar vidas através de doações, voluntariado e compras com significado.
                    <br />Aqui, você não apenas adquire produtos ou pacotes de viagem, você participa de algo maior. 
                    Cada compra e cada gesto de doação reverberam em impacto social, apoiando causas que fazem a diferença na vida de muitas pessoas. 
                    Seja comprando para si ou doando para os outros, você está investindo em um futuro mais justo e inclusivo. <br />
                    Nosso propósito é criar um ambiente onde a solidariedade seja acessível e tangível, permitindo que todos possam contribuir com o que têm de melhor: 
                    seu tempo, recursos ou disposição para ajudar. Faça parte dessa corrente do bem e descubra como pequenas ações podem gerar grandes mudanças.</h3>

            </div>

            <div className=" mx-auto mx-5 w-2/3 border-current border-2 rounded"> {/*Sobre - Imagem*/}
                   
                <img src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/feche-pessoas-sorridentes.jpg?updatedAt=1724778221364"></img>
            </div>
        </div>
        
        <div className=" flex justify-center grid grid-cols-2 "> {/*Sessão ajuda*/}
            <div> {/*ajuda - Imagem*/}
                <img className="mx-auto flex flex-col md:flex-row items-center border-current border-2 rounded" src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/pessoas-felizes-se-oferecendo-para-causas-especiais_23-2148687314.png">
                </img>
            </div>
            
            <div className="flex-1"> {/*ajuda - Texto*/}
                <h1 className="font-bold text-2xl p-6 text-center">Como você pode fazer a diferença no StartSolidario?</h1>
                <h3 className="text-lg leading-relaxed p-6 text-center">No Start Solidário, você pode fazer a diferença de forma simples e significativa. 
                    Ao comprar nossas peças de roupa, parte do valor é revertido para doações a instituições que apoiam pessoas em situação de vulnerabilidade. 
                    Cada compra ajuda a transformar vidas, tornando seu ato de consumo um gesto de solidariedade.

                    Se preferir uma experiência mais direta, você pode adquirir um de nossos pacotes de viagem com propósito. Durante a viagem, você participa ativamente de ações solidárias em comunidades carentes, colaborando com projetos sociais e impactando diretamente a vida de quem mais precisa. É a oportunidade de viajar e, ao mesmo tempo, deixar um legado de ajuda e esperança.

No Start Solidário, suas ações valem muito. Seja através de compras ou viagens, cada escolha sua contribui para um mundo mais justo e humano. Junte-se a nós nessa jornada de solidariedade!</h3>

            </div>
        </div>
    </div>
    </>
  )
}

export default Home