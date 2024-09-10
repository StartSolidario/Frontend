import 'reactjs-popup/dist/index.css';
import './Modal.css'

import Popup from 'reactjs-popup';
import VoluntariadoForms from '../VoluntariadoForms';

function ModalPostagem() {
   return (
      <>
         <Popup
            trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Nova postagem</button>} modal>
            <div>
               <VoluntariadoForms />
            </div>
         </Popup>
      </>
   );
}

export default ModalPostagem;