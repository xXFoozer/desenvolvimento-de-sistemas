'use client'

import "./home.css";
import Link from "next/link";
import { useState } from "react";
import Person from "@/components/Person";

export default function Home() {  
  const [contador,setContador] = useState<number>(0)

  function incrementar(){
    setContador(contador +1)
  }
  function resetar(){
   setContador(0)
  }
  
  return (
      <div>
          <h1>Contador: {contador}</h1>
          <button onClick={incrementar}>INCREMENTAR</button>
          <button onClick={resetar}>RESETAR</button>
        
        <Link href="/login">
           <button>Login</button>
         </Link>
      </div>
    
  
    
    );
}