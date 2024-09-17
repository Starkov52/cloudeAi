// Иницилизация всех активных обьектов
const leaveButton = document.querySelector('.header__leaveBtn');
const menuButton = document.querySelector('.header__menuBtn');
const galleryButton = document.querySelector('.header__galleryBtn');
const backButton = document.querySelector('.header__backBtn');
const forwardButton = document.querySelector('.header__forwardBtn');
const profileButton = document.querySelector('.header__profileBtn');
const openSelectButton = document.querySelector('.header__openSelectBtn');
const generateButton = document.querySelector('.workWindow__generateBtn');
const aside = document.querySelector(".aside")
const style = document.querySelector(".styles")
const profileInfo = document.querySelector(".profile__infoList")
const profileGallery = document.querySelector(".profile__pictures")
const iframeInfo = document.querySelector(".aside__profile")
const selectSize = document.querySelector(".header__select")
const pormptInput = document.querySelector(".workWindow__input")
const stylesPlace = document.querySelector(".styles__menu")
const windowStyle = document.querySelector(".styles__image")
const titleStyle = document.querySelector(".styles__enabledStyle")
const UlUsedStyle = document.querySelector(".styles__mostUsedStyles")
const sendBtn = document.querySelector(".workWindow__generateBtn")
const footerUl  = document.querySelector(".footer__inner")
const readyPictureWindow = document.querySelector(".picture")
const picture = document.querySelector(".workWindow__picture")
const pcContainer = document.querySelector(".workWindow__window")
const readyImage = document.querySelector(".picture__ready")
const readyPrompt = document.querySelector(".picture__prompt")
const readyDowlandLink = document.querySelector(".picture__textBtn")
const leaveBtn = document.querySelector(".header__leaveImg")
const selectThemeBtn = document.querySelector(".header__darkThemeIcon")
const exitPicture = document.querySelector(".picture__exit")
// Выход из окн сгенерированной картинки 
exitPicture.addEventListener("click", function(event) {
    readyPictureWindow.classList.remove("active")
})
// Выход на презентационную часть проекта
leaveBtn.addEventListener("click", function(event) {
    const link = document.createElement("a")
    link.href = "/index.html"
    link.click()
    exitSite
})
// Логика движения окон
profileButton.addEventListener("click", function(event) {
aside.style.transform = "translateX(0px)"
iframeInfo.src = "/profile.html"
const img = document.createElement("img")
img.src = "/img/free-icon-close-4318452.png"
img.style.width = "32px"
img.style.height = "232x"
img.style.position = "absolute"
img.style.top = "20px"
img.style.left = "50px"
aside.appendChild(img)
img.addEventListener("click", function(event) {
    aside.style.transform = "translateX(-550px)"
})
setTimeout(() => {
    updateData()

},50)

})
// Открытие меню стилей а также инициализаация ранее использованных стилей

menuButton.addEventListener("click", function(event) {
    style.style.transform = "translateX(0px)"
    const img = document.createElement("img")
        img.src = "/img/free-icon-close-4318452.png"
        img.style.width = "32px"
        img.style.height = "232x"
        img.style.position = "absolute"
        img.style.top = "20px"
        img.style.left = "30px"
        style.appendChild(img)
        img.addEventListener("click", function(event) {
            style.style.transform = "translateX(1050px)"
        })
    for(let key of user.mostUsedStyles) {
        let obj = JSON.parse(key)
        const listItem = document.createElement("li")
        const listText = document.createElement("p")
        const listImg = document.createElement("img")
        listImg.src = obj.srcImage
        listImg.classList.add("styles__style")
        listText.classList.add("styles__nameUsedStyle")
        listText.textContent = obj.styleTitle
        listItem.setAttribute("valueS", obj.style)
        listItem.appendChild(listImg)
        listItem.appendChild(listText)
        UlUsedStyle.appendChild(listItem)
        window.addEventListener("click", function(event){
            const asid = event.target.closest(".aside")
            const menuStyles = event.target.closest(".styles")
            const headerMenu = event.target.closest(".header")
            if(!asid && !menuStyles && !headerMenu) {
            listItem.remove()
            
            }
        })
       }
    })
    galleryButton.addEventListener("click", function(event) {
        iframeInfo.src = "/profileGallery.html"
        aside.style.transform = "translateX(0px)"
        iframeInfo.style.height = "100%"
        const img = document.createElement("img")
        img.src = "/img/free-icon-close-4318452.png"
        img.style.width = "32px"
        img.style.height = "232x"
        img.style.position = "absolute"
        img.style.top = "20px"
        img.style.left = "50px"
        aside.appendChild(img)
        img.addEventListener("click", function(event) {
            aside.style.transform = "translateX(-550px)"
        })
        setTimeout(() => {
            updateData()
        },100)
    })
    
    // Закрытие всех окон
    
    window.addEventListener("click", function(event){
        const asid = event.target.closest(".aside")
        const menuStyles = event.target.closest(".styles")
        const headerMenu = event.target.closest(".header")
        const readyImageWindow = event.target.closest(".picture")
        const pc = event.target.closest(".workWindow__window")
        if(!asid && !menuStyles && !headerMenu && !readyImageWindow && !pc) {
        aside.style.transform = "translateX(-550px)"
        style.style.transform = "translateX(550px)"
        readyPictureWindow.classList.remove("active")
       
        }
    })
    
    // Обьект для позже сгенерированного изображения
    const imageOptions = {
        size: "square",
        prompt: null,
        style: null
    }
    // Выбор размера изображения
    selectSize.addEventListener("change", function(event) {
        imageOptions.size = event.target.value
    })
    // Инициализация промпта
     pormptInput.addEventListener("blur", function(event) {
        imageOptions.prompt = event.target.value
     })
     // Выбор стиля
 stylesPlace.addEventListener("click", function(event) {
    const target = event.target.closest(".styles__menuStyleImg")
    if(target) {
    const style = target.getAttribute("valueS")
    const srcImage = target.src
    const styleTitle = target.name
    const usedStyle = { style, srcImage, styleTitle }
    user.addMostUsedStyle(JSON.stringify(usedStyle))
    titleStyle.textContent = styleTitle
    imageOptions.style = style
    windowStyle.src = srcImage
    
    }
 })
 // Слушатель событий кнпоки отправки промпт для генерции картинки
 sendBtn.addEventListener("click", function(event) {
    if(imageOptions.prompt !== null) {
        picture.style.display = "none"
        const video = document.createElement("video")
        video.src = "/img/trim-video-online.com_1725480637_video-gde-na-kompiut_5bBylmZh.mp4"
        video.style.height = "215px"
        video.style.width = "250px"
        video.style.alignSelf = "start"
        pcContainer.appendChild(video)
        video.play()
        video.muted = "true"
        pormptInput.style.backgroundColor = "#fcfafa"
        setTimeout(()=> {
        api.sendRequest("POST", api.apiUrl, imageOptions.size, imageOptions.prompt, imageOptions.style)
    .then(data => { 
        const src = data.images[0]
        console.log(data)
        picture.style.display = "block"
        video.remove()
        picture.src = src
        const photoPlenka = document.createElement("li")
        photoPlenka.style.background = `url(${src}) no-repeat center / cover`
        photoPlenka.classList.add("footer__item")
        footerUl.appendChild(photoPlenka)
        const scale = document.createElement("img")
        scale.src = "/img/free-icon-resize-8121828 1.png"
        scale.style.position = "absolute"
        scale.style.left = "320px"
        user.addGeneretePhoto([src, new Date])
        pcContainer.appendChild(scale)
        pcContainer.addEventListener("click", function(event) {
        readyPictureWindow.classList.add("active")
        readyImage.src = src

        if(imageOptions.size === "square_hd") {
            readyImage.style.width = "300px"
        }
        readyDowlandLink.href = src
        readyPrompt.textContent = imageOptions.prompt
        const card = new photoCard(src, 0, imageOptions.prompt, user._name, new Date, user.secretId)
        card.sendCard(card)
        
        })
    }
).catch(error => console.error(error));


}, 4000)
} else {
    pormptInput.style.backgroundColor = "#b04343"
    
}
})
// Система переключения на светлую тему а также темную
 let darkTheme = true
 selectThemeBtn.addEventListener("click", function(event) {
     const themeImg = document.querySelector(".header__darkThemeIcon")
     const body = document.querySelector("body")
     const header = document.querySelector(".header__nav")
     if(darkTheme) {
    themeImg.src = "/img/free-icon-moon-phase-9176573 (1).png"
    body.style.background = "url(/img/4853433.jpg) no-repeat center / cover"
    header.style.background = "grey"
    darkTheme = false
   } else {
     themeImg.src = "/img/free-icon-sun-6421095.png"
     body.style.background = "url(/img/dark.png) no-repeat center / cover"
     darkTheme = true
     header.style.backgroundColor = "white"
   }
 })

 /*
 window.addEventListener("message", (event) => {
    if (event.data.type === "domElement") {
        const iframe = document.querySelector(".profile__iframe"); 
        if (iframe && iframe.contentWindow) {
            const element = iframe.contentWindow.document.getElementById(event.data.elementId);
            if (element) {
                
                element.style.color = "red"; 
            }
        }
    }
});
*/
window.addEventListener("message", function(event) {
    const message = event.data
    console.log(message)
    if(message.startsWith("https")) {
    user.socialMedia = message
    } else {
        user.description = message
    }
    
})
window.addEventListener('beforeunload', function(event) {
    exitSite()
    event.preventDefault()
    event.returnValue = ""
})

 
