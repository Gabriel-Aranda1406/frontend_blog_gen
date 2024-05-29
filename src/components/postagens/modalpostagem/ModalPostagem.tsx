import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'
import FormularioPostagem from '../formulariopostagem/FormularioPostagem';

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-[rgb(218,20,0)] hover:text-white'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormularioPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;