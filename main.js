document.addEventListener('DOMContentLoaded', function() {
    const endpoint =  `https://api.github.com/users/aliceherrera`

    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const userElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch(endpoint).then(function(res) {
        return res.json()
    })
    .then(function(json){
        console.log(json)
        avatarElement.src = json.avatar_url;
        userElement.innerHTML = json.login;
        nameElement.innerHTML = json.name;
        reposElement.innerHTML = json.public_repos;
        followersElement.innerHTML = json.followers;
        followingElement.innerHTML = json.following;
        linkElement.href = json.html_url;
    })
})