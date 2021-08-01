/*==================== Preloader 1====================*/
// const Preloader = document.querySelector('.preloader')

// window.addEventListener('load', function(){
//     Preloader.classList.add('hide-preloader');
// })

/*==================== Preloader 2====================*/
var progress = 0;
document.onreadystatechange = function()
{
    if (document.readyState == "interactive")
    {
        var allElement = $("*");
        var length = allElement.length;
        for(var i=0; i<length; i++)
        {
            set_element(allElement[i],length);
        }
    }
}
function set_element(element, totalElement)
{
    var percentage = 100 / totalElement;
    if($(element).length == 1){
        $("#fill").animate({width:progress+percentage+"%"}, 1,function(){
            if(document.querySelector("#fill").style.width == "100%")
            {
                $(".preloader").fadeOut(1000);
            }
        });
        progress = progress + percentage;
    }
}


/*==================== SHOW MENU ====================*/
const navMenu = document.querySelector('.nav_menu'),
      navToggle = document.querySelector('.nav_toggle'),
      navClose = document.querySelector('.nav_close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.querySelector('#nav-menu')
    //when we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
    

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    //when the scoll is greater than 200 viewprt height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)
/*==================== SWIPER DISCOVER ====================*/
var swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });



/*==================== HOME MODAL ====================*/
const modalViews = document.querySelector(".home_modal"),
      modalBtns = document.querySelector('.button_animation'),
      modalCloses = document.querySelector('.modal_close'),
      modalCloses2 = document.querySelector('.modal_projects')

      if(modalBtns){
          modalBtns.addEventListener('click', () =>{
              modalViews.classList.add('active-modal')
          })
      }

      //when we click on the x button => modal close
      if(modalCloses){
          modalCloses.addEventListener('click', () =>{
              modalViews.classList.remove('active-modal')
          })
      }

      //when we click on the button ==> modal close and navigate to Upcoming projects
      if(modalCloses2){
          modalCloses2.addEventListener('click', () =>{
              modalViews.classList.remove('active-modal')
          })
      }

/*==================== QUALIFICATION MODAL ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () =>{
      const target = document.querySelector(tab.dataset.target)

      tabContents.forEach(tabContent =>{
          tabContent.classList.remove('qualification_active')
      })
      target.classList.add('qualification_active')

      tabs.forEach(tab => {
          tab.classList.remove('qualification_active')
      })
      tab.classList.add('qualification_active')
  })
})

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'), //or document.querySelectorAll('.skills_content')
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){
    if(videoFile.paused){
        //Play video
        videoFile.play()

        //we change the icon
        videoIcon.classList.add('uil-pause')
        videoIcon.classList.remove('uil-play')
    } else{
        //Pasue video
        videoFile.pause()

        //we change the icon
        videoIcon.classList.add('uil-play')
        videoIcon.classList.remove('uil-pause')
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo(){
    //Video ends, icon change
    videoIcon.classList.remove('uil-pause')
    videoIcon.classList.add('uil-play')
}
//ended, when the video ends
videoFile.addEventListener('ended', finalVideo)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 200 viewport height
    if(this.scrollY>= 400){
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '150px',
    duration: 3200,
    //reset: true,
})

sr.reveal(`.home_data, .home_social-link, .home_info,
            .discover_container,
            .project_card,
            .sponsor_content,
            .footer_data, .footer_rights`, {
    origin: 'top',
    interval: 150,
})

sr.reveal(` .video_description,
            .subscribe_description,
            .skills_content`, {
    origin: 'left',
})

sr.reveal(` .video_content,
            .subscribe_form`, {
    origin: 'right',
    interval: 100,
})

sr.reveal(` .card2`, {
    origin: 'bottom',
    interval: 100,
})

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


var languageKey = "Language"

var myObject = {
    name: "thanhlearntech",
    age: 27,
    address: "Melbourne",
    [languageKey]: "JavaScript",
    getName: function(){
        return this.name
    }
}

console.log(myObject);