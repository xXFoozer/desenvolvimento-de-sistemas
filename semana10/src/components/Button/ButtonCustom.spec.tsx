import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react'
import Button from '.';

describe('Test button', () => {
    it('Deve renderizar o componente Button',() => {
        render(<Button component='Publicar' handle={() =>{}}/>)

        const button = screen.getByText("Publicar")

        expect(button).toBeInTheDocument()
    })

    it('deve renderizar o componente e testar o click',()=>{
        const handleMock = jest.fn()

        render(<Button component='Publicar' handle={handleMock}/>)
        const button = screen.getByText("Publicar")
        expect(button).toBeInTheDocument()

        fireEvent.click(button)
        expect(handleMock).toHaveBeenCalled()
        expect(handleMock).toHaveBeenCalledTimes(1)
    })
})