import Link from "next/link";
import "./home.css";
import Person from "@/components/person";

export default function Home() {
  const list = [
    {
      name: "Germano",
      age: 18
    },
    {
      name: "Lewis",
      age: 28
    },
    {
      name: "João",
      age: 39
    },
    {
      name: "Kyra",
      age: 38
    },
    {
      name: "Sebastian",
      age: 32
    }
  ]

  return (
    <div>
      <h1>Hello World</h1>
      <h2>hi</h2>

      <Link href="/login">
        <button>Login</button>
      </Link>

      <div className="container">
        {
          list.map((item) => (
            <Person nome={item.name} idade={item.age} />
          ))
        }
      </div>

    </div>

  );
}
