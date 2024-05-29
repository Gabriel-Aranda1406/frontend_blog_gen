import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', "info")
        navigate('/login')
    }

    let component: ReactNode;

    if (usuario.token !== ""){
        component=(
        <div className='w-full bg-[rgb(218,20,0)] text-white
        flex justify-center py-4'>

        <div className="container flex justify-between text-lg">
            <Link to='/home'> 
            <img src="https://ik.imagekit.io/4lf7m2y5a/GEEK-ZONE-28-05-2024.png?updatedAt=1716901789627" alt="" width="100px" /> </Link>

            <div className='flex gap-4 font-display m-6 font-bold'>
                <Link to='/postagens' className='hover:underline'>Postagens</Link>
                <Link to='/temas' className='hover:underline'>Temas</Link>
                <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                
                <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
        </div>
    </div>
    )
    }

    
    return (
        <>
            { component }
        </>
    )
}

export default Navbar