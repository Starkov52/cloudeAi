// Инициализация всех активных  обьектов
const cityImgObject = document.querySelector(".city")
const spaceImgObject = document.querySelector(".space")
const cityText = document.querySelector(".city__text")
const spaceText = document.querySelector(".space__text")
const bigImage = document.querySelector(".bigImage")
const publicWindow = document.querySelector(".publicImages")
const bigImageText = document.querySelector(".bigImage__text")
const headerRow = document.querySelector(".slider__headerRow")
const mainRow = document.querySelector(".slider__centerRow")
const bottomRow = document.querySelector(".slider__bottomRow")
const startBtn = document.querySelector(".startCreate__btn")
const main = document.querySelector("main")
const text = document.querySelector(".startCreate__title")
const footer = document.querySelector(".footer")
const header = document.querySelector(".header")
const body = document.querySelector("body")
const whiteWindow = document.querySelector(".whiteWindow")
const text1 = document.querySelector(".whiteWindow__text1")
const text2 = document.querySelector(".whiteWindow__text2")
const text3 = document.querySelector(".whiteWindow__text3")
const writeWindowBtn = document.querySelector(".whiteWindow__btn")
// Анимация картинк при заходе на сайт
window.addEventListener("load", function(event) {
    cityImgObject.style.transform = "translateX(100px)"
    this.setTimeout(()=> {
        cityText.style.opacity = "1"
    },2000)
    this.setTimeout(()=> {
    spaceImgObject.style.transform = "translateX(200px)"
    this.setTimeout(()=> {
        spaceText.style.opacity = "1"
    },2000)
},2000)
})
//Продолжение анимации только уже при скролле 
window.addEventListener("scroll", function(event) {
    
const scrollY = window.pageYOffset

if(scrollY >= 0) {
    bigImage.style.transform = "translateY(10px)"
    this.setTimeout(() =>{
        bigImageText.style.opacity = "1"
    }, 3000)
} 

})
const blackHole = document.createElement("div")
// Появление черной дыры при нажатии на кнопку начать
startBtn.addEventListener("click", function(event) {
    startBtn.style.background = `url("/img/broken-frosted-glass-realistic-icon.png") no-repeat center / cover`
    startBtn.style.opacity = "0"
    mainRow.style.animation = "sliderRight 1s linear infinite"
            bottomRow.style.animation = "sliderRight 1s linear infinite"
            headerRow.style.animation = "sliderRight 1s linear infinite"
    blackHole.style.width = "50px"
    blackHole.style.height = "50px"
    blackHole.style.backgroundColor = "black"
    blackHole.style.position = "absolute"
    blackHole.style.top = "2937px"
    blackHole.style.left = "929px"
    blackHole.style.borderRadius = "50%"
    blackHole.style.transition = "2s ease"
    blackHole.style.zIndex = "16"
    main.appendChild(blackHole)
    animatedBlackHole()
})
// Анимация черной дыры
function animatedBlackHole() {
   const blackHoleInterval = setInterval(() => {
        
        let currentWidth = parseFloat(blackHole.style.width);
        let currentHeight = parseFloat(blackHole.style.height);

       
        blackHole.style.width = `${currentWidth + currentWidth / 2}px`;
        blackHole.style.height = `${currentHeight + currentHeight / 2}px`;

    
        setTimeout(() => {
            currentWidth = parseFloat(blackHole.style.width);
            currentHeight = parseFloat(blackHole.style.height);
let top = parseFloat(blackHole.style.top)
let left = parseFloat(blackHole.style.left)
            blackHole.style.width = `${currentWidth - currentWidth / 4}px`;
            blackHole.style.height = `${currentHeight - currentHeight / 4}px`;
            blackHole.style.top = `${top - currentWidth / 12}px`
            blackHole.style.left = `${left - currentHeight / 12}px`
        }, 1500);
    }, 1000);
        setTimeout(()=> {
         text.style.transform = "skew(45deg) translateX(-10px) translateY(30px) scale(0.4)"
         setTimeout(()=> {
            text.remove()
            
            footer.style.transform = "skew(60deg) translateY(-100px) translateX(100px) scale(0.1)"
            setTimeout(()=> {
            header.style.transform  = "skew(70deg) translateY(300px) translateX(-750px) scale(0.2) rotate(145deg)"
            setTimeout(()=> {
            header.remove()
            footer.remove()
            setTimeout(()=> {
                clearInterval(blackHoleInterval)
                main.remove()
                body.style.background = "none"
                body.style.backgroundColor = "black"
            setTimeout(()=> {
                let textElement = document.createElement("p")
                textElement.textContent = "Больше ничего нету, ведь.."
                textElement.style.position = "absolute"
                textElement.style.top = "400px"
                textElement.style.left = "800px"
                textElement.style.color = "white"
                textElement.style.fontSize = "30px"
                textElement.style.textShadow = "2px 2px 10px green" 
                body.appendChild(textElement)
setTimeout(()=> {
  textElement.remove()
        body.style.backgroundColor = "white"
        whiteWindow.style.display = "grid"
    setTimeout(()=> {
       
        text1.style.transform = "translateX(100px)"
        setTimeout(()=> {
         text2.style.transform = "translateX(-50px)"
        },2000)
        setTimeout(()=> {
            text3.style.transform = "translateX(100px)"
            writeWindowBtn.style.transform = "translateX(-100px)"
           },2000)
    },2000)

             
                
}, 4000)
            },4000)
            },7000)
            }, 12000)
            },3000)
         },5000)
        },4000)
    
}
// Иницализация всех активных обьектов
const themeBtn = document.querySelector(".header__darhTheme")
// Система переключение темы сайта
let digitsCheckThem = 2
themeBtn.addEventListener("click", function(event) {
    if(digitsCheckThem % 2 === 0) {
    body.style.background = `url("../img/a7395e40-2054-4147-8314-728e940a8063.jpg") no-repeat center / cover`
    themeBtn.src = "/img/free-icon-sun-1857296.png"
    digitsCheckThem += 1
    } else if(digitsCheckThem % 2 !== 0) {
    body.style.background = `url("../img/3d.jpg") no-repeat center / cover`
    themeBtn.src = "/img/free-icon-moon-phase-9176573 1.png"
    digitsCheckThem += 1
    }
})
// Открытие профиля
const aside = document.querySelector(".aside")
const profileBtn = document.querySelector(".header__profile")


// Закрытие всех окон
window.addEventListener("click", function(event) {
const header = event.target.closest(".header__inner")
const publicImage = event.target.closest(".publicImage")
if(!header && !publicImage && !item) {
   aside.style.transform = "translateX(-550px)"
   publicWindow.classList.remove("active")
}
})
// Открытие галереи профиля
const iframe = document.querySelector(".aside__profile")
const openGalleryBtn = document.querySelector(".header__openGallery")


