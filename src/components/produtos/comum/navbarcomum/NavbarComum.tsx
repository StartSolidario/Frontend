import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ListarCardCategoriaComum from "../../../categorias/comum/listarcardcategoriacomum/ListarCardCategoriaComum";

function NavbarComum() {
    const [keyword, setKeyWord] = useState("");
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const localkey = pathname.replace("/produtos/nome/", "");

    const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (keyword.trim().length === 0 || localkey === keyword) return;

        if (keyword.trim()) {
            navigate(`/produtos/nome/${keyword}`);
        } else {
            navigate(`/`);
        }

        // Limpar o input após a navegação
        setKeyWord("");
    };

    return (
        <div className="flex flex-col justify-center items-center pt-8">
            <form onSubmit={searchHandler} className="relative flex w-3/5 rounded-xl border-[#1E765A]">
                <input
                    className="mx-2 w-full rounded-xl border px-6 py-2 text-base font-medium outline-none placeholder:font-medium focus:border-gray-500"
                    type="search"
                    id="busca"
                    name="busca"
                    placeholder="Buscar Produto"
                    value={keyword} // Adicionar o valor do estado ao input
                    onChange={(e) => setKeyWord(e.target.value)}
                />

                <button type="submit" className="bg-[#3ba886] hover:bg-[#1E765A] flex rounded-xl px-3 py-2 outline-none" aria-label="Busca">
                    <MagnifyingGlass size={32} />
                </button>
            </form>

            <div className='py-4'>
                <ListarCardCategoriaComum />
            </div>
        </div>
    )
}

export default NavbarComum