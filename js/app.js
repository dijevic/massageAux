const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('menu')
const homeQuote = document.getElementById('homeQuote')
const menuItem = document.querySelectorAll('.menuItem')


const handleOpenMenu = () => {

    openMenu.addEventListener('click', () => {
        menu.classList.toggle('open')
    })
    closeMenu.addEventListener('click', () => {
        menu.classList.toggle('open')
    })


    menuItem.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.toggle('open')

        })
    })



}





const init = () => {
    handleOpenMenu();

}


init()