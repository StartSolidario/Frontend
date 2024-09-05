import { ChangeEvent, ReactNode, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Usuario from "../../models/Usuario"
import { cadastrarUsuario } from "../../services/service"

function Cadastro() {

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
      tipo: ''
   })

   const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
      id: 0,
      nome: '',
      idade: "",
      cpf: '',
      usuario: '',
      senha: '',
      foto: '',
      tipo: ''
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
            alert('Usuário cadastrado com sucesso')

         } catch (error) {
            alert('Erro ao cadastrar o Usuário')
         }

      } else {
         alert('Dados inconsistentes. Verifique as informações de cadastro.')
         setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
         setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
      }
   }

   const [contador, setContador] = useState<number>(0)

   function AumentaContador() {
      setContador(contador + 1)
   }

   let input_adm: ReactNode;

   if (contador >= 3) {
      input_adm = (
         <div className="flex flex-col w-full px-4 py-2">
         <label htmlFor="tipo" className='px-1 text-lg'>Administrador:</label>
         <input
            type="text"
            id="tipo"
            name="tipo"
            placeholder="ADM"
            className="rounded-xl p-2 text-black"
            value={usuario.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
         />
      </div>
      )
   }

   return (
      <div className='flex justify-center justify-items-center bg-[#F5F4D6] py-[10Vh]'>
         <div className='flex rounded-3xl border-2 border-black w-2/5 m-auto'>
            <div className='flex flex-col w-full rounded-3xl bg-[#1E765A]'>
               <div className="flex justify-center w-full h-[20%]">
                  <img onClick={AumentaContador} className="w-[150px]" src="https://ik.imagekit.io/startsolidario/STARTSOLIDARIO/Logo-Estendida.png?updatedAt=1724784792101" />
               </div>
               <form onSubmit={cadastrarNovoUsuario} className="w-full h-full  text-[#F5F4D6]" >
                  <h2 className="text-3xl flex justify-center justify-items-center py-4">Crie sua conta:</h2>

                  <div className="flex flex-col w-full px-4 py-2">
                     <label htmlFor="nome" className='px-1 text-lg'>Nome:</label>
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
                     <label htmlFor="usuario" className='px-1 text-lg'>Email:</label>
                     <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Usuario"
                        className="rounded-xl p-2 text-black"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                  </div>

                  { input_adm }

                  <div className="flex flex-col w-full px-4 py-2">
                     <label htmlFor="idade" className='px-1 text-lg'>Data de Nascimento:</label>
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
                     <label htmlFor="cpf" className='px-1 text-lg'>CPF:</label>
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
                     <label htmlFor="foto" className='px-1 text-lg'>Foto:</label>
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
                     <label htmlFor="senha" className='px-1 text-lg'>Senha:</label>
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
                     <label htmlFor="senha" className='px-1 text-lg'>Confirmar senha:</label>
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
