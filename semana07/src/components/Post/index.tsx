'use client'
import './styles.css'
import Avatar from '../Avatar'
import Button from '../Button'
import { FormEvent, useState } from 'react'
import { format, formatDistance, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import TextareaCustom from '../TextareaCustom'
import axios from 'axios'

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
        id: number;
        author: Author;
        publishedAt: Date;
        content: string;
    }
}


export default function Post({ post }: PostProps) {

    const [newComment, setNewComment] = useState<string>('')

    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        alert(newComment)

        const comment = {
            comment: newComment,
            publishedAt: new Date().toString(),
            author: {
                name: "Germano Gomes",
                role: "Dev Junior",
                avatarUrl: "http://github.com/xXFoozer.png"
            }
        }

        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            comments: comment
        })

    }

    const dateFormat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className='post'>
            <header>
                <div className='author'>
                    <Avatar src={post.author.avatarUrl} hasBorder={true} />
                    <div className='author-infos'>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time>
                    {dateFormat}
                </time>
            </header>

            <div className='content'>
                <p>{post.content}</p>
            </div>

            <form className='form' onSubmit={handleCreateNewComment}>
                <strong>Deixe um Comentário</strong>


                <TextareaCustom
                    message={newComment}
                    setMessage={setNewComment}
                    title='Deixe um comentário'
                />

                <Button component='Publicar' />
            </form>

        </article>
    )
}