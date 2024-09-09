import { MagnifyingGlass, TShirt } from "@phosphor-icons/react"

function Home_navbar() {
    return (
        <div className="flex flex-col justify-center items-center pt-8">
            <form className="relative flex w-3/5 rounded-xl">
                <input
                    className="w-full rounded-xl border px-6 py-2 text-base font-medium outline-none placeholder:font-medium focus:border-gray-500"
                    type="text"
                    placeholder="Buscar Produto"
                />

                <button className="absolute right-0 top-0 flex rounded-xl px-3 py-2 outline-none" aria-label="Buscar">
                    <MagnifyingGlass size={32} />
                </button>
            </form>

            <div className='flex gap-10 py-4'>
                <span className="flex flex-col justify-center items-center">
                    <TShirt size={48} weight='bold' />
                    <p className="text-base">Categoria</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                    <TShirt size={48} weight='bold' />
                    <p className="text-base">Categoria</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                    <TShirt size={48} weight='bold' />
                    <p className="text-base">Categoria</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                    <TShirt size={48} weight='bold' />
                    <p className="text-base">Categoria</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                    <TShirt size={48} weight='bold' />
                    <p className="text-base">Categoria</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                    <TShirt size={48} weight='bold' />
                    <p className="text-base">Categoria</p>
                </span>
            </div>
        </div>
    )
}

export default Home_navbar