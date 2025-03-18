import './styles.css'
import Avatar from '../Avatar'
import Button from '../Button'

type Author = {
    name: string
    role: string
    avatarUrl: string
}

// type Comment = {

//     message: string;
//     publishedAt: Date;
//     like: number;
//     author: Author;

// }

type PostProps = {
    post: {
        author: Author;
        publishedAt: Date;
        content: string;
    }
}

export default function Post({ post }: PostProps) {



    return (
        <article className='post'>
            <header>
                <div className='author'>
                    <Avatar src='https://github.com/xXFoozer.png' hasBorder={true} />
                    <div className='author-infos'>
                        <strong>Germano R. Gomes</strong>
                        <span>Programador Junior</span>
                    </div>
                </div>

                <time>
                    Publicado há 1h
                </time>
            </header>

            <div className='content'>
                <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum</p>
            </div>

            <form className='form'>
                <strong>Deixe um Comentário</strong>

                <textarea placeholder='Deixe um comentário'/>

                <Button/>
            </form>

        </article>
    )
}