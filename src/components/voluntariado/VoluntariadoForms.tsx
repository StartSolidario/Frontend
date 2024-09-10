import { useState } from 'react';

function VoluntariadoForms() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitted(true); 
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="flex justify-center py-10">
          <h2 className="text-3xl text-green-500">Formulário cadastrado com sucesso! Em breve entraremos em contato.</h2>
        </div>
      ) : (
        <form className="w-full h-full text-[#F5F4D6]" onSubmit={handleSubmit}>
          <h2 className="text-3xl flex justify-center py-4">Formulário de Voluntariado:</h2>

          <div className="flex flex-col w-full px-4 py-2">
            <input hidden name="tipo" value={""} />
          </div>

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

          <div className="flex flex-col w-full px-4 py-2">
            <label htmlFor="aceitacao" className="px-1 text-lg">Termo de Aceitação e Compromisso</label>
            <p className="text-sm text-gray-300 py-2">
              Ao participar do Start Solidário, declaro que estou ciente e concordo com os seguintes termos: 
              Autorização de Uso de Imagem, Compromisso com a Causa, e Responsabilidade Social.
            </p>
            <input
              type="checkbox"
              id="aceitacao"
              name="aceitacao"
              className="rounded-xl p-2 text-black"
              required
            />
            <label htmlFor="aceitacao" className="text-sm px-1">Eu aceito os termos acima.</label>
          </div>

          <button type="submit" className="flex justify-center w-full text-xl py-4 bg-blue-600 rounded-xl hover:bg-blue-700">
            <span className="hover:underline">Enviar</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default VoluntariadoForms;