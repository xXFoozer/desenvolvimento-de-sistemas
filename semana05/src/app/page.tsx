'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import './home.css'
import { Person } from "@/components/Person";
import { useState } from "react";


export default function Home() {
 
  const [contador, setContador] = useState(0);


 const pessoas =[
  {
    nome: 'Germano',
    idade: 18
  },
  {
    nome: 'Leonidas',
    idade: 18
  },
  {
    nome: 'chama',
    idade: 18
  },
 ]
 
 function contadorMais(){
  setContador(contador + 1)

 }
 
 
  return (
    <div>
    <h1>Home</h1>
    <Link href="/login">login</Link>

    <button onClick={contadorMais}>ADD</button>
    <h1>{contador}</h1>


    <div className="container">
      
      
    </div>


    </div>
    )
  ;
}
