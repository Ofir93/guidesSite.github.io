nav_icon = document.getElementById('nav_icon')
main_menu = document.getElementById('main_menu')
menuList = document.querySelectorAll('.main_menu ul li a')
current = 1
nav_icon.addEventListener('click', function () {
  console.log('click')
  if (current == 1) {
    main_menu.classList.add('active')
    current = 2
  } else if (current == 2) {
    main_menu.classList.remove('active')
    current = 1
  }
})
menuList.forEach(function (navElement) {
  navElement.addEventListener('click', function () {
    if (current == 2) {
      main_menu.classList.remove('active')
      current = 1
    }
  })
})

const medicineT = () => {
  mainMenu.classList.add('hides')
  medicine.classList.add('shows')
}

const agamT = () => {
  mainMenu.classList.add('hides')
  agam.classList.add('shows')
}

const logisticsT = () => {
  mainMenu.classList.add('hides')
  logistics.classList.add('shows')
}

const hRT = () => {
  mainMenu.classList.add('hides')
  hR.classList.add('shows')
}

const carsT = () => {
  mainMenu.classList.add('hides')
  cars.classList.add('shows')
}

const opGuidsT = () => {
  mainMenu.classList.add('hides')
  opGuids.classList.add('shows')
}


const shonotT = () => {
  mainMenu.classList.add('hides')
  shonot.classList.add('shows')
}

const backToggle = () => {
  medicine.classList.remove('shows')
  shonot.classList.remove('shows')
  cars.classList.remove('shows')
  opGuids.classList.remove('shows')
  logistics.classList.remove('shows')
  hR.classList.remove('shows')
  agam.classList.remove('shows')
  mainMenu.classList.remove('hides')
}

