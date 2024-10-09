import { Link } from "react-router-dom"
import Categoria from "../../../../models/Categoria"

interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriasProps) {
    return (
        <div className='border-2 border-[#2B4042] flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 bg-[#1E765A] text-white font-bold text-2xl text-center'>
                Categoria - <span>{categoria.nome}</span>
            </header>

            <p className='pb-2 bg-[#1E765A] text-white font-bold text-2xl text-center'>Icon:</p>
            <div className="flex justify-center items-center bg-white">
                <img className="w-2/5 h-full" src={categoria.imagem}></img>
            </div>

            <div className="flex">

                <Link to={`/editarcategoria_adm/${categoria.id}`}
                    className='w-full text-slate-100 bg-emerald-600 hover:bg-emerald-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarCategoria_adm/${categoria.id}`}
                    className='w-full text-slate-100 bg-yellow-800 hover:bg-yellow-950 flex items-center justify-center py-2'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria