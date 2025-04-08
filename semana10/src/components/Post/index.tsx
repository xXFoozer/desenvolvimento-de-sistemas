'use client'
import './styles.css'
import Avatar from '../Avatar'
import Button from '../Button'
import Comment from '../Comment'
import { ptBR } from 'date-fns/locale'
import TextareaCustom from '../TextareaCustom'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { format, formatDistance, formatDistanceToNow } from 'date-fns'
import axios from 'axios'
import { v4 as uuid } from 'uuid'

type Author = {
    name: string
    role: string
    avatarUrl: string
}

type Comment = {
    id: string;
    like: number;
    author: Author;
    comment: string;
    publishedAt: Date;
}

type Post = {
    id: string;
    author: Author;
    publishedAt: Date;
    content: string;
    comments: Comment[]
}

type PostProps = {
    setPost: Dispatch<SetStateAction<Post[]>>,
    post: Post
}


export default function Post({ post, setPost }: PostProps) {

    const [newComment, setNewComment] = useState<string>('')

    async function loadComment() {
        const response = await axios.get(`http://localhost:3001/posts/${post.id}`)

        setPost((prev: Post[]) =>
            prev.map(prevPost => (
                prevPost.id === post.id ? response.data : prevPost
            ))
        )
    }


    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        const comment = {
            id: uuid(),
            comment: newComment,
            publishedAt: new Date().toString(),
            like: 0,
            author: {
                name: "Germano Gomes",
                role: "Dev Junior",
                avatarUrl: "http://github.com/xXFoozer.png"
            }
        }

        const comments = post.comments?.length ? [...post.comments, comment] : [comment]

        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": comments
        })

        loadComment()
        setNewComment(" ")
    }

    async function handleDeleteComment(event: MouseEvent, id: string) {
        event.preventDefault();

        const commentsFilter = post.comments.filter(comment => comment.id !== id);
        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": commentsFilter
        })
        loadComment()
    }

    async function handleLikeComment(event: MouseEvent, id: string) {
        event.preventDefault();

        const commentUpdated = post.comments.map(comment =>{
            if(comment.id === id){
                return { ...comment,like: comment.like +1}
            }else{
                return comment;
            }
        })
        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": commentUpdated
        })
        loadComment()
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



            {post.comments?.length && post.comments.map(comment => (
                <Comment key={comment.id} 
                comment={comment} 
                handleDelete={handleDeleteComment} 
                handleLike={handleLikeComment} />
            ))}



        </article>
    )
}