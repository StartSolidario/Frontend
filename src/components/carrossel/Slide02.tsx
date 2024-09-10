import Popup from "reactjs-popup";
import VoluntariadoForms from "../voluntariado/VoluntariadoForms";

import "./Carrossel.css";
import DescricaoBH from "../voluntariado/descricoes/DescricaoBH";

function Slide02() {
    return (
        <div className="h-full flex flex-row border-1 border-[#2B4042] 
        bg-[url('https://ik.imagekit.io/startsolidario/Viagens/bahia.png?updatedAt=1725976457089')] bg-cover bg-no-repeat">
            <div className="flex flex-row items-end gap-8 mb-1 p-6">
                <Popup
                    trigger={<button className="text-xl font-semibold border-[#2B4042] border-2 rounded-2xl py-2 px-4 hover:bg-[#2B4042] cursor-pointer">Me Inscrever</button>} modal>
                    <div>
                        <VoluntariadoForms />
                    </div>
                </Popup>
                <Popup
                    trigger={<button className="text-xl font-semibold border-[#2B4042] border-2 rounded-2xl py-2 px-4 hover:bg-[#2B4042] cursor-pointer">Saiba mais</button>} modal>
                    <div>
                        <DescricaoBH />
                    </div>
                </Popup>
            </div>
        </div>
    );
}

export default Slide02