import { fireEvent, render, screen } from "@testing-library/react"
import TextareaCustom from "."


describe('text area component', () => {
    it('Deve redenrizar o componente com placeholder correto', () => {
        render(<TextareaCustom message="Any Thing" setMessage={jest.fn()} title="Digite ali" />);

        const textArea = screen.getByPlaceholderText('Digite ali')
        expect(textArea).toBeInTheDocument()
        expect(textArea).toHaveValue('Any Thing')
    })

    it("Deve renderizar o componente e chamar a função setMessage quando o valor for alterado", () => {
        const setMessage = jest.fn()
        render(<TextareaCustom message="Any Thing" setMessage={setMessage} title="Digite ali" />);

        const textArea = screen.getByPlaceholderText('Digite ali')
        fireEvent.change(textArea, { target: { value: 'New Value' } })
        
        expect(setMessage).toHaveBeenCalled()
        expect(setMessage).toHaveBeenCalledTimes(1)
        expect(setMessage).toHaveBeenCalledWith("New Value")
    })
})