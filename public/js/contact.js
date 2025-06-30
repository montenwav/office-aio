const closeBtn = document.querySelector('#close-btn')
const contact = document.querySelector('.contact')
const contactNav = document.querySelector('.contact-nav')
const contactNavAdapt = document.querySelector('.contact-nav-adapt')

closeBtn.addEventListener('click', () => {
    contact.style.opacity = '0'
    document.body.style = 'overflow-y: auto'
    setTimeout(() => {
        contact.style.display = 'none'
    }, 500)
})

contactNav.addEventListener('click', () => {

    console.log('test')
    contact.style.display = 'block'
    document.body.style = 'overflow-y: hidden'
    contact.style.opacity = '0'
    setTimeout(() => {
        contact.style.opacity = '1'
    }, 0)
})

contactNavAdapt.addEventListener('click', () => {

    console.log('test')
    contact.style.display = 'block'
    document.body.style = 'overflow-y: hidden'
    contact.style.opacity = '0'
    setTimeout(() => {
        contact.style.opacity = '1'
    }, 0)
})