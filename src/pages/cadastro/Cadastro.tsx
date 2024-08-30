import { Link } from "react-router-dom"

function Cadastro() {
   return (
      <div className='flex justify-center justify-items-center bg-[#F5F4D6] py-[10Vh]'>
         <div className='flex rounded-3xl border-2 border-black w-2/5 m-auto'>
            <div className='w-full'>
               <form className="w-full h-full rounded-3xl bg-[#1E765A] text-[#F5F4D6]" >
                  <h2 className="text-3xl flex justify-center justify-items-center py-4">Crie sua conta:</h2>

                  <div className="flex flex-col w-full px-4 pb-2">
                     <label htmlFor="usuario" className='px-1 text-lg'>Nome:</label>
                     <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        className="rounded-xl p-2"
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 pb-2">
                     <label htmlFor="usuario" className='px-1 text-lg'>Email:</label>
                     <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="rounded-xl p-2"
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 pb-2">
                     <label htmlFor="usuario" className='px-1 text-lg'>Data de Nascimento:</label>
                     <input
                        type="text"
                        id="nascimento"
                        name="nascimento"
                        placeholder="XX/XX/XXXX"
                        className="rounded-xl p-2"
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 pb-2">
                     <label htmlFor="usuario" className='px-1 text-lg'>CPF:</label>
                     <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="XXX.XXX.XXX-XX"
                        className="rounded-xl p-2"
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 pt-2">
                     <label htmlFor="senha" className='px-1 text-lg'>Senha:</label>
                     <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="rounded-xl p-2"
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 pt-2">
                     <label htmlFor="senha" className='px-1 text-lg'>Confirmar senha:</label>
                     <input
                        type="password"
                        id="confirma_senha"
                        name="confirma_senha"
                        placeholder="Senha"
                        className="rounded-xl p-2"
                     />
                  </div>

                  <button type='submit' className="flex justify-center justify-items-center w-full text-xl py-4">
                     <span className='hover:underline'>Criar Conta</span>
                  </button>

                  <p className='flex justify-center justify-items-center w-full pb-4'>
                     Ja possui uma conta?
                     <Link to="/login" className="hover:underline pl-2">Entre Agora!</Link>
                  </p>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Cadastro
