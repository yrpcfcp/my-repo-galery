// const profileInformation = document.querySelector(".overview");
// const username = "yrpcfcp";
// const repositoryList = document.querySelector(".repo-list")

// const gitInfo = async function () {
//     const response = await fetch(`https://api.github.com/users/${username}`);
//     const data = await response.json(); 
//     console.log(data)
//     userDataFetch(data)
    
// }

// gitInfo()



// function userDataFetch (data){
//     let div = document.createElement("div");
//     div.classList.add("user-info");
//     div.innerHTML = `
//     <figure>
//       <img src=${data.avatar_url}/>
//     </figure>
//     <div>
//       <p><strong>Name:</strong> ${data.name}</p>
//       <p><strong>Bio:</strong> ${data.bio}</p>
//       <p><strong>Location:</strong> ${data.location}</p>
//       <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
//     </div>`;
//     profileInformation.append(div)
// } 



// userDataFetch()

// const repositoryFetch = async function () {
//     const response = await fetch("https://api.github.com/users/USERNAME/repos?page=1")
//     const data = await response.json(); 
//     console.log(data)
//     repositoryFetch(data)
  
// }

// repositoryFetch()

const overview = document.querySelector(".overview");
const username = "yrpcfcp";
const repoList = document.querySelector(".repo-list");

const gitUserInfo = async function () {
  const userInfo = await fetch(`https://api.github.com/users/${username}`);
  const data = await userInfo.json();
  displayUserInfo(data);
};

gitUserInfo();

const displayUserInfo = function (data) {
  const div = document.createElement("div");
  div.classList.add("user-info");
  div.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
  `;
  overview.append(div);
  gitRepos();
};

const gitRepos = async function () {
  const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  const repoData = await fetchRepos.json();
  displayRepos(repoData);
};

const displayRepos = function (repos) {
  for (const repo of repos) {
    const repoItem = document.createElement("li");
    repoItem.classList.add("repo");
    repoItem.innerHTML = `<h3>${repo.name}</h3>`;
    repoList.append(repoItem);
  }
};

