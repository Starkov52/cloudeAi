// Инициализация всех активных обьектов
const accountInformationP = document.querySelector('.account__information');
const accountNameP = document.querySelector('.account__name');
const accountImgP = document.querySelector('.account__img');
const accountLetterP = document.querySelector('.account__letter');
const accountContentP = document.querySelector('.account__content');
const accountInfoListP = document.querySelector('.account__infoList');
const accountItemDescriptionP = document.querySelector('.account__itemDescription');
const accountDescriptionP = document.querySelector('.account__description');
const accountItemArrivalSiteP = document.querySelector('.account__arrivalSite');
const accountItemPublicPhotoP = document.querySelector('.account__publicPhoto');
const accountQuantityPhotoP = document.querySelector('.account__quantityPhoto');
const accountSocialMediaP = document.querySelector('.account__socialMedia');
const accountLinkP = document.querySelector('.account__link');
const accountInstaImgP = document.querySelector('.account__instaImg');
const accountSectionP = document.querySelector('.account');
const public = document.querySelector(".header__galleryImgPublic")
const cardsList = document.querySelector(".publicImages")
let isAdmin = false
window.addEventListener("load", function(event) {
   
    const key = localStorage.getItem(5)
    if(JSON.parse(key) === "310825") {
        console.log("Ты администратор")
        isAdmin = true
    }
    
})
// Открытие доски публикованных фото пользователей
let item
public.addEventListener("click", function(event) {
   publicWindow.classList.add("active")
   // Появление окна предупреждения о тонкостях работы изобржений
   function sendWarningNotification() {
    const notification = document.querySelector(".publicImages__warningNotification")
     setTimeout(() => {
       notification.style.opacity = "0"
       setTimeout(() => {
       notification.remove()
    },3000)
     }, 5000)
       }
    sendWarningNotification()
    // Функция для получения в обьект всех созданных пользователями карточек 
   function getCard(url, method, body) {
    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Application": "application/json"
        },
        method: method,
        body: JSON.stringify(body),
    }).then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            console.error(error)
        }
    })
   }
   // Изображение всех карточек в модальном окне 
   getCard("https://telegrambotfishcombat-default-rtdb.firebaseio.com/usersCards.json", "GET").then((response) => {
   
       const ul = document.createElement("ul")
       ul.classList.add("publicImages__inner")
       if(!isAdmin) {
for(let [key,value] of Object.entries(response)) {
    console.log(value)
    item = document.createElement("li")
    item.classList.add("publicImages__item")
    const imageCard = document.createElement("img")
    imageCard.classList.add("publicImages__image")
    imageCard.src = value.image
    const div = document.createElement("div")
    div.classList.add("profile")
    const iconProfile = document.createElement("div")
    iconProfile.setAttribute("id", value.id)
    iconProfile.classList.add("profile__icon")
    const letterName = document.createElement("p")
    letterName.classList.add("profile__letter")
    letterName.textContent = value.userName.slice(0, 1)
    iconProfile.appendChild(letterName)
    const autorName = document.createElement("p")
    autorName.classList.add("profile__nickName")
    autorName.textContent = value.userName
    const cardDate = document.createElement("p")
    cardDate.classList.add("profile__date")
    cardDate.textContent = value.date.slice(0, 10)
    const cardPrompt = document.createElement("p")
    cardPrompt.classList.add("publicImages__prompt")
    cardPrompt.textContent = value.description
    console.log(value.description)
    const likeBtn = document.createElement("button")
    likeBtn.classList.add("publicImages__like")
    const likeImage = document.createElement("img")
    likeImage.classList.add("publicImages__likeImg")
    likeImage.src = "/img/favorite_15049585.png"
    const quantity = document.createElement("p")
    quantity.classList.add(".publicImages__digitsOfLike")
    quantity.textContent = value.like
    div.appendChild(autorName)
    div.appendChild(cardDate)
    div.appendChild(iconProfile)
    likeBtn.appendChild(likeImage)
    likeBtn.appendChild(quantity)
    item.appendChild(imageCard)
    item.appendChild(div)
    item.appendChild(cardPrompt)
    item.appendChild(likeBtn)
    ul.prepend(item)
    cardsList.appendChild(ul)
    
    // Обработчик события на иконку профиля для перехода в профиль
    iconProfile.addEventListener("click", function(event) {
        // Инициализация всех обьектов профиля
        accountSectionP.classList.add("active")
        const targetCardId = iconProfile.getAttribute("id")
        console.log(targetCardId + "WWWWWWWWWWWW")
        getCard("https://telegrambotfishcombat-default-rtdb.firebaseio.com/users.json", "GET").then((response) => {
            
            for(let [key, value] of Object.entries(response)) {
                console.log(key, targetCardId)
                if (key === targetCardId) {
                    // Обновляем информацию профиля
                    accountNameP.textContent = value._name;
                    accountDescriptionP.textContent = value.description;
                    accountLetterP.textContent = value._name.slice(0, 1);
                    accountLinkP.href = value.socialMedia
                    accountQuantityPhotoP.textContent = value.numberOfGeneratedPhoto
                    accountItemArrivalSiteP.textContent = `На сайте с ${value._dateRegistration.slice(0, 10)}`

                
                }
            }
        })


    })
    // Инициализация кнопки закрытия, а также установление на эту кнопку обработчика события
    const closeBtn = document.querySelector(".publicImages__closeIcon")
    const closeProfileBtn = document.querySelector(".publicImages__closeIconP")
    closeBtn.addEventListener("click", function(event) {
        publicWindow.classList.remove("active")
        ul.remove()
        accountSectionP.classList.remove("active")
       
    })
    // Обработчик события на кнопку закрытия,при нажатии модльнео окно карточек зкрывается,с последующими действиями в ней
    closeProfileBtn.addEventListener("click", function(event) {
        publicWindow.classList.remove("active")
        ul.remove()
        accountSectionP.classList.remove("active")
       
    })
    // При нажатии на пустую область окно с карточками закрывается
    window.addEventListener("click", function(event) {
        if(event.target.closest(".publicImages__inner") && !event.target.closest(".account") && !event.target.closest(".publicImages__item") && !event.target.closest(".soloPhoto")) {
            accountSectionP.classList.remove("active")
        }
    })
    // Обработчик событий на кнопку лайка
     let like = false
     likeBtn.addEventListener("click", function(event) {
            if(!like) {
            
            like = true
            likeBtn.style.backgroundColor = "pink"
            quantity.textContent = value.like + 1
            const card = value
            card.like += 1
            getCard(`https://telegrambotfishcombat-default-rtdb.firebaseio.com/usersCards/${key}.json`, "PATCH", card )
            }
        })
     
       } 
       } else if(isAdmin) {
        console.log("ADMIN ACCOUNT")
        for(let [key,value] of Object.entries(response)) {
            console.log(value)
            item = document.createElement("li")
            item.classList.add("publicImages__item")
            item.style.position = "relative"
            const imageCard = document.createElement("img")
            imageCard.classList.add("publicImages__image")
            imageCard.src = value.image
            const div = document.createElement("div")
            div.classList.add("profile")
            const iconProfile = document.createElement("div")
            iconProfile.setAttribute("id", value.id)
            item.setAttribute("card", key)
            iconProfile.classList.add("profile__icon")
            const letterName = document.createElement("p")
            letterName.classList.add("profile__letter")
            letterName.textContent = value.userName.slice(0, 1)
            iconProfile.appendChild(letterName)
            const autorName = document.createElement("p")
            autorName.classList.add("profile__nickName")
            autorName.textContent = value.userName
            const cardDate = document.createElement("p")
            cardDate.classList.add("profile__date")
            cardDate.textContent = value.date.slice(0, 10)
            const cardPrompt = document.createElement("p")
            cardPrompt.classList.add("publicImages__prompt")
            cardPrompt.textContent = value.description
            console.log(value.description)
            const likeBtn = document.createElement("button")
            likeBtn.classList.add("publicImages__like")
            const likeImage = document.createElement("img")
            likeImage.classList.add("publicImages__likeImg")
            likeImage.src = "/img/favorite_15049585.png"
            const quantity = document.createElement("p")
            quantity.classList.add(".publicImages__digitsOfLike")
            const deleteIcon = document.createElement("img")
            deleteIcon.src = "/img/free-icon-trash-bin-5510213.png"
            deleteIcon.style.position = "absolute"
            deleteIcon.style.top = "210px"
            deleteIcon.style.left = "400px"
            deleteIcon.style.width = "35px"
            deleteIcon.style.height = "35px"
            quantity.textContent = value.like
            div.appendChild(autorName)
            div.appendChild(cardDate)
            div.appendChild(iconProfile)
            likeBtn.appendChild(likeImage)
            likeBtn.appendChild(quantity)
            item.appendChild(deleteIcon)
            item.appendChild(imageCard)
            item.appendChild(div)
            item.appendChild(cardPrompt)
            item.appendChild(likeBtn)
            ul.prepend(item)
            cardsList.appendChild(ul)
            //Обработчик событий на кнопку удалить карточку 
            deleteIcon.addEventListener("click", function(event) {
                const item = event.target.closest(".publicImages__item")
                const id = item.getAttribute("card")
                const notification = document.createElement("div")
                notification.classList.add("notificationD")
                const text = document.createElement("p")
                text.classList.add("notificationD__text")
                text.textContent = "Вы уверены что хотите удалить пост раз и навсегда?"
                const div = document.createElement("div")
                div.classList.add("notificationD__div")
                const button0 = document.createElement("button")
                button0.classList.add("notificationD__button0")
                button0.textContent = "Нет"
                const button1 = document.createElement("button")
                button1.classList.add("notificationD__button1")
                button1.textContent = "Да"
                const img = document.createElement("img")
                img.src = "/img/free-icon-warning-7368037.png"
                img.classList.add("notificationD__warningIcon")
                div.appendChild(button0)
                div.appendChild(button1)
                notification.appendChild(img)
                notification.appendChild(text)
                notification.appendChild(div)
                cardsList.appendChild(notification)
                button0.addEventListener("click", function(event) {
                    notification.remove()
                })
                button1.addEventListener("click", function(event) {
                   getCard(`https://telegrambotfishcombat-default-rtdb.firebaseio.com/usersCards/${id}.json`, "DELETE").then((response) => {
                    notification.remove()
                    console.log(response)
                   })
                })
                
            })
            // Обработчик события на иконку профиля для перехода в профиль
            iconProfile.addEventListener("click", function(event) {
                // Инициализация всех обьектов профиля
                accountSectionP.classList.add("active")
                const targetCardId = iconProfile.getAttribute("id")
                console.log(targetCardId + "WWWWWWWWWWWW")
                getCard("https://telegrambotfishcombat-default-rtdb.firebaseio.com/users.json", "GET").then((response) => {
                    
                    for(let [key, value] of Object.entries(response)) {
                        console.log(key, targetCardId)
                        if (key === targetCardId) {
                            // Обновляем информацию профиля
                            accountNameP.textContent = value._name;
                            accountDescriptionP.textContent = value.description;
                            accountLetterP.textContent = value._name.slice(0, 1);
                            accountLinkP.href = value.socialMedia
                            accountQuantityPhotoP.textContent = value.numberOfGeneratedPhoto
                            accountItemArrivalSiteP.textContent = `На сайте с ${value._dateRegistration.slice(0, 10)}`
        
                        
                        }
                    }
                })
        
        
            })
            // Инициализация кнопки закрытия, а также установление на эту кнопку обработчика события
            const closeBtn = document.querySelector(".publicImages__closeIcon")
            const closeProfileBtn = document.querySelector(".publicImages__closeIconP")
            closeBtn.addEventListener("click", function(event) {
                publicWindow.classList.remove("active")
                ul.remove()
                accountSectionP.classList.remove("active")
               
            })
            // Обработчик события на кнопку закрытия,при нажатии модльнео окно карточек зкрывается,с последующими действиями в ней
            closeProfileBtn.addEventListener("click", function(event) {
                publicWindow.classList.remove("active")
                ul.remove()
                accountSectionP.classList.remove("active")
               
            })
            // При нажатии на пустую область окно с карточками закрывается
            window.addEventListener("click", function(event) {
                if(event.target.closest(".publicImages__inner") && !event.target.closest(".account") && !event.target.closest(".publicImages__item") && !event.target.closest(".soloPhoto")) {
                    accountSectionP.classList.remove("active")
                }
            })
            // Обработчик событий на кнопку лайка
             let like = false
             likeBtn.addEventListener("click", function(event) {
                    if(!like) {
                    
                    like = true
                    likeBtn.style.backgroundColor = "pink"
                    quantity.textContent = value.like + 1
                    const card = value
                    card.like += 1
                    getCard(`https://telegrambotfishcombat-default-rtdb.firebaseio.com/usersCards/${key}.json`, "PATCH", card )
                    }
                })
             
               } 
       }
})

})