import { AirplaneTilt, Book, Leaf, MagnifyingGlass, PawPrint, TShirt } from "@phosphor-icons/react"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home_navbar() {
    const [keyword, setKeyWord] = useState("");
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const localkey = pathname.replace("/busca/", "");

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
        <div className="flex flex-col justify-center items-center pt-8 py-7">
            <form onSubmit={searchHandler} className="relative flex w-3/5 rounded-xl  border-[#1E765A]">
                <input
                    className="mx-2 w-full rounded-xl border px-6 py-2 text-base font-medium outline-none placeholder:font-medium focus:border-gray-500 "
                    type="search"
                    id="busca"
                    name="busca"
                    placeholder="Buscar Produto"
                    value={keyword} // Adicionar o valor do estado ao input
                    onChange={(e) => setKeyWord(e.target.value)}
                />

                <button type="submit" className="bg-[#1E765A] hover:bg-[#80af81] flex rounded-xl px-3 py-2 outline-none" aria-label="Busca">
                    <MagnifyingGlass size={32} />
                </button>
            </form>

            <div className='flex gap-10 py-10 '>
                <span className="flex flex-col justify-center items-center">
                    <AirplaneTilt size={48} weight='bold' className="text-[#1E765A]" />
                    <p className="text-base">Categoria</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                    <TShirt size={48} weight='bold' className="text-[#1E765A]" />
                    <p className="text-base">Categoria</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                    <PawPrint size={48} weight='bold' className="text-[#1E765A]" />
                    <p className="text-base">Categoria</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                    <Book size={48} weight='bold' className="text-[#1E765A]" />
                    <p className="text-base">Categoria</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                    <Leaf size={48} weight='bold' className="text-[#1E765A]" />
                    <p className="text-base">Categoria</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                    <TShirt size={48} weight='bold' className="text-[#1E765A]" />
                    <p className="text-base">Categoria</p>
                </span>
            </div>
        </div>
    )
}

export default Home_navbar