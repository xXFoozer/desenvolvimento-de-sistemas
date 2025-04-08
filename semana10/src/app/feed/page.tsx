'use client'
import './styles.css'
import Image from 'next/image'
import axios, { Axios } from 'axios'
import Post from '@/components/Post'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Avatar from '@/components/Avatar'
import { LuPencilLine } from "react-icons/lu";
import cover from "@/assets/tolga-ahmetler-kTZHJT7OO-I-unsplash.jpg"
import { FormEvent, useEffect, useState } from 'react'
import TextareaCustom from '@/components/TextareaCustom'



export default function Feed() {

    const [posts, setPosts] = useState<any[]>([])
    const [content, setContent] = useState<string>('')

    useEffect(() => {
        loadPost()
    }, [])

    async function loadPost() {
        const response = await axios.get("http://localhost:3001/posts")
        
        const postSort = response.data.sort((a: any, b: any) => (
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        ))

        setPosts(postSort)
    }

    async function handleCreatePost(event: FormEvent) {
        event.preventDefault()
       
        const post = {
            id: String(posts.length + 1),
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
                    <form onSubmit={handleCreatePost} className='form-post'>
                        <TextareaCustom message={content} setMessage={setContent} title='O que você esta pensando ?'/>

                        <Button component="Publicar" handle={() =>{}}/>

                    </form>
                    {posts.map(item => (
                        <Post post={item} setPost={setPosts} key={item.id} />

                    ))}
                </main>
            </div>
        </div>
    )
}