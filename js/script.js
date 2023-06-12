
// function sliderSwiper() {

//     let sliderLine = document.querySelector('.slider__line')
//     let dots = document.querySelectorAll('.dot')
//     let wrap = document.querySelector('.slider__wrap')
//     let cards = document.querySelectorAll('.cards')
//     /*
//     let next = document.querySelector('.nex')
//     let prev = document.querySelector('.pre')

//     next.addEventListener('click', nextSlide)
//     prev.addEventListener('click', prevSlide)
//     console.log(cards);
//     */
//     let count = 1,
//         widthSlid
//     let timeOut = 400


//     function swiperSlide() {
//         let startX = 0
//         let prue = false
//         let endX = 0

//         cards.forEach((card) => {
//             card.addEventListener('mousedown', (e) => {
//                 prue = true
//                 startX = e.clientX

//             })

//             card.addEventListener('mouseup', (e) => {
//                 endX = e.clientX
//                 let sum = startX - endX
//                 prue = false
//                 if (sum > 0) {
//                     count++
//                     if (count > cards.length) {
//                         count = 0
//                     }

//                 } else if (sum == 0) {

//                 } else if (sum < 0) {
//                     count--
//                     if (count < 0) {
//                         count = cards.length - 1
//                     }
//                 }
//                 rollSlide()
//                 vewSlide(count)
//             })
//         })
//     }
//     swiperSlide()
//     function swiperSlidePhone() {
//         let prue = false
//         let start = 0
//         let end = 0


//         cards.forEach((card) => {
//             card.addEventListener('touchstart', (e) => {
//                 let elem = e.changedTouches[0]
//                 start = elem.clientX
//                 prue = true
//             })
//             card.addEventListener('touchend', (e) => {
//                 let elem = e.changedTouches[0]
//                 end = elem.clientX
//                 let sum = start - end
//                 prue = false

//                 if (sum > 0) {
//                     count++

//                     if (count > cards.length - 1) {
//                         count = 0
//                     }

//                 } else if (sum == 0) {

//                 } else if (sum < 0) {
//                     count--
//                     if (count < 0) {
//                         count = cards.length - 1
//                     }
//                 }
//                 rollSlide()
//                 vewSlide(count)

//             })
//         })
//     }
//     swiperSlidePhone()


//     function showSlide() {
//         widthSlid = wrap.offsetWidth
//         sliderLine.style.width = widthSlid * cards.length
//     }
//     showSlide()

//     function nextSlide() {
//         count++
//         console.log(cards.length);

//         if (count > cards.length - 1) {
//             count = 0
//         }
//         rollSlide()
//         vewSlide(count)
//     }

//     function prevSlide() {
//         count--
//         if (count < 0) {
//             count = cards.length - 1
//         }
//         rollSlide()
//         vewSlide(count)
//     }

//     function rollSlide() {
//         sliderLine.style.transform = `translateX(${-count * widthSlid / 3}px)`
//     }

//     function vewSlide(ind) {
//         dots.forEach((e) => {
//             e.classList.remove('active')
//         })
//         dots[ind].classList.add('active')
//     }

//     dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//             count = index
//             rollSlide()
//             vewSlide(count)

//         })
//     })


// }
// sliderSwiper()

function scrollAnim() {

    let sap = document.querySelectorAll('.sap')
    let mon = document.querySelector('.trade__img')
    let img1 = document.querySelector('.img1')
    let mon2 = document.querySelector('.mail__img')
    let img3 = document.querySelector('.img4')
    let vid = document.querySelector('.get__video')
    let item1 = document.querySelector('.item1')
    let item2 = document.querySelector('.item2')
    let item3 = document.querySelector('.item3')
    let item4 = document.querySelector('.item4')
    let col = document.querySelectorAll('.col')
    let row = document.querySelectorAll('.row')
    let imgs = document.querySelectorAll('.company__row img')
    let tets = document.querySelectorAll('.tet')
    let app1 = document.querySelector('.app1')
    let app2 = document.querySelector('.app2')

    let option = {

        threshould: 0.5,
    }

    let observer = new IntersectionObserver(callback, option)

    observer.observe(item1)
    observer.observe(item2)
    observer.observe(item3)
    observer.observe(item4)
    
    observer.observe(app1)
    observer.observe(app2)
    
    tets.forEach((tet) => {
        observer.observe(tet)
    })

    imgs.forEach((img) => {
        observer.observe(img)
    })

    row.forEach((r) => {
        observer.observe(r)
    })

    col.forEach((c) => {
        observer.observe(c)
    })

    sap.forEach((s) => {
        observer.observe(s)
    })
    observer.observe(mon)
    observer.observe(img1)
    observer.observe(img3)
    observer.observe(mon2)
    observer.observe(vid)


    function callback(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
            }
        })
    }
}
scrollAnim()





function burgerActive() {
    let burger = document.querySelector('.burger')
    let nav = document.querySelector('.head__nav')
    let fade = document.querySelector('.fade')
    let trade = document.querySelector('.trade__body')
    let head = document.querySelector('.head')
    let main = document.querySelector('.main')

    head.addEventListener('click', (e) => {
        if (e.target.closest('.burger')) {
            burger.classList.toggle('active')
            nav.classList.toggle('active')
            fade.classList.toggle('active')
            trade.classList.toggle('active')
            document.body.classList.toggle('active')
            main.classList.toggle('active')

        }
        if (!e.target.closest('.burger ') && !e.target.closest('.head__nav')) {
            burger.classList.remove('active')
            nav.classList.remove('active')

            document.body.classList.remove('active')
            fade.classList.remove('active')
            trade.classList.remove('active')
            main.classList.remove('active')

        }
    })


}
burgerActive()


let slid = new Swiper('.slid-content', {
  

   
    pagination:{
      clickable: true,
      el: '.swiper-pagination',
     
     
      
    },
    breakpoints: {
        0: {
            slidesPerView: 1, 
        },
        390: {
            slidesPerView: 1,
            spaceBetween: 13,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 13,
        },
        1192: {
          slidesPerView: 2.5,
          spaceBetween: 13,
        },
        1512: {
          slidesPerView: 2.5,
          spaceBetween: 26,
        },
      },

      loop: true,
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    spaceBetween: 26,
    initialSlide: 1,
    centeredSlides: false,

    
    
})

function popupPop(){
    let popupLinks = document.querySelectorAll('.popup-link')
    let popupLinkClose = document.querySelectorAll('.popup__close')
    let body = document.querySelector('body')
    let lockPadding = document.querySelectorAll('.lock-padding')

    let unlock = true
    let timeOut = 800

    
    if (popupLinks.length > 0){
        popupLinks.forEach((link) =>{
            link.addEventListener('click', (e) =>{
                let popupName = link.getAttribute('href').replace('#', '')
                let currentName = document.getElementById(popupName)
                popupOpen(currentName)
                e.preventDefault()
                
               
            })
        })
    }

    if (popupLinkClose.length > 0){
        popupLinkClose.forEach((clos) =>{
            clos.addEventListener('click', (e) =>{
                popupClose(clos.closest('.popup'))
                e.preventDefault()
            })
        })
    }


    function popupOpen(currentName){
        
        if (currentName && unlock){
            let popupActive = document.querySelector('.popup.open')

            if (popupActive){
                popupClose(popupActive, false)
                
            } else{
                bodyLock()
            }

            currentName.classList.add('open')
            currentName.addEventListener('click', (e) =>{
                if (!e.target.closest('.popup__content')){
                    popupClose(e.target.closest('.popup'))
                }
            })

        }

        
    }
    function popupClose(popupActive, double = true){
        if (unlock){
            popupActive.classList.remove('open')
            if (double){
                bodyUnLock()
            }
        }
    }
    function bodyLock (){
        let lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
        

        if (lockPadding.length > 0){
            lockPadding.forEach((lock) =>{
                lock.computedStyleMap.paddingRight = lockPaddingValue

            })
        }
            body.style.paddingRight = lockPaddingValue
            body.classList.add('lock')

            unlock = false
            setTimeout(function (){
                unlock = true
            }, timeOut)
        
    }
    function bodyUnLock(){
        setTimeout(function () {
            if (lockPadding.length > 0){
                lockPadding.forEach((lock) =>{
                    lock.style.paddingRight = '0'
    
                })
            }
                body.style.paddingRight = '0'
                body.classList.remove('lock')
    
        }, timeOut)

        unlock = false
        setTimeout(function () {
            unlock = true
        }, timeOut)
    }
}
popupPop()

// function cursorGsap(){

//     let cursor = document.querySelector('.cursor')
//     let aura = document.querySelector('.aura')
//     let links = document.querySelectorAll('a')
//     let cards = document.querySelectorAll('.cards')

//     let mouseX = 0
//     let mouseY = 0
//     let posX = 0
//     let posY = 0

//     cards.forEach((card) =>{
//         card.addEventListener('mouseover', (e) =>{
//             cursor.classList.add('grap')
//             aura.classList.add('grap')
//         })
//         card.addEventListener('mouseout', (e) =>{
//             cursor.classList.remove('grap')
//             aura.classList.remove('grap')
//         })
//     })
//     links.forEach((link) =>{
//         link.addEventListener('mouseover', (e) =>{
//             cursor.classList.add('active')
//             aura.classList.add('active')
//         })
//         link.addEventListener('mouseout', (e) =>{
//             cursor.classList.remove('active')
//             aura.classList.remove('active')
//         })
//     })

//     function mouseCord(e){
//         mouseX = e.pageX
//         mouseY = e.pageY

//     }

//     gsap.to({}, .01, {
//         repeat: -1,
//         onRepeat: () =>{

//             posX += (mouseX - posX) / 4
//             posY += (mouseY - posY) / 4

//             gsap.set(cursor, {
//                 css: {
//                     left: mouseX,
//                     top: mouseY,
//                 }
//             })
//             gsap.set(aura, {
//                 css: {
//                     left: posX - 24,
//                     top: posY - 24,
//                 }
//             })

//         }
//     })
//     const body = document.querySelector('body')
//     cx = window.innerWidth / 2
//     cy = window.innerHeight / 2
//     body.addEventListener('mousemove', (e) =>{
//         clientX = e.pageX
//         clientY = e.pageY

//         reqest = requestAnimationFrame(updateMe)

//         mouseCord(e)
//         cursor.classList.remove('hidden')
//         aura.classList.remove('hidden')
//     })
//     function updateMe(){

//         dx = clientX - cx
//         dy = clientY - cy
//         tiltX = dy / cy
//         tiltY = dx / cx
//         radius = Math.sqrt(Math.pow(tiltX, 2) + Math.pow(tiltY, 2))
//         degree = radius * 12
        
//         gsap.to('', 1, {transform: `rotate3d(${tiltX}, ${tiltY}, 0, ${degree}deg)`})

//     }
//     body.addEventListener('mouseout', (e) =>{
//         cursor.classList.add('hidden')
//         aura.classList.add('hidden')
//     })
// }
// cursorGsap()
