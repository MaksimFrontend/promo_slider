const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')

// Создаём счётчик дивов в блоке main-slide (сейчас их 4, а может и больше быть). 
const slidesCount = mainSlide.querySelectorAll('div').length

// Переменная, которая указывает активный слайд
let activeSlideIndex = 0

// Из slidesCount вычитаем 1, потому что на данный момент у нас 4 слайдов, то есть всего 400VH, а нужно сделать -300VH поэтому минус 1.
sidebar.style.top = `-${(slidesCount -1) * 100}vh`

upBtn.addEventListener('click', () => {
   changeSlide('up')
})

downBtn.addEventListener('click', () => {
   changeSlide('down')
})

document.addEventListener('keydown', event => {
   if (event.key === 'ArrowUp') {
      changeSlide('up')
   } else if (event.key === 'ArrowDown') {
      changeSlide('down')
   }
})

function changeSlide(direction) {
   if (direction === 'up') {
      activeSlideIndex++
      if (activeSlideIndex === slidesCount)
      {
         activeSlideIndex = 0
      }
   }  else if (direction === 'down') {
      activeSlideIndex--
      if (activeSlideIndex < 0) {
         activeSlideIndex = slidesCount -1
      }
   }

   // Вычисляем высоту экрана
   const height = container.clientHeight

   mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

   sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}