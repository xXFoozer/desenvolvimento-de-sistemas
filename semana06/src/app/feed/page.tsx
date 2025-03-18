'use client'
import Header from '@/components/Header'
import './styles.css'
import Image from 'next/image'
import cover from "@/assets/ingmar-h-5JMcV5AACP0-unsplash.jpg"
import Avatar from '@/components/Avatar'

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
                    </div>



                </aside>

                <main className='main'>

                </main>
            </div>
        </div>
    )
}