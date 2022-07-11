const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('menu')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeModal')
const modalImg = document.getElementById('modalImg')
const modalContent = document.getElementById('modalContent')
const imageDescription = document.getElementById('imageDescription')
const leftArrow = document.getElementById('leftArrow')
const rightArrow = document.getElementById('rightArrow')
const homeQuote = document.getElementById('homeQuote')
const menuItem = document.querySelectorAll('.menuItem')
const galleryImg = document.querySelectorAll('.galleryImg')


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


const handleOpenModal = () => {
    let itemSelected = ''
    let firstElement = galleryImg[0]
    let lastElemnt = galleryImg[galleryImg.length - 1]

    galleryImg.forEach((item) => {
        item.addEventListener('click', () => {
            modal.classList.toggle('open')
            modalImg.src = item.src
            itemSelected = item
            imageDescription.innerText = itemSelected.alt

        })
    })

    closeModal.addEventListener('click', () => {
        modalContent.classList.toggle('close')
        setTimeout(() => {
            modal.classList.toggle('open')
            modalContent.classList.toggle('close')

        }, 450)
    })

    leftArrow.addEventListener('click', () => {
        if (itemSelected.previousElementSibling) {

            itemSelected = itemSelected.previousElementSibling
            modalImg.src = itemSelected.src
            imageDescription.innerText = itemSelected.alt


        } else {
            itemSelected = lastElemnt
            modalImg.src = itemSelected.src
            imageDescription.innerText = itemSelected.alt


        }

    })
    rightArrow.addEventListener('click', () => {
        if (itemSelected.nextElementSibling) {

            itemSelected = itemSelected.nextElementSibling
            modalImg.src = itemSelected.src
            imageDescription.innerText = itemSelected.alt


        } else {
            itemSelected = firstElement
            modalImg.src = itemSelected.src
            imageDescription.innerText = itemSelected.alt

        }

    })





}




const init = () => {
    handleOpenMenu();
    handleOpenModal();

}


init()

