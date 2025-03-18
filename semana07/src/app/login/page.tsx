'use client'

import './styles.css'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassworld] = useState<string>('')

    const router = useRouter()

    function handleSubmit() {
     
        console.log(email)
        console.log(password)




        router.replace("/")
    }


    return (
        <div className="container">
            <div className="form">
                <h2>Login</h2>

                <input
                    type="text"
                    placeholder="E-mail"
                    className="input"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={password}
                    onChange={(event) => setPassworld(event.target.value)}
                />

                <button
                    className="button"
                    onClick={handleSubmit}
                    disabled ={!email || !(password.length >= 6)}
                >
                    Entrar
                </button>
            </div>
        </div>
    )
}