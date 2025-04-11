import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import axios from 'axios';
import Feed from './page';

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>
const mockPost = [
    {
        id: '1',
        content: 'post 1',
        publishedAt: new Date('2024-04-10').toISOString(),
        author: {
            name: 'joe doe',
            role: 'dev',
            avatarUrl: "fake-url"
        },
        comments: []
    },
    {
        id: '2',
        content: 'post 2',
        publishedAt: new Date('2025-04-11').toISOString(),
        author: {
            name: 'joe doe',
            role: 'dev',
            avatarUrl: "fake-url"
        },
        comments: []
    }
]

describe('Feed Page', () => {
    beforeEach(() => {
        mockAxios.get.mockResolvedValue({ data: mockPost });
        mockAxios.post.mockResolvedValue({});
    })

    it('Deve renderizar a pagina do feed', async () => {
        render(<Feed />)
        expect(screen.getByText('Carregando...')).toBeInTheDocument()

        await waitFor(() => {
            expect(screen.queryByText('Carregando...')).not.toBeInTheDocument()
        })

        const posts = screen.getAllByTestId('post-test');

        expect(posts.length).toBe(2);
        expect(posts[0]).toHaveTextContent('post 2');
        expect(posts[1]).toHaveTextContent('post 1');

        const textArea = screen.getByPlaceholderText('O que você esta pensando ?')
        expect(textArea).toBeInTheDocument()

        fireEvent.change(textArea, { target: { value: "Novo post" } })
        
        expect(textArea).toHaveValue("Novo post")

        const button = screen.getByText("Publicar post")
        expect(button).toBeInTheDocument()
        fireEvent.click(button)

        await waitFor(()=>{
            expect(axios.post).toHaveBeenCalledWith(
                "http://localhost:3001/posts",
                expect.objectContaining({
                    content: 'Novo post'
                })
            )
            expect(textArea).toHaveValue("")
        })

    })
})