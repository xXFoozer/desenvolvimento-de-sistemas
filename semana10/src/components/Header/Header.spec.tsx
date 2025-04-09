import { render, screen } from "@testing-library/react"
import Header from "."


describe('Header component', () => {
    it('Deve redenrizar o componente header', () => {
        render(<Header />);

        const element = screen.getByAltText("Logo")
        expect(element).toBeInTheDocument();

        const elementH2 = screen.getByText("Feed")
        expect(elementH2).toBeInTheDocument()
    })
})