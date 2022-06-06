const profileInformation = document.querySelector(".overview");
const username = "yrpcfcp";

const gitInfo = async function () {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json(); 
    console.log(data)
    userDataFetch(data)
    
}

gitInfo()



function userDataFetch (data){
    let div = document.createElement("div");
    div.classList.add("userInfo")
    div.innerHTML= `<figure><img alt="user avatar" src=${data.avatar_url} /></figure>
    <div>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Bio:</strong> ${data.bio}</p>
    <p><strong>Location:</strong> ${data.location}</p>
    <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>`
    profileInformation.append(div)
} 



userDataFetch()