import './styles.css'
import { LuPencilLine } from "react-icons/lu";

type ButtonProps ={
    component:string
}

export default function Button({component}:ButtonProps){
    return (
        <div>
            <footer>
                <button className='button-edit-profile'>
                    <LuPencilLine />
                    {component}
                </button>
            </footer>
        </div>
    )
}