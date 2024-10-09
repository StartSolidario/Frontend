import { ChangeEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Usuario from "../../models/Usuario"
import { cadastrarUsuario } from "../../services/service"
import { ToastAlerta } from "../../utils/ToastAlerta"

function CadastroAdm() {

   let navigate = useNavigate()

   const [confirmaSenha, setConfirmaSenha] = useState<string>("")

   const [usuario, setUsuario] = useState<Usuario>({
      id: 0,
      nome: '',
      idade: "",
      cpf: '',
      usuario: '',
      senha: '',
      foto: '',
      tipo: 'Administrador'
   })

   const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
      id: 0,
      nome: '',
      idade: "",
      cpf: '',
      usuario: '',
      senha: '',
      foto: '',
      tipo: 'Administrador'
   })

   useEffect(() => {
      if (usuarioResposta.id !== 0) {
         back()
      }
   }, [usuarioResposta])

   function back() {
      navigate('/login')
   }

   function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
      setConfirmaSenha(e.target.value)
   }

   function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setUsuario({
         ...usuario,
         [e.target.name]: e.target.value
      })
   }

   async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()

      if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

         try {
            await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
            ToastAlerta('Usuário cadastrado com sucesso', "Sucesso")

         } catch (error) {
            ToastAlerta('Erro ao cadastrar o Usuário', "Erro")
         }

      } else {
         ToastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', "Info")
         setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
         setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
      }
   }

   //Sair criar novo adm
   const [contador, setContador] = useState<number>(0)

   function AumentaContador() {
      setContador(contador + 1)
   }

   useEffect(() => {
      if (contador >= 3) {
         navigate('/cadastro')
      }
   }, [contador])

   return (
      <div className='flex justify-center items-center bg-yellow-100 py-[10Vh]'>
         <div className='flex w-3/5 2xl:w-1/2 m-auto'>
            <div className='flex flex-col w-full border border-black rounded-3xl bg-[#1E765A]'>
               <div className="flex justify-center w-full h-[20%]">
                  <img onClick={AumentaContador} className="w-[100px] md:w-[125px] lg:w-[150px]" src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida.png?updatedAt=1724784792101" />
               </div>
               <form onSubmit={cadastrarNovoUsuario} className="w-full h-full  text-white">
                  <h2 className="text-2xl md:text-3xl flex justify-center items-center py-4">Crie sua conta:</h2>

                  <div className="flex flex-col w-full px-4 py-2">
                     <label htmlFor="nome" className='px-1 text-base md:text-lg'>Nome:</label>
                     <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        className="rounded-xl p-2 text-black"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 py-2">
                     <label htmlFor="usuario" className='px-1 text-base md:text-lg'>Email:</label>
                     <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Usuario@gmail.com"
                        className="rounded-xl p-2 text-black"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 py-2">
                     <label htmlFor="usuario" className='px-1 text-base md:text-lg'>Tipo:</label>
                     <input
                        type="text"
                        id="tipo"
                        name="tipo"
                        placeholder="Administrador"
                        className="rounded-xl p-2 text-black"
                        value={"Administrador"}
                        readOnly
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 py-2">
                     <label htmlFor="idade" className='px-1 text-base md:text-lg'>Data de Nascimento:</label>
                     <input
                        type="date"
                        id="idade"
                        name="idade"
                        className="rounded-xl p-2 text-black"
                        value={usuario.idade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 py-2">
                     <label htmlFor="cpf" className='px-1 text-base md:text-lg'>CPF:</label>
                     <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="XXX.XXX.XXX-XX"
                        className="rounded-xl p-2 text-black"
                        value={usuario.cpf}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 py-2">
                     <label htmlFor="foto" className='px-1 text-base md:text-lg'>Foto:</label>
                     <input
                        type="text"
                        id="foto"
                        name="foto"
                        placeholder="Link"
                        className="rounded-xl p-2 text-black"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 py-2">
                     <label htmlFor="senha" className='px-1 text-base md:text-lg'>Senha:</label>
                     <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="rounded-xl p-2 text-black"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                  </div>

                  <div className="flex flex-col w-full px-4 py-2">
                     <label htmlFor="senha" className='px-1 text-base md:text-lg'>Confirmar senha:</label>
                     <input
                        type="password"
                        id="confirma_senha"
                        name="confirma_senha"
                        placeholder="Senha"
                        className="rounded-xl p-2 text-black"
                        value={confirmaSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                     />
                  </div>

                  <button type='submit' className="flex justify-center w-full text-lg md:text-xl py-4">
                     <span className='hover:underline'>Criar Conta</span>
                  </button>

                  <p className='flex flex-col xl:flex-row justify-center items-center pb-4'>
                     Já possui uma conta?
                     <Link to="/login" className="hover:underline pl-2">Entre Agora!</Link>
                  </p>
               </form>
            </div>
         </div>
      </div>
   )
}

export default CadastroAdm
