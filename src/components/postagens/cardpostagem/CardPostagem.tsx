import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between font-display'>
                
            <div>
                <div className="flex w-full bg-[rgb(218,20,0)] py-2 px-4 items-center gap-4">
                    <img
                        src={postagem.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase text-white'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`} 
                    className='w-full text-white bg-[rgb(254,156,0)]
                    hover:bg-[rgb(255,184,69)] flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`} 
                    className='text-white bg-red-900 
                    hover:bg-[rgb(218,20,0)] w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem