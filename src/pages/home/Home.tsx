import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
    return (
        <>
            <div className="bg-[rgb(254,156,0)] w-screen flex justify-center font-display">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                    <img src="https://ik.imagekit.io/4lf7m2y5a/Hello-World-28-05-2024.png?updatedAt=1716902850398" alt="" width="800px"/>
                    <img src="https://ik.imagekit.io/4lf7m2y5a/Compartilhe-suas-teorias-no-no-28-05-2024.png?updatedAt=1716903228781" alt="" width="800px" />

                        <div className="flex justify-around gap-4">
                        <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>


                    <div id="imagem" className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/4lf7m2y5a/ironman-yellow.jpg?updatedAt=1716919988120"
                            alt="Imagem Home"
                            width="500px"
                        />
                    </div>

                </div>

            </div>
            <ListaPostagens/>
        </>
    );
}

export default Home;