const navbar = document.querySelector('.nav-bar')
const images_text = document.querySelector('.images-text')
const back = document.querySelector('.back h1')
const slider = document.querySelector('.slider')
const readmore = document.querySelector('.readmore')
const readless = document.querySelector('.readless')
const read = document.querySelector('.read')
const info_right = document.querySelector('.info_right')
const nextproject = document.querySelector('.nextproject')
const main = document.querySelector('.main-container')

navbar.addEventListener('mouseenter', () => {
    images_text.style = 'opacity: 0'
    setTimeout(() => {
        navbar.style = 'opacity: 1'
    }, 500)
})

navbar.addEventListener('mouseleave', () => {
    navbar.style = 'opacity: 0'
    setTimeout(() => {
        images_text.style = 'opacity: 1'
    }, 500)
})

back.addEventListener('click', () => {
    slider.style = 'opacity: 0'
    setTimeout(() => {
        window.open('../html/works.html', '_self')
    }, 300)
})

nextproject.addEventListener('click', () => {
    main.style = 'opacity: 0'
    setTimeout(() => {
        window.open('../html/tanway.html', '_self')
    }, 300)
})

readmore.addEventListener('click', () => {
    info_right.style.height = `${info_right.scrollHeight}px`
    read.style = 'box-shadow: none'
    setTimeout(() => {
        readmore.style = 'display: none'
        readless.style = 'display: block'
    }, 200)
})

readless.addEventListener('click', () => {
    info_right.style.height = '300px'
    read.style = 'box-shadow: 0px -50px 100px 90px var(--bg-color);'
    setTimeout(() => {
        readmore.style = 'display: block'
        readless.style = 'display: none'
    }, 200)
})
