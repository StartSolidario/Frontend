function VoluntariadoForms() {

   const handleSubmit = () => {
      alert("Formulario enviado com Sucesso")
   };

   return (
      <div className='bg-[#1E765A] h-[75vh] border-2 border-[#2B4042] rounded-2xl'>
         <form className="w-full h-full text-[#F5F4D6]" onSubmit={handleSubmit}>
            <h2 className="text-3xl flex justify-center py-4">Formulário de Voluntariado:</h2>

            <div className='flex'>
               <div className="flex flex-col w-full px-4 py-2">
                  <label htmlFor="nome" className="px-1 text-lg">Nome Completo:</label>
                  <input
                     type="text"
                     id="nome"
                     name="nome"
                     placeholder="Nome"
                     className="rounded-xl p-2 text-black"
                     required
                  />
               </div>

               <div className="flex flex-col w-full px-4 py-2">
                  <label htmlFor="usuario" className="px-1 text-lg">Email:</label>
                  <input
                     type="email"
                     id="usuario"
                     name="usuario"
                     placeholder="Email"
                     className="rounded-xl p-2 text-black"
                     required
                  />
               </div>
            </div>

            <div className='flex'>
               <div className="flex flex-col w-full px-4 py-2">
                  <label htmlFor="idade" className="px-1 text-lg">Data de Nascimento:</label>
                  <input
                     type="date"
                     id="idade"
                     name="idade"
                     className="rounded-xl p-2 text-black"
                     required
                  />
               </div>

               <div className="flex flex-col w-full px-4 py-2">
                  <label htmlFor="cpf" className="px-1 text-lg">CPF:</label>
                  <input
                     type="text"
                     id="cpf"
                     name="cpf"
                     placeholder="XXX.XXX.XXX-XX"
                     className="rounded-xl p-2 text-black"
                     required
                  />
               </div>
            </div>

            <div className="flex flex-col w-full px-4 py-2">
               <label htmlFor="profissao" className="px-1 text-lg">Profissão:</label>
               <input
                  type="text"
                  id="profissao"
                  name="profissao"
                  placeholder="Profissão"
                  className="rounded-xl p-2 text-black"
                  required
               />
            </div>

            <div className='flex justify-center items-center'>
               <div className="flex flex-col w-1/2 px-4 py-2">
                  <label htmlFor="aceitacao" className="px-1 text-lg text-center w-4/5">Termo de Aceitação e Compromisso</label>
                  <p className="text-center text-sm text-gray-300 py-2 w-4/5">
                     Ao participar do Start Solidário, declaro que estou ciente e concordo com os seguintes termos:
                     Autorização de Uso de Imagem, Compromisso com a Causa, e Responsabilidade Social.
                  </p>
                  <div className='flex justify-center items-center w-4/5'>
                     <input
                        type="checkbox"
                        id="aceitacao"
                        name="aceitacao"
                        className="rounded-xl p-2 text-black"
                        required
                     />

                     <label htmlFor="aceitacao" className="text-sm px-1">Eu aceito os termos acima.</label>
                  </div>
               </div>

               <div className="flex flex-col justify-center items-center text-xl w-1/2 ">
                  <button type="submit" className="flex flex-col justify-center items-center w-3/5 bg-blue-600 rounded-xl hover:bg-blue-700">
                     <span className="hover:underline py-2 px-4">Enviar</span>
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
}

export default VoluntariadoForms;