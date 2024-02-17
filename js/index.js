(function swiperWallpaper() {
    const swiper = document.querySelector('div.swiper')
    const a = document.querySelectorAll('.nav-bar li a')
    const h1 = document.querySelector('.main-container h1')

// PC version

    if (window.innerWidth > 600) {
        setTimeout(() => {
            swiper.classList.remove('first')
            swiper.classList.add('sec')
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color: white"
            }
            h1.style = ("color: black")
        }, 5000)

        setTimeout(() => {
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color: white"
            }
            h1.style = ("color: white")
            swiper.classList.remove('sec')
            swiper.classList.add('third')
        }, 10000)

        setTimeout(() => {
            swiper.classList.remove('third')
            swiper.classList.add('forth')
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color: black"
            }
            h1.style = ("color: black")
        }, 15000)

        setTimeout(() => {
            swiper.classList.remove('forth')
            swiper.classList.add('fifth')
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color: white"
            }
            h1.style = ("color: white")
        }, 20000)

        var fifth = setTimeout(() => {
            swiper.classList.remove('fifth')
            swiper.classList.add('first')
            swiperWallpaper()
        }, 25000)
    }

// Adaptive version

    if (window.innerWidth <= 600) {
        for (let i = 0; i < a.length; i++) {
            a[i].style = "color: white"
        }
        h1.style = ("color: black")

        setTimeout(() => {
            swiper.classList.remove('first_adaptive')
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color: black"
            }
            swiper.classList.add('sec_adaptive')
        }, 5000)

        setTimeout(() => {
            swiper.classList.remove('sec_adaptive')
            swiper.classList.add('third_adaptive')
        }, 10000)

        setTimeout(() => {
            swiper.classList.remove('third_adaptive')
            swiper.classList.add('forth_adaptive')
        }, 15000)

        setTimeout(() => {
            swiper.classList.remove('forth_adaptive')
            swiper.classList.add('fifth_adaptive')
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color: white"
            }
            h1.style = ("color: white")
        }, 20000)

        setTimeout(() => {
            swiper.classList.remove('fifth_adaptive')
            swiper.classList.add('sixth_adaptive')
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color: black"
            }
            h1.style = ("color: w")
        }, 25000)
        
        setTimeout(() => {
            swiper.classList.remove('sixth_adaptive')
            swiper.classList.add('seventh_adaptive')
            for (let i = 0; i < a.length; i++) {
                a[i].style = "color: black"
            }
            h1.style = ("color: white")
        }, 30000)

        setTimeout(() => {
            swiper.classList.remove('seventh_adaptive')
            swiper.classList.add('first_adaptive')
            swiperWallpaper()
        }, 35000)
    }
})()