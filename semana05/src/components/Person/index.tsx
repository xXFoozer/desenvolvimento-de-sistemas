import './styles.css'


type PersonProps = {
    nome: string,
    idade: number
}


export function Person({nome, idade} : PersonProps){
    return(
    <div className="item">
        <span>Nome: <strong> {nome}</strong></span>
        <span>Idade: <strong> {idade}</strong></span>
      </div>)
}