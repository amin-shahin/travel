
const navbar = document.querySelector('.navbar')
const adventureContainer = document.querySelector('.adventure-container');
const products = document.querySelector('.products')
const clientComment = document.querySelector('.client-comment')
const offers = document.querySelector('.offers')
const dailyPostContainer = document.querySelector('.daily-post-container')
const menuBar = document.querySelector('.menu-bar')
const sunIcon = document.querySelector('.sun')
const moonIcon = document.querySelector('.moon')
const systemIcon = document.querySelector('.system')
const themeSwicher = document.querySelectorAll('.theme-swicher')
const navItems = document.querySelector('.nav-item')
const navCloseIcon =document.querySelector('.nav-close')
const iconsTheme = document.querySelector('.dark-mood')
const icons = document.querySelector('.icons')
const iconsThemeNavbar = document.querySelectorAll('.icons .icon')
const containerDarkMood = document.querySelector('.container-dark-mood')



//////////////////////////   initialize AOS //////////////

AOS.init();

///////////////////////// TYPE WRITER INITIALIZE ///////////

let typewriter =  new Typewriter('#typewriter', {
  // strings: ['Jobs fill your pocket, Adventures fill your soul', 'You don’t have to be rich to travel well.'],
  autoStart: true,
  loop: true
});

typewriter
.typeString('Jobs fill your pocket,<strong class="text-[#219150] dark:text-[#17b1b9]">Adventures</strong> <span class="text-[#219150] dark:text-[#17b1b9]">fill your soul</span> ')
.pauseFor(500)
.deleteAll()
.typeString('You don’t have to be rich to <strong class="text-[#219150] dark:text-[#17b1b9]">travel</strong>  well.')
.pauseFor(500)
.start()
/////////////////////////   HAMBURGER MENU  ///////////////////////

menuBar.addEventListener('click',()=>{
  navItems.classList.add('show')
  navCloseIcon.classList.remove('hidden') 
 
})
navCloseIcon.addEventListener('click',()=>{
  navItems.classList.remove('show')
  navCloseIcon.classList.add('hidden') 
})


document.querySelector('.search-icon').addEventListener('click',()=>{
  document.querySelector('.search-box').classList.add('show-search')
 
})

document.querySelector('.search-close').addEventListener('click',()=>{
  document.querySelector('.search-box').classList.remove('show-search')
})

function closeMenu(){
  navItems.classList.remove('show')
  navCloseIcon.classList.add('hidden') 

}
//////////////////////////// NAVBAR FIXED //////////////

window.addEventListener('scroll',()=>{
  let scrollTop = document.documentElement.scrollTop;
  if(scrollTop > 100){
    
    navbar.classList.add('sticky')
  }else{
    navbar.classList.remove('sticky')

  }
})



///////////////////////// Dark Mood ///////////////////

const userTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

if(userTheme === 'dark' || (!userTheme && systemTheme)){
  document.documentElement.classList.add('dark')
  sunIcon.classList.add('hidden')
  systemIcon.classList.add('hidden')
}else{
  document.documentElement.classList.remove('dark')
  systemIcon.classList.add('hidden')
  moonIcon.classList.add('hidden')
}



function swicherIcon(theme){
  if(theme === 'dark'){
    sunIcon.classList.add('hidden')
    moonIcon.classList.remove('hidden')

  }
  else {
    sunIcon.classList.remove('hidden')
    moonIcon.classList.add('hidden')
  } 
}


themeSwicher.forEach( item =>{
  item.addEventListener('click',(event)=>{
    const theme = event.target.dataset.theme
  if(theme === 'dark'){
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme','dark')
    swicherIcon('dark')

  }
  else if (theme === 'light') {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme','light')
    swicherIcon('light')

  } 
  else {
    localStorage.removeItem('theme')
    if(systemTheme){
      document.documentElement.classList.add('dark')
      swicherIcon('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
      swicherIcon('light')
    }
  }
  })
})


window.addEventListener('click',(event)=>{
  
  
  let containClass2 = event.target.classList.contains("theme-swicher");
  let containClass3 = event.target.classList.contains("close-theme")

  if(containClass2 || containClass3 ){
    // iconsTheme.classList.add('hidden')
  containerDarkMood.classList.add('hidden')

  }

if( event.target == containerDarkMood){
  containerDarkMood.classList.add('hidden')

}

  
})



iconsThemeNavbar.forEach(icon =>{
  icon.addEventListener('click',(event)=>{
    // iconsTheme.classList.remove('hidden')
    containerDarkMood.classList.remove('hidden')
  })
})


///////////////////////////////////////////////////////
const rendering = () =>{

adventureData.forEach( adventure => {

  adventureContainer.innerHTML += `
      <div class="adventure-item max-w-xs flex flex-col justify-center items-center " data-aos="${adventure.aos}"  data-aos-duration="1000">
          <img class="w-56 h-56 rounded-full self-center" src="${adventure.img}" alt="adventure-image-1">
          <h3 class="text-[#219150] dark:text-[#03e9f4] py-4 text-xl font-bold">${adventure.title}</h3>
          <p class="text-center text-xs md:text-base leading-[2] dark:text-[#c5c6c7]">${adventure.text}</p>
          <a href="javascript:void(0)" class=" py-2 px-7 my-4 transition-all duration-300 border-[#0f3f23]  dark:text-[#03e9f4] border-2 dark:border-[#03e9f4] hover:bg-[#0f4124] hover:text-white dark:box-shadow-btn dark:hover:bg-[#03e9f4] dark:hover:text-[#1f2833] dark:hover:rounded-lg dark:hover:shadow-box-shadow-custom dark:hover:font-semibold">Read More</a>
    </div>
  `
})


productData.forEach(product =>{

  products.innerHTML +=`
 
          <div class="swiper-slide product-slide rounded-md w-full relative border-2 flex flex-col justify-center items-center">
                
                <div onmouseenter="enter(this)" onmouseleave="leave(this)"  class="product img overflow-hidden w-full relative flex flex-col transition-all duration-300">
                    <div class="img-product h-3/4">
                      <img class="object-cover w-full h-full" src="${product.img}" alt="product-${product.id}">
                    </div>
                    <div class="overlay-product absolute right-0 bottom-0  flex justify-center items-end w-full h-full opacity-0">
                            <div class="icons">
                                <i class="fa-solid fa-cart-shopping text-[#219150] bg-slate-800 p-3"></i>
                                <i class="fa-solid fa-heart text-rose-600  bg-slate-800 p-3"></i>
                            </div>
                        </div>
                </div>

                <h3 class="title text-[#10221b] dark:text-[#c5c6c7] text-2xl font-bold">title</h3>
                <div class="starts-icon py-4 text-yellow-400 dark:text-[#03e9f4]">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>

                <div class="price-product flex justify-around w-full py-3">
                    
                    <div class="discount w-full text-center text-red-300 dark:text-[#c5c6c7]">
                        <del>${product.discount}</del>
                    </div>
                    <div class="price w-full text-center text-xl text-[#219150] dark:text-[#03e9f4]">${product.price}</div>
                </div>

        </div>
     
  `
})


popularData.forEach( popular =>{
  document.querySelector('.popular-packages-container').innerHTML +=`
  
      <div class="popular-card text-center max-w-[1500px] bg-white dark:bg-[#212121] hover:-translate-y-4 duration-300">
          <img class="w-full" src="${popular.img}" alt="popular-img-${popular.id}">
          <h3 class="font-semibold text-xl sm:text-2xl py-4 text-[#219150] dark:text-[#03e9f4]">Featured Tour Package</h3>
          <p class="text-xs md:text-base px-2 leading-[1.5] dark:text-[#c5c6c7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptates optio error</p>
          <h4 class="text-2xl py-4 text-[#219150] dark:text-[#03e9f4]">$250 - $450</h4>
          <a href="javascript:void(0)" class=" m-5 py-2 px-6  transition-all duration-300  mt-4 dark:text-[#03e9f4] border-2 dark:border-[#03e9f4] hover:bg-[#0f4124] hover:border-[#0f4124] hover:text-white dark:box-shadow-btn dark:hover:bg-[#03e9f4] dark:hover:text-[#1f2833] dark:hover:rounded-lg dark:hover:shadow-box-shadow-custom dark:hover:font-semibold">Explore Now</a>
      </div>
  `
})

commentData.forEach( comment =>{
  clientComment.innerHTML +=`
  <div class="swiper-slide client-comment w-80 relative ">

      <div class="comment bg-[#eeeeee] dark:bg-[#323232] z-10 p-5 inline-block rounded-md relative dark:text-[#c5c6c7]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iusto, dicta at. Tempore, natus ad dolores quisquam dignissimos
            ut quos, odio iusto laudantium illo facilis repellendus.
            Distinctio quibusdam ut incidunt dolor?
            <span class="arrow bg-[#eeeeee] dark:bg-[#323232] w-8 h-8 inline-block absolute left-[6px] -bottom-[12px] rotate-45"></span>
      </div>

      <div class="client flex mt-7">
          <img class="rounded-full mr-5" src="${comment.img}" alt="">
          <div class="client-info flex flex-col justify-center ">
              <span class="client-name text-2xl dark:text-[#c5c6c7]">${comment.name}</span>
              <span class="client-work text-[#219150] dark:text-[#03e9f4]">${comment.work}</span>
          </div>
      </div>

  </div>
  
  `

 
})

offersData.forEach( offer =>{
  offers.innerHTML +=`
  <div class="ih-item square colored effect6 scale_down_up" data-aos="zoom-in-down">
    <a href="javascript:void(0)">
      <div class="img"><img src="${offer.img}" alt="img"></div>
      <div class="info">
        <h3 >${offer.title}</h3>
        <p class="text-xs md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi</p>
      </div>
    </a>
  </div>
  `
})


popularData.forEach( post =>{
  dailyPostContainer.innerHTML += `
 
  <div class="daily-post text-center flex flex-col justify-center items-center hover:scale-[1.02] duration-300">
        <img class="object-cover rounded-md" src="${post.img}" alt="daily-post-${post.id}">
        <span class="info-admin self-center bg-[#1c3520] dark:bg-[#093652] rounded-md text-white -mt-4 p-2  flex justify-between w-3/4">
            <div class="date flex justify-center items-center">
                <i class="fa-solid fa-calendar text-[#219150] dark:text-[#03e9f4] mr-3 text-sm"></i>
                <span class="date-write text-xs font-semibold">21st,May 2022</span>
            </div>
            <div class="admin flex justify-center items-center">
                <i class="fa-solid fa-user text-[#219150] dark:text-[#03e9f4] mr-3 text-sm"></i>
                <span class="admin-writer text-xs font-semibold ">By Admin</span>
            </div>
        </span>

        <h2 class="text-center text-2xl font-bold text-[#1c3520] dark:text-[#03e9f4] py-4 ">Blog Title</h2>
        <p class="pb-4 w-3/4 text-center text-xs md:text-base dark:text-[#c5c6c7]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint ex commodi.</p>
        <a class="relative dark:hidden px-7 py-2  border border-[#1c3520] dark:border-[#c5c6c7] dark:text-[#c5c6c7] transition-all duration-300 hover:border-[#093652] hover:bg-[#1c3520]  dark:hover:bg-[#093652] hover:text-white flex justify-center items-center" href="javascript:void(0)">
         <span class="w-full h-full hover-btn">Read More</span>
        </a>
        <a class="relative hidden dark:block hover-btn-gradient px-16 py-5  border border-[#1c3520] dark:border-[#c5c6c7] dark:text-[#c5c6c7] transition-all duration-300 hover:border-[#093652] hover:bg-[#1c3520]  dark:hover:bg-[#093652] hover:text-white flex justify-center items-center" href="javascript:void(0)">
        <span class="w-full h-full hover-btn">Read More</span>
       </a>
    </div>
  
  `
})

}


function enter(event){
const overlay = document.querySelectorAll('.overlay-product')

overlay.forEach(overlay =>{
  event.firstElementChild.nextElementSibling.classList.add('show')
})
}
function leave(event){
  const overlay = document.querySelectorAll('.overlay-product')
    overlay.forEach(overlay =>{
      event.firstElementChild.nextElementSibling.classList.remove('show')
    })
  }

  window.addEventListener('DOMContentLoaded',rendering)

//////////////////////////   initialize SWIPER JS //////////////

const swiperHeader = new Swiper('.slider-header', {
  loop: true,
  effect: "fade",
  speed:700,
  grabCursor:true,
  autoplay: {
    delay: 3500,
  }

});

const swiperProducts = new Swiper('.slider-products', {
  loop: true,
  spaceBetween:20,
  grabCursor:true,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   autoplay: {
     delay: 3500,
     disableOnInteraction: false,
   },
   breakpoints: {
    0: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
      spaceBetween:30,

    },
    850: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  }

 });


 const swiperComment = new Swiper(".review-slider", {
  loop: true, 
  grabCursor:true,
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
  },

});

const swiperLogo = new Swiper(".swiper-logo", {
  loop: true,
  grabCursor:true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
  },
});



