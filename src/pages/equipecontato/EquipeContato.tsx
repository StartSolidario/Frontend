import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function EquipeContato() {
    return (
        <div className="bg-[#F5F4D6]">
            <div className="text-white font-bold flex justify-center py-16">
                <div className="border-2 rounded-l-lg border-black bg-[#1E765A] text-black">
                    <form id="formulario" action="https://formsubmit.co/d425c3abca8e6edad333b3d489546a89" method="POST" className="flex flex-col justify-center h-80 w-96 m-4 ">

                        <input type="hidden" name="_next" value="https://roberdan-andrade.github.io/Portfolio_Generation/sucess.html" />
                        <input type="hidden" name="_captcha" value="false" />

                        <label className="flex item-center justify-center text-white" htmlFor="name">Nome: </label>
                        <input className="flex item-center text-center justify-center rounded-3xl w-full " id="name" type="text" name="name" placeholder="Digite seu nome" />
                        <span id="txtNome"></span>

                        <label className="py-2 flex item-center justify-center text-white" htmlFor="email">E-mail: </label>
                        <input className="flex item-center text-center justify-center rounded-3xl w-full " id="email" type="text" name="email" placeholder="Digite seu email" />
                        <span id="txtEmail"></span>

                        <label className="py-2 flex item-center justify-center text-white" htmlFor="subject">Assunto: </label>
                        <input className="flex item-center text-center justify-center rounded-3xl w-full" id="subject" type="text" name="subject" placeholder="Digite o título da messagem" />
                        <span id="txtSubject"></span>

                        <label className="py-2 flex item-center justify-center text-white " htmlFor="message">Mensagem: </label>
                        <textarea className="flex item-center text-center justify-center rounded-3xl w-full h-full" id="message" name="message" placeholder="Digite sua messagem"></textarea>

                        <div className="flex item-center justify-center m-0 py-1">
                            <button className="py-2 px-8 border-2 rounded-3xl border-white hover:bg-[#80af81]" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="flex justify-center item-center w-80  h-30 border-2 rounded-r-lg border-black">
                    <img className="w-full " src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/startsolidariosfundo.png" alt="logo StartSolidário" ></img>
                </div>
            </div>
            <div>
                <h2 className="flex item-center justify-center font-bold p-6 text-4xl">Conheça nossa equipe!</h2>
                <div className="grid grid-cols-2 gap-6 p-6">
                    <div className="flex flex-col items-center bg-[#2B4042] shadow-lg rounded-lg p-6 border-2 border-black hover:bg-[#F8C311]">
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
                    <div className="flex flex-col items-center bg-[#2B4042] shadow-lg rounded-lg p-6 border-2 border-black hover:bg-[#F8C311]">
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
                    <div className="flex flex-col items-center bg-[#2B4042] shadow-lg rounded-lg p-6 border-2 border-black hover:bg-[#F8C311]">
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
                    <div className="flex flex-col items-center bg-[#2B4042] shadow-lg rounded-lg p-6 border-2 border-black hover:bg-[#F8C311]">
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
                    <div className="flex flex-col items-center bg-[#2B4042] shadow-lg rounded-lg p-6 border-2 border-black hover:bg-[#F8C311]">
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

                </div>
            </div>
        </div>
    )
}
export default EquipeContato