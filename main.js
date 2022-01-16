const linksSocialMedia = {
  github: 'italoximendes',
  youtube: 'channel/UC3AJMjglzX_YbXYCNpcQz8g',
  facebook: 'italoximendes',
  instagram: 'italomalta',
  twitter: 'italoximendes'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
  // Essa função fetch() vai na url e pega algumas informações
  // then() guarda na variável o que está vindo do fetch()
  // .textContent pegar uma informação do html onde pode ser substituido
  // .href você consegue pegar uma url em seu html e troca-la
  // .src você consegue pegar uma imagem em seu html e troca-la
}

getGitHubProfileInfos()
