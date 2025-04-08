
import { render, screen } from '@testing-library/react'
import Avatar from '.'

describe('Componente avatar', () => {
    it('Deve resderizar o componente sem borda', () => {
        render(<Avatar src='teste' />)

        const avatarElement = screen.getByTestId('avatar')

        expect(avatarElement).toBeInTheDocument()
        
        expect(avatarElement).toHaveClass('avatar-without-border')
    })

    it('Deve resderizar o componente sem borda', () => {
        render(<Avatar src='teste' hasBorder={true}/>)

        const avatarElement = screen.getByTestId('avatar')

        expect(avatarElement).toBeInTheDocument()
        
        expect(avatarElement).toHaveClass('avatar')
    })


})