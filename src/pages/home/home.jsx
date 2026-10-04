import Navbar from "../../components/navbar/navbar";
import TypingAnimatedText from "../../components/type/type";

function Home() {
    return (<>
        <div className="flex flex-column items-center">
           <div><img src="src\images\perfil-home.jpeg" className="rounded-full h-96 w-96 object-cover" alt="foto perfil" /></div>
           <TypingAnimatedText />
                        
        </div>
        <div class="@container">
            <div className="flex flex-col @md:flex-row">
                <h1>
                    Engenharia que transforma <span className="text-emerald-700">ideias em produto</span>
                </h1>
                <h4>
                    Sou <b>Gabriel Mota Valério</b>, estudante de Engenharia de Software. Crio experiências web completas, do React à arquitetura de API's com Spring Boot
                </h4>
                <button class="bg-emerald-700 text-white hover:bg-white hover:text-emerald-700">
                    <svg class="size-5 stroke-current ..." fill="none">
                        
                    </svg>
                    Baixar Currículo
                </button>
            </div>
        </div>

    </>
    )
}

export default Home;