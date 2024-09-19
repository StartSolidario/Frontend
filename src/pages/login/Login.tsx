import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
   let navigate = useNavigate();

   const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

   const { usuario, handleLogin, isLoading } = useContext(AuthContext);

   // const {isLoading} = useContext(AuthContext) 
   useEffect(() => {
      if (usuario.token !== "") {
         navigate('/home')
      }
   }, [usuario])

   function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setUsuarioLogin({
         ...usuarioLogin,
         [e.target.name]: e.target.value
      })
   }

   function login(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      handleLogin(usuarioLogin)
   }

   return (
      <div className='flex justify-center items-center h-[80vh] bg-[#F5F4D6]'>
         <div className='flex rounded-3xl  w-8/12 m-auto'>
            <div className='hidden lg:w-3/5 lg:block'>
               <img className='rounded-l-3xl w-full h-full border lg:border-2 border-r-0 lg:border-r-0 border-black' src='https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/diferentes-pessoas-fazendo-trabalho-voluntario_23-2149012164.png?updatedAt=1724776780689' />
            </div>

            <div className='w-full lg:w-2/5'>
               <form className="flex flex-col justify-center items-center w-full h-full rounded-3xl lg:rounded-r-3xl lg:rounded-l-none border lg:border-2 border-black bg-[#1E765A] text-[#F5F4D6]" onSubmit={login} >
                  <h2 className="flex justify-center justify-items-center text-2xl md:text-3xl text-center py-4">Entre na sua conta:</h2>
                  <div className="flex flex-col w-full px-4 pb-2">
                     <label htmlFor="usuario" className='px-1 text-base md:text-lg'>Usuário:</label>
                     <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Usuario"
                        className="rounded-xl p-2 text-black"
                        value={usuarioLogin.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                  </div>
                  
                  <div className="flex flex-col w-full px-4 pt-2">
                     <label htmlFor="senha" className='px-1 text-base md:text-lg'>Senha:</label>
                     <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="rounded-xl p-2 text-black"
                        value={usuarioLogin.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                  </div>

                  <button type='submit' className="flex justify-center justify-items-center w-full text-xl py-4">
                     {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true} /> :
                        <span className='hover:underline'>Entrar</span>}
                  </button>

                  <p className='flex flex-col xl:flex-row text-center'>
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