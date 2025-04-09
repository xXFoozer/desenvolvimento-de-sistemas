import { render, screen } from "@testing-library/react"
import Person from "."
describe("Componente Person",()=>{
    it("Deve renderizar o componente de Pessoa",()=>{
        render(<Person nome='joe doe' idade={20}/>)

        const name = screen.getByText('Nome: joe doe')
        expect(name).toBeInTheDocument()
        
        const idade = screen.queryByText('20',{exact: false})
        expect(idade).toBeInTheDocument()
    })
    
})