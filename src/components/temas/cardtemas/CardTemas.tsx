import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps{
    tema: Tema
}

function CardTema({ tema }: CardTemasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[rgb(218,20,0)] text-white font-bold text-2xl'>Tema</header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
            
            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 bg-[rgb(254,156,0)] hover:bg-[rgb(254,184,69)]
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} 
                    className='text-slate-100 bg-red-900 hover:bg-[rgb(218,20,0)] w-full 
                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTema