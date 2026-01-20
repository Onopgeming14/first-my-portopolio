// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// remove shaw menu
const navLink = document.querySelectorAll ('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll section active link
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add ('active')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove ('active')
        }
    })
}

// scroll reveal animation
const sr = ScrollReveal ({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true 
})

// scrol home 
sr.reveal('.home-title', {})
sr.reveal('.home-scroll', {delay: 100})
sr.reveal('.home-img', {origin:'right', delay: 300})

//scroll about
sr.reveal('.about-img', {delay: 400})
sr.reveal('.about-subtitle', {delay: 200})
sr.reveal('.about-profession', {delay: 300})
sr.reveal('.about-text', {delay: 400})
sr.reveal('.about-social-icon', {delay: 600, interval: 100})

// scroll skills
sr.reveal('.skills-subtitle', {})
sr.reveal('.skills-name', {distance: '20px', delay: 50, interval: 50})
sr.reveal('.skills-img', {delay: 300})

// scroll reward
sr.reveal('.reward-img', {interval: 100})

// scroll contact
sr.reveal('.contact-subtitle', {})
sr.reveal('.contact-text', {interval: 100})
sr.reveal('.contact-input', {delay: 300})
sr.reveal('.contact-button', {delay: 500})

// dark mode
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// cek tema tersimpan
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.firstElementChild.classList[selectedIcon === 'bx-sun' ? 'add' : 'remove'](iconTheme)
}

// toggle theme
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.firstElementChild.classList.toggle(iconTheme)

    localStorage.setItem(
        'selected-theme',
        document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    )
    localStorage.setItem(
        'selected-icon',
        themeButton.firstElementChild.classList.contains(iconTheme) ? 'bx-sun' : 'bx-moon'
    )
})

