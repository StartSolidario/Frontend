import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function EquipeContato() {
    return (
        <div className="bg-yellow-100">
            <h2 className="container text-center text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold py-4 m-auto">Tem uma sugestão de melhoria ou precisa falar conosco? Nos mande uma Mensagem!</h2>
            <div className="text-white font-bold flex justify-center">
                <div className="w-4/5 md:w-2/3 lg:w-2/5 border rounded-lg lg:rounded-l-lg lg:rounded-r-none border-black bg-[#1E765A]">
                    <form id="formulario" action="https://formsubmit.co/d6dbb342d9b865d203b0507cc6c6ed2a" method="POST" className="flex flex-col justify-center items-center">

                        <input type="hidden" name="_captcha" value="false" />

                        <label className="flex item-center justify-center lg:text-lg text-white my-2 pt-2" htmlFor="name">Nome: </label>
                        <input className="text-center rounded-2xl text-black w-4/5 py-2" id="name" type="text" name="name" placeholder="Digite seu nome" />
                        <span id="txtNome"></span>

                        <label className="flex item-center justify-center lg:text-lg text-white my-2 pt-2" htmlFor="email">E-mail: </label>
                        <input className="text-center rounded-2xl text-black w-4/5 py-2" id="email" type="text" name="email" placeholder="Digite seu email" />
                        <span id="txtEmail"></span>

                        <label className="flex item-center justify-center lg:text-lg text-white my-2 pt-2" htmlFor="subject">Assunto: </label>
                        <input className="text-center rounded-2xl text-black w-4/5 py-2" id="subject" type="text" name="subject" placeholder="Digite o título da messagem" />
                        <span id="txtSubject"></span>

                        <label className="flex item-center justify-center lg:text-lg text-white my-2 pt-2" htmlFor="message">Mensagem: </label>
                        <textarea className="text-center rounded-2xl text-black w-4/5 py-2" id="message" name="message" placeholder="Digite sua messagem"></textarea>

                        <div className="flex item-center justify-center w-1/2 m-4">
                            <button className="w-full h-full lg:text-lg p-2 border-2 rounded-xl border-white hover:bg-[#80af81]" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:flex justify-center item-center lg:w-1/4 border border-l-0 rounded-r-lg border-black">
                    <img className="w-full" src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/startsolidariosfundo.png" alt="logo StartSolidário" ></img>
                </div>
            </div>

            <div className="p-4">
                <h2 className="flex item-center justify-center font-bold text-2xl lg:text-3xl mt-4">Conheça nossa equipe!</h2>
                <div className="flex flex-col lg:flex-row flex-wrap justify-evenly items-center">
                    <div className="flex flex-col justify-center items-center w-3/4 lg:w-[30%] rounded-lg p-6 my-4 border-2 border-black bg-[#2B4042] hover:bg-[#F8C311]">
                        <div className="w-2/5 sm:w-1/5 rounded-full overflow-hidden bg-white">
                            <img
                                src="https://ik.imagekit.io/startsolidario/fotos%20equipe/Captura%20de%20tela%202024-09-06%20141234.png?updatedAt=1727241302334"
                                alt="Luiz"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="p-2 text-2xl font-bold text-black">Luiz</h2>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/-luizribeiro/" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={50} weight="fill" color="#0077B5" />
                            </a>
                            <a href="https://github.com/LuizRibeiro-dev" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={50} weight="fill" color="#000" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-3/4 lg:w-[30%] rounded-lg p-6 my-4 border-2 border-black bg-[#2B4042] hover:bg-[#F8C311]">
                        <div className="w-2/5 sm:w-1/5 rounded-full overflow-hidden bg-white">
                            <img
                                src="https://ik.imagekit.io/startsolidario/fotos%20equipe/Imagem%20do%20WhatsApp%20de%202024-09-06%20%C3%A0(s)%2012.05.38_953507ed.jpg?updatedAt=1727241118387"
                                alt="Samuel"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="p-2 text-2xl font-bold text-black">Samuel</h2>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/samuelmonteiro-/" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={50} weight="fill" color="#0077B5" />
                            </a>
                            <a href="https://github.com/Monte1r0" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={50} weight="fill" color="#000" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-3/4 lg:w-[30%] rounded-lg p-6 my-4 border-2 border-black bg-[#2B4042] hover:bg-[#F8C311]">
                        <div className="w-2/5 sm:w-1/5 rounded-full overflow-hidden bg-white">
                            <img
                                src="https://ik.imagekit.io/startsolidario/fotos%20equipe/Imagem%20do%20WhatsApp%20de%202024-09-06%20%C3%A0(s)%2011.57.42_df836fd8.jpg?updatedAt=1727241262625"
                                alt="Roberdan"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="p-2 text-2xl font-bold text-black">Roberdan</h2>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/roberdan-andrade/" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={50} weight="fill" color="#0077B5" />
                            </a>
                            <a href="https://github.com/Roberdan-Andrade" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={50} weight="fill" color="#000" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-3/4 lg:w-[30%] rounded-lg p-6 my-4 border-2 border-black bg-[#2B4042] hover:bg-[#F8C311]">
                        <div className="w-2/5 sm:w-1/5 rounded-full overflow-hidden bg-white">
                            <img
                                src="https://ik.imagekit.io/startsolidario/fotos%20equipe/Imagem%20do%20WhatsApp%20de%202024-09-06%20%C3%A0(s)%2011.57.36_4e8e7579.jpg?updatedAt=1727241281629"
                                alt="Jean"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="p-2 text-2xl font-bold text-black">Jean</h2>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/eujeanandre/" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={50} weight="fill" color="#0077B5" />
                            </a>
                            <a href="https://github.com/jeansdev1" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={50} weight="fill" color="#000" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-3/4 lg:w-[30%] rounded-lg p-6 my-4 border-2 border-black bg-[#2B4042] hover:bg-[#F8C311]">
                        <div className="w-2/5 sm:w-1/5 rounded-full overflow-hidden bg-white">
                            <img
                                src="https://ik.imagekit.io/startsolidario/fotos%20equipe/Imagem%20do%20WhatsApp%20de%202024-09-06%20%C3%A0(s)%2012.24.14_284239f7.jpg?updatedAt=1727241165253"
                                alt="Matheus"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="p-2 text-2xl font-bold text-black">Matheus</h2>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/matheus-alves-am/" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={50} weight="fill" color="#0077B5" />
                            </a>
                            <a href="https://github.com/Matheus-Leamdrim" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={50} weight="fill" color="#000" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EquipeContato