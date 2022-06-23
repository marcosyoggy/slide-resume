/*
class="g-slides">-main div
class="b-01-image"
class="b-02">Previus</
class="b-03">Nextius</
class="b-slide">Start Slides
class="b-05seg">0.5seg
class="b-1seg">1.0seg

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
const speed_1000ms = 1000

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

const start_Slide = e => {
    console.log(e.target)
    const my_ID = setInterval(() => {
    counter++
    console.log(`Este é o ${counter}°`)
    slide_Next(counter)

    counter === 6 
        ? clearInterval(my_ID)
        : null
}, time_Slide());
}   

const time_Slide = (time_Speed) => console.log(time_Speed)




















init_slide()

button_Nextius.addEventListener('click', () => slide_Next(++counter))
button_Previus.addEventListener('click', () => slide_Prev(--counter))

button_Start_Slide.addEventListener('click', start_Slide)

speed_Slide_05seg.addEventListener('click', e => time_Slide(speed_500ms))
speed_Slide_1seg.addEventListener('click', e => time_Slide(speed_1000ms))









// const my_ID = setInterval(() => {
//     counter++
//     console.log(counter)

//     counter === 5 
//         ? clearInterval(my_ID)
//         : null
// }, 1000);


































/*
.b-01-image {
      background-image: url("./JPG/img-(1).jpg");
      background-size: cover;
      background-position:top;
    }
*/