const images = document.querySelectorAll('.images img');
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
// const counter = document.querySelector('#counter')
const closeDiv = document.querySelector('#close')
const carousel = document.querySelector('.carousel')
const gallery = document.querySelector('.gallery')

let = currentIndex = 0;
// counter.textContent = `${currentIndex + 1}/${images.length}`

prev.addEventListener('click', () => {
    currentIndex--
    showSlide(currentIndex)
})

next.addEventListener('click', () => {
    currentIndex++
    showSlide(currentIndex)
})
gallery.addEventListener('click', e => {
    const imgSrc = e.target.src
    
    images.forEach(i => {
        i.classList.remove('selectedImg')
        document.body.style = 'overflow-y: hidden'

        setTimeout(() => {
            if(imgSrc == i.src) {
                i.classList.add('selectedImg')
                
                carousel.style.display = 'block'
                setTimeout(() => {
                    carousel.style.opacity = '1'
                }, 0)
            }
        })
    }, 0)
})

function showSlide(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    }

    images.forEach(eachIndex => {
        eachIndex.classList.remove('selectedImg')
        images[currentIndex].classList.add('selectedImg')
    })

    // counter.textContent = `${currentIndex + 1}/${images.length}`
}

prev.addEventListener('mouseenter', () => {
    prev.style.opacity = '1'
})

prev.addEventListener('mouseleave', () => {
    prev.style.opacity = '0'
})

next.addEventListener('mouseenter', () => {
    next.style.opacity = '1'
})

next.addEventListener('mouseleave', () => {
    next.style.opacity = '0'
})

closeDiv.addEventListener('click', () => {

    document.body.style = 'overflow-y: auto'
    carousel.style.opacity = '0'
    carousel.style.display = 'none'
})