function VoluntariadoForms() {

   const handleSubmit = () => {
      alert("Formulario enviado com Sucesso")
   }

   return (
      <div className='border-2 rounded-2xl border-[#2B4042] bg-[#1E765A] mx-auto'>
         <form className="w-full h-full text-white p-4" onSubmit={handleSubmit}>
            <h2 className="text-xl md:text-3xl text-center py-4">Formulário de Voluntariado:</h2>

            <div className='flex flex-col md:flex-row'>
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

            <div className='flex flex-col md:flex-row'>
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

            <div className='flex flex-col md:flex-row justify-center items-center'>
              

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