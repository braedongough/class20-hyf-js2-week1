const podcasts = [
  {
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354',
  },
  {
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354',
  },
  {
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354',
  },
  {
    name: 'Breakfast news - Dinner edition',
  },
]

const podcastUl = document.querySelector('ul')

for (let i = 0; i < podcasts.length; i++) {
  const podcastLi = document.createElement('li')
  const header = document.createElement('h1')

  const podcast = podcasts[i]
  header.innerHTML = podcast.name

  podcastLi.appendChild(header)

  if (podcast.imageUrl !== undefined) {
    const image = document.createElement('img')

    image.setAttribute('src', podcast.imageUrl)
    image.setAttribute('alt', `Podcast name: ${podcast.name}`)

    podcastLi.appendChild(image)
  }

  podcastUl.appendChild(podcastLi)
}

// document.querySelector('body').appendChild(podcastUl)
