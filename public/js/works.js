const hoverable_img = document.querySelector('.hoverable_img');
const slider = document.querySelector('.slider')

const conatiner_1 = document.querySelector('#container-1')
const conatiner_2 = document.querySelector('#container-2')

const img_1 = document.querySelector('#img-1')
const img_2 = document.querySelector('#img-2')

conatiner_1.addEventListener('mouseenter', () => {
    img_1.style = 'opacity: 1'
})

conatiner_1.addEventListener('mouseleave', () => {
    img_1.style = 'opacity: 0'
})

conatiner_2.addEventListener('mouseenter', () => {
    img_2.style = 'opacity: 1'
})

conatiner_2.addEventListener('mouseleave', () => {
    img_2.style = 'opacity: 0'
})

conatiner_1.addEventListener('click', () => {
    slider.style = 'opacity: 0'
    setTimeout(() =>  {
        window.open('../html/avatr-exp.html', '_self')
    }, 300)
})

conatiner_2.addEventListener('click', () => {
    slider.style = 'opacity: 0'
    setTimeout(() =>  {
        window.open('../html/tanway.html', '_self')
    }, 300)
})