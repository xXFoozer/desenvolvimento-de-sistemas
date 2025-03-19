'use client'
import './styles.css'
import Image from 'next/image'
import Post from '@/components/Post'
import Header from '@/components/Header'
import Avatar from '@/components/Avatar'
import { LuPencilLine } from "react-icons/lu";
import cover from "@/assets/tolga-ahmetler-kTZHJT7OO-I-unsplash.jpg"
import { FormEvent, useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import Button from '@/components/Button'



export default function Feed() {

    const [posts, setPosts] = useState<any[]>([])
    const [content, setContent] = useState<string>('')

    useEffect(() => {
        loadPost()
    }, [])

    async function loadPost() {
        const response = await axios.get("http://localhost:3001/posts")
       
        const postSort = response.data.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))

        setPosts(response.data)
    }

    async function handleCreatePost(event: FormEvent) {
        event.preventDefault()
        const post = {
            id: posts.length + 1,
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Germano Gomes",
                role: "Programador Junior",
                avatarUrl: "https://github.com/xXFoozer.png"
            }

        }

        await axios.post("http://localhost:3001/posts", post)
        await loadPost()
        setContent('')
    }


    return (
        <div>
            <Header />
            <div className='container'>
                <aside className='sidebar'>
                    <Image src={cover} alt="cover" className='cover' />

                    <div className='profile'>
                        <Avatar src='https://github.com/xXFoozer.png' hasBorder={true} />
                        <strong>Germano R. Gomes</strong>
                        <span>Programador Junior</span>


                        <footer>
                            <button className='button'>
                                <LuPencilLine />
                                Editar Perfil
                            </button>
                        </footer>
                    </div>

                </aside>

                <div></div>

                <main className='main'>
                    <form onSubmit={handleCreatePost}>
                        <textarea placeholder='O que vc ta pensando? '
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />

                        <Button component="publicar" />

                    </form>
                    {posts.map(item => (
                        <Post post={item} key={item.id} />

                    ))}
                </main>
            </div>
        </div>
    )
}