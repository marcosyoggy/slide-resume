/*
git: https://github.com/marcosyoggy/slide-resume
gitpages: https://marcosyoggy.github.io/slide-resume/
netlify: https://slide-resume.netlify.app/
*/

const button_Start_Slide = document.querySelector('.b-slide')
const button_Previus = document.querySelector('.b-02')
const button_Nextius = document.querySelector('.b-03')
const speed_Slide_05seg = document.querySelector('.b-05seg')
const speed_Slide_1seg = document.querySelector('.b-1seg')
const div_Image = document.querySelector('.b-01-image')

let counter = 0
const speed_500ms = 500
const speed_1000ms = 1500
let time_Slide = 1500

const init_slide = () => {
    div_Image.style.backgroundImage = 'url("./JPG/img-(0).jpg")'
    div_Image.style.backgroundSize = 'cover'
    div_Image.style.backgroundPosition = 'center'
}

const set_Image_Style = (count_Slide) => {
    div_Image.style.backgroundImage = `url("./JPG/img-(${count_Slide}).jpg")`,
    div_Image.style.backgroundSize = 'cover',
    div_Image.style.backgroundPosition = 'center'
}

const first_Image =() => {
    div_Image.style.backgroundImage = `url("./JPG/img-(0).jpg")`
    counter = 0
    return
}

const last_Image =() => {
    div_Image.style.backgroundImage = `url("./JPG/img-(6).jpg")`
    counter = 6
    return
}

const slide_Next = (counter_Next) => {
    counter_Next === 7 
        ? first_Image()
        : set_Image_Style(counter_Next)
}

const slide_Prev = (counter_Prev) => {
    counter_Prev === -1 
        ? last_Image()
        : set_Image_Style(counter_Prev)
    }

const start_Slide = () => {
    const my_ID = setInterval(() => {
    counter++
    slide_Next(counter)

    counter === 6 
        ? clearInterval(my_ID)
        : null

}, time_Slide);
}   

init_slide()

button_Nextius.addEventListener('click', () => slide_Next(++counter))
button_Previus.addEventListener('click', () => slide_Prev(--counter))

button_Start_Slide.addEventListener('click', () => {
    start_Slide()
    button_Start_Slide.textContent = `Time Slide: ${time_Slide} ms.`
})

speed_Slide_05seg.addEventListener('click', () => time_Slide = 500)
speed_Slide_1seg.addEventListener('click', () =>  time_Slide = 1500)
