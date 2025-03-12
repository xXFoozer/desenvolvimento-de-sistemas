'use client'

import "./home.css";
import Link from "next/link";
import { useState } from "react";
import Person from "@/components/person";

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
      </div>
    
  
    
    );
}
      
      
      
      
      
      
      
      
      // <div>
      //   <h1>Hello World</h1>
      //   <h2>hi</h2>
      
      //   <Link href="/login">
      //     <button>Login</button>
      //   </Link>
      
      //   <div className="container">
      //     {
        //       list.map((item) => (
          //         <Person nome={item.name} idade={item.age} key={item.name}/>
          //       ))
          //     }
          //   </div>
          
          // </div>
      
//fora do return--------------------------------------------------------------------------
      // const list = [
      //   // {
      //   //   name: "Germano",
      //   //   age: 18
      //   // },
      //   // {
      //   //   name: "Lewis",
      //   //   age: 28
      //   // },
      //   // {
      //   //   name: "Jhon",
      //   //   age: 56
      //   // },
      //   // {
      //   //   name: "Kyra",
      //   //   age: 38
      //   // },
      //   // {
      //   //   name: "Sebastian",
      //   //   age: 32
      //   // }
      // ]