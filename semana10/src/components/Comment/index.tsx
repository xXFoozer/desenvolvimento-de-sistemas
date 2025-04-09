'use client'
import { PiThumbsUp, PiTrash } from 'react-icons/pi';
import Avatar from '../Avatar'
import './styles.css'
import { RiDeleteBin5Line, RiDeleteBin6Line } from "react-icons/ri";
import { BiLike } from 'react-icons/bi';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type Author = {
    name: string
    role: string
    avatarUrl: string
}

type CommentProps = {
    handleLike: (event: any, id: string) => void,
    handleDelete: (event: any, id: string) => void;
    comment: {
        id: string;
        like: number;
        author: Author;
        comment: string;
        publishedAt: Date;
    }
}


export default function Comment({ comment, handleDelete, handleLike }: CommentProps) {



    const dateFormat = formatDistanceToNow(comment.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <div className='comment'>
            <Avatar src={comment.author.avatarUrl} hasBorder={false} />
            <div className='comment-box'>
                <div className='comment-content'>
                    <header>
                        <div className='author-and-time'>
                            <strong>{comment.author.name}</strong>
                            <time>{dateFormat}</time>
                        </div>
                        <button title='Deletar Comentário' onClick={(event) => handleDelete(event,comment.id)} data-testid="button-delete">
                            <PiTrash size={24} />
                        </button>
                    </header>
                    <p>{comment.comment}</p>
                </div>
                <footer>
                    <button onClick={(event) => handleLike(event,comment.id)}>
                        <BiLike size={20} />
                        Aplaudir
                        <span>
                            {comment.like}
                        </span>
                    </button>

                </footer>
            </div>
        </div>

    )
}