async function loadProfile(){
    const username = document.getElementById("username").value;
    if(!username){
        alert("VC PRECISA DIGITAR UM USUARIO")
        return;
    }

    //Requisição de GET
    const response = await fetch(`https://api.github.com/users/${username}`,{
        method: 'GET'
    })
    const user = await response.json();

    const profiles = document.getElementById("profiles");
    const profileElement = document.createElement("div")
    profileElement.classList.add("profile-item")
    profileElement.innerHTML = `
        <img src ="${user.avatar_url}" />
        <h2>${user.name || user.login}<h2>
        <p>${user.bio}<p>
    `;


    profiles.appendChild(profileElement)


    console.log(user)

}