import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
   return (
      <div className='flex justify-center justify-items-center h-[80vh] bg-[#F5F4D6]'>
         <div className='flex rounded-3xl border-2 border-black w-8/12 m-auto'>
            <div className='w-3/5'>
               <img className='rounded-l-3xl w-full h-full border-r-2 border-black' src='https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/diferentes-pessoas-fazendo-trabalho-voluntario_23-2149012164.png?updatedAt=1724776780689' />
            </div>

            <div className='w-2/5'>
               <form className="w-full h-full rounded-r-3xl bg-[#1E765A] text-[#F5F4D6]" >
                  <h2 className="text-3xl flex justify-center justify-items-center py-4">Entre na sua conta:</h2>
                  <div className="flex flex-col w-full px-4 pb-2">
                     <label htmlFor="usuario" className='px-1 text-lg'>Usuário:</label>
                     <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Usuario"
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

                  <button type='submit' className="flex justify-center justify-items-center w-full text-xl py-4">
                     <span className='hover:underline'>Entrar</span>
                  </button>

                  <p className='flex justify-center justify-items-center w-full'>
                     Ainda não tem uma conta?
                     <Link to="/cadastro" className="hover:underline pl-2">Cadastre-se Agora!</Link>
                  </p>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Login;