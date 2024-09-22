import Categoria from "../../../../models/Categoria"

interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategoriaComum({ categoria }: CardCategoriasProps) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="w-1/3 flex justify-center items-center">
                <img className="w-full h-full" src={categoria.imagem}></img>
            </div>
            <p className='font-bold text-xl'>{categoria.nome}</p>
        </div>
    )
}

export default CardCategoriaComum