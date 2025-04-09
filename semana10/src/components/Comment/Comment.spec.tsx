import { fireEvent, render, screen } from "@testing-library/react"
import Comment from "."

const mockComment = {
    id: '1',
    like: 3,
    comment: 'Opa bão',
    publishedAt: new Date(),
    author: {
        name: 'joe doe',
        role: 'dev',
        avatarUrl: 'joedoe.png'
    }
}

describe('Comment component', () => {
    it('Deve redenrizar um Comentario', () => {
        render(<Comment comment={mockComment} handleDelete={jest.fn()} handleLike={jest.fn()} />);

        expect(screen.getByText('joe doe')).toBeInTheDocument
        expect(screen.getByText('Opa bão')).toBeInTheDocument
        expect(screen.getByText('3')).toBeInTheDocument
        expect(screen.getByText('Aplaudir')).toBeInTheDocument
    })

    it("Deve verificar a função handleLike foi chamada com id correto", () => {
        const handleLike = jest.fn()
        render(<Comment comment={mockComment} handleDelete={jest.fn()} handleLike={handleLike} />)

        const likeButton = screen.getByText("Aplaudir")
        fireEvent.click(likeButton)
        expect(handleLike).toHaveBeenCalled()
        expect(handleLike).toHaveBeenCalledTimes(1)
        expect(handleLike).toHaveBeenCalledWith(expect.any(Object), "1")

    })

    it('Deve verificar a função handleDelete foi executada com sucesso', () =>{
        const handleDelete = jest.fn()
        render(<Comment comment={mockComment} handleDelete={handleDelete} handleLike={jest.fn()} />)

        const deleteButton = screen.getByTestId("button-delete")
        fireEvent.click(deleteButton)
        
        expect(handleDelete).toHaveBeenCalled()
        expect(handleDelete).toHaveBeenCalledTimes(1)
        expect(handleDelete).toHaveBeenCalledWith(expect.any(Object), "1")
    })
})