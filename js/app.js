// var
const sensors = [
  {
    id: 1,
    name: 'Temperature',
    value: 0,
    unit: 'degree',
  },
  {
    id: 2,
    name: 'Oxygen Ratio',
    value: 0,
    unit: 'degree',
  },
]

const sensorsContainer = document.querySelector('.sensors-container')
const nav_bar = document.querySelector('.navbar')

// render
function render(item) {
  return `<div class="card">
            <div class="sensor">${item.name}</div>
            <div class="value">${item.value}</div>
            <div class="unit"> ${item.unit}</div>
          </div>`
}

window.addEventListener('DOMContentLoaded', () => {
  let card = sensors.map((item) => {
    return render(item)
  })
  if (sensorsContainer != null) {
    sensorsContainer.innerHTML = card
  }
})

// fixed-navbar
window.addEventListener('scroll', () => {
  let _nav_height = nav_bar.getBoundingClientRect().height
  let _scroll_height = pageYOffset
  if (_scroll_height > _nav_height) {
    nav_bar.classList.add('fixed-navbar')
  } else {
    nav_bar.classList.remove('fixed-navbar')
  }
})
