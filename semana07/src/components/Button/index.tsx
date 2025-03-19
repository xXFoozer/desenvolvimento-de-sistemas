import './styles.css'


type ButtonProps ={
    component:string
}


export default function Button({component}:ButtonProps){
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