import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function EquipeContato() {
    return (
        <div className="bg-[#F5F4D6]">
            <div className="grid grid-cols-2 py-16 px-20">
                <div className="bg-[#518E48] border-4 rounded-l-lg border-black justify-center">
                    <form id="formulario" action="https://formsubmit.co/d425c3abca8e6edad333b3d489546a89" method="POST" className="grid grid-cols-1 flex item-center justify-center ">

                        <input type="hidden" name="_next" value="https://roberdan-andrade.github.io/Portfolio_Generation/sucess.html" />
                        <input type="hidden" name="_captcha" value="false" />

                        <label className="flex item-center justify-center" htmlFor="name">Nome: </label>
                        <input className=" rounded-3xl w-[60%] " id="name" type="text" name="name" placeholder="Digite seu nome" />
                        <span id="txtNome"></span>

                        <label  htmlFor="email">E-mail: </label>
                        <input className="flex item-center justify-center rounded-3xl w-[60%]" id="email" type="text" name="email" placeholder="Digite seu email" />
                        <span id="txtEmail"></span>

                        <label htmlFor="subject">Assunto: </label>
                        <input className="flex item-center justify-center rounded-3xl w-[60%]" id="subject" type="text" name="subject" placeholder="Digite o título da message" />
                        <span id="txtSubject"></span>

                        <label htmlFor="message">Mensagem: </label>
                        <textarea className="flex item-center justify-center rounded-3xl w-[60%] h-[110%]" id="message" name="message" placeholder="Digite sua message"></textarea>

                        <div className="flex item-center justify-center text-center py-8 ">
                            <button className="py-4 px-8 border-4 rounded-3xl" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="flex justify-center item-center w-[50%]   border-4 rounded-r-lg border-black">
                    <img className="w-full " src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/startsolidariosfundo.png" alt="logo StartSolidário" ></img>
                </div>
            </div>
            <div>
                <h2 className="flex item-center justify-center font-bold p-6">Conheça nossa equipe!</h2>
                <div className="grid grid-cols-3 gap-6 p-6">
                    <div className="flex flex-col items-center bg-[#2B4042] shadow-lg rounded-lg p-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-white">
                            <img
                                src="https://ik.imagekit.io/startsolidario/fotos%20equipe/Captura%20de%20tela%202024-09-06%20141234.png?updatedAt=1725642832805"
                                alt="Luiz"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="mt-4 text-lg font-bold text-black-700">Luiz</h2>
                        <div className="flex mt-4 space-x-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={32} weight="fill" color="#0077B5" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={32} weight="fill" color="#000" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-[#2B4042] shadow-lg rounded-lg p-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-white">
                            <img
                                src="https://ik.imagekit.io/startsolidario/fotos%20equipe/Imagem%20do%20WhatsApp%20de%202024-09-06%20%C3%A0(s)%2012.05.38_953507ed.jpg?updatedAt=1725642831841"
                                alt="Samuel"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="mt-4 text-lg font-bold text-black-700">Samuel</h2>
                        <div className="flex mt-4 space-x-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={32} weight="fill" color="#0077B5" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={32} weight="fill" color="#000" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-[#2B4042] shadow-lg rounded-lg p-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-white">
                            <img
                                src="https://ik.imagekit.io/startsolidario/fotos%20equipe/Imagem%20do%20WhatsApp%20de%202024-09-06%20%C3%A0(s)%2011.57.42_df836fd8.jpg?updatedAt=1725642833406"
                                alt="Roberdan"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="mt-4 text-lg font-bold text-black-700">Roberdan</h2>
                        <div className="flex mt-4 space-x-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={32} weight="fill" color="#0077B5" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={32} weight="fill" color="#000" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-[#2B4042] shadow-lg rounded-lg p-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-white">
                            <img
                                src="https://ik.imagekit.io/startsolidario/fotos%20equipe/Imagem%20do%20WhatsApp%20de%202024-09-06%20%C3%A0(s)%2011.57.36_4e8e7579.jpg?updatedAt=1725642834341"
                                alt="Jean"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="mt-4 text-lg font-bold text-black-700">Jean</h2>
                        <div className="flex mt-4 space-x-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={32} weight="fill" color="#0077B5" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={32} weight="fill" color="#000" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-[#2B4042] shadow-lg rounded-lg p-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-white">
                            <img
                                src="https://ik.imagekit.io/startsolidario/fotos%20equipe/Imagem%20do%20WhatsApp%20de%202024-09-06%20%C3%A0(s)%2012.24.14_284239f7.jpg?updatedAt=1725642831558"
                                alt="Matheus"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="mt-4 text-lg font-bold text-black-700">Matheus</h2>
                        <div className="flex mt-4 space-x-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={32} weight="fill" color="#0077B5" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={32} weight="fill" color="#000" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-[#2B4042] shadow-lg rounded-lg p-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-white">
                            <img
                                src="https://ik.imagekit.io/startsolidario/fotos%20equipe/Imagem%20do%20WhatsApp%20de%202024-09-06%20%C3%A0(s)%2012.07.58_f1ac2170.jpg?updatedAt=1725642832098"
                                alt="Fabio"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className="mt-4 text-lg font-bold text-black-700">Fabio</h2>
                        <div className="flex mt-4 space-x-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedinLogo size={32} weight="fill" color="#0077B5" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <GithubLogo size={32} weight="fill" color="#000" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default EquipeContato