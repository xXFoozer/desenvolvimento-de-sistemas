'use client'
import './styles.css'
import Image from 'next/image'
import Post from '@/components/Post'
import Header from '@/components/Header'
import Avatar from '@/components/Avatar'
import cover from "@/assets/tolga-ahmetler-kTZHJT7OO-I-unsplash.jpg"
import Button from '@/components/Button'

export default function Feed() {

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

                       
                        <Button component='editar perfil' />
                    </div>

                </aside>

                <div></div>

                <main className='main'>
                    <Post post={{} as any} />
                    <Post post={{} as any} />
                    <Post post={{} as any} />

                </main>
            </div>
        </div>
    )
}