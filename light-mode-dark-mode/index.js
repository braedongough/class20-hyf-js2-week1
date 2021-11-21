const body = document.querySelector('body')
const button = document.querySelector('button')

function toggleColour() {
  const darkMode = body.classList[0]

  if (darkMode) {
    body.classList.remove('dark-mode')
  } else {
    body.classList.add('dark-mode')
  }
}

button.addEventListener('click', toggleColour)
