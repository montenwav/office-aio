const adaptBtn = document.querySelector('.toggle-btn');
const adaptContent = document.querySelector('.adapt_content');
const span_1 = document.querySelector('#span-1');
const span_2 = document.querySelector('#span-2');

adaptBtn.addEventListener('click', () => {
    adaptContent.style.display = 'block'
    document.body.style = 'overflow-y: hidden'

    span_1.classList.toggle('span-1')
    span_2.classList.toggle('span-2')

    setTimeout(() => {
        adaptContent.style.opacity = '1'
    }, 0)


    if (!span_1.classList.contains('span-1') && !span_1.classList.contains('span-2')) {
        adaptContent.style.opacity = '0'
        adaptContent.style.display = 'none'
        document.body.style = 'overflow-y: auto'
    }
})

