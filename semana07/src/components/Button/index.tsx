import './styles.css'
import { LuPencilLine } from "react-icons/lu";


export default function Button(){
    return (
        <div>
            <footer>
                <button className='button-edit-profile'>
                    <LuPencilLine />
                    Editar seu Perfil
                </button>
            </footer>
        </div>
    )
}