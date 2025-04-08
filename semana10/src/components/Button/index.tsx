import './styles.css'


type ButtonProps ={
    component:string
    handle : () => void
}


export default function Button({component , handle} :ButtonProps){
    return (
        <div>
            <footer>
                <button className='button' disabled ={false}>
                    {component}
                </button>
            </footer>
        </div>
    )
}