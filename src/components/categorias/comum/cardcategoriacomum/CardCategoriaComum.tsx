import { useNavigate } from "react-router-dom";
import Categoria from "../../../../models/Categoria"

interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategoriaComum({ categoria }: CardCategoriasProps) {
    
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Redireciona para a página de produtos da categoria
        navigate(`/categorias/${categoria.id}`);
    }

    return (
        <div className='flex flex-col justify-center items-center' onClick={handleCardClick}>
            <div className="w-1/2 lg:w-1/3 flex justify-center items-center">
                <img className="w-full h-full" src={categoria.imagem}></img>
            </div>
            <p className='font-bold text-base sm:text-lg lg:text-xl text-center w-full'>{categoria.nome}</p>
        </div>
    )
}

export default CardCategoriaComum