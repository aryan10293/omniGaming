const hamMenu = document.querySelector('.ham-menu')
const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', () => {
    console.log('hey does this work')
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})