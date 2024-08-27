
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
<div className='flex bg-gradient-to-l from-[#C2E0CA] via-[#F5F4D6] to-[#C2E0CA] '>
    <div><img src='https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/diferentes-pessoas-fazendo-trabalho-voluntario_23-2149012164.png?updatedAt=1724776780689'></img></div>
    <div className='bg-[#2B4042]'>
        <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" >
          <h2 className="text-slate-900 text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              
            />
          </div>
          <button  type='submit' className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
           
        
          
            <span>Entrar</span>
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-indigo-800 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </div>
        </div>
    </div>

      );
    }
    
    export default Login;