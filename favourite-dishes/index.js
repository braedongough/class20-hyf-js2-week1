const favouriteDishes = ['tacos', 'pizza', 'sushi', 'hummus']
const favouriteDishesUl = document.querySelector('#favouriteDishes')

for (let i = 0; i < favouriteDishes.length; i++) {
  const li = document.createElement('li')

  li.innerHTML = favouriteDishes[i]

  favouriteDishesUl.appendChild(li)
}
