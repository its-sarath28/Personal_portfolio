// header box-shadow

function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 50)
    header.classList.add('scroll-header');
    else
    header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// service section

const modelViews = document.querySelectorAll('.service-model')
const modelBtns = document.querySelectorAll('.service-button')
const modelClose = document.querySelectorAll('.service-model-close')

let model = function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}

modelBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        model(i)
    })
})

modelClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modelViews.forEach((mv) => {
            mv.classList.remove('active-model')
        })
    })
})


// mixItUP section
let mixerPortfolio = mixitup('.work-container',{
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.work-item')

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))

    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

// swiper

let swiperTest = new Swiper(".test-container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        567: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
        991:{
            slidesPerView: 1
        }
    },
});

// scroll section active link

const section = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,        
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// theme-change

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// scroll revel

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2500,
    delay: 200,
    // reset: true
})

sr.reveal(`.home-data`),
sr.reveal(`.home-handle`, {delay: 700}),
sr.reveal(`.home-socials, .home-scroll`, {delay: 900 , origin: 'bottom'}),
sr.reveal(`.about`, {delay: 500}),
sr.reveal(`.skill`, {delay: 500, origin: 'bottom'}),
sr.reveal(`.service`, {delay: 500}),
sr.reveal(`.work`, {delay: 500, origin: 'bottom'}),
sr.reveal(`.test`, {delay: 500}),
sr.reveal(`.contact`, {delay: 500, origin: 'bottom'}),
sr.reveal(`.footer`, {delay: 400})