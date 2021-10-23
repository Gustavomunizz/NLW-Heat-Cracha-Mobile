const social_media = {
  github: 'Gustavomunizz',
  facebook: 'gustavo.munizmartins.9',
  instagram: 'gustavomuniz02',
  twitter: 'gustamunizmart1'
}

function change_social_media() {
  for (let li of socialLinks.children) {
    //"For" faz o looping
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${social_media[social]}` // Computador faz conta começando pelo 0 então, a primeira children começa por 0 e não 1
  }
}
change_social_media()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
