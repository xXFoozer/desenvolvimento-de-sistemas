async function addPerson(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
   
    if(!name || !age || !email || !phone || !address || !city){
        alert("NAO PREENCHEU ALGO...");
        return;
    }

    let person ={
        nome: name,
        idade: age,
        email: email,
        telefone: phone,
        endereco: address,
        cidade: city
    }

    //Request POST exe
    await fetch("http://localhost:3000/person",{
        method: 'POST',
        body: JSON.stringify(person),//<-- convertendo person para Json
        headers: { 'Content-Type': 'application/json' }
    })

}

async function getPerson(){
   const respose = await fetch("http://localhost:3000/person");

    const item = await respose.JSON();

    console.log(item)

    const personList = document.getElementById("person-list");
    const personElement = document.createElement("div")
    personElement.classList.add("person-list")
    personElement.innerHTML = `
        <div id = "person-list">
            nome: ${nome}
            idade: ${age}
            email: ${email}
            telefone: ${phone}
            endereço: ${address}
            cidade: ${city}
        </div>
    `;


    personList.appendChild(personElement)

}