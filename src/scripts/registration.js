// Иницилизация экземпляра класса USER c использованием PROXY для логирoвание действий
const user = new Proxy(new User("Alex", 342, new Map(), new Set(), "", 0 , "", null, "Здесь должно быть описание..", ), {
    set(target, prop, value, ) {
        console.log(`У обьекта ${target._name} вы изменили свойство ${prop} на ${value}`)
        target[prop] = value
      return true
    },
    get(target, prop) {

        return target[prop]
    }
})
function startRegistration() {
    let name  = ""
    let password = ""
const registrationWindows = document.querySelectorAll(".registrationWindow__inner")
const windowR = document.querySelector(".registrationWindow")
const registrationBtn = document.querySelector(".registrationWindow__buttonRegistration")
const autorizationBtn = document.querySelector(".registrationWindow__buttonWelcom")
const inputNameR = document.querySelector(".registrationWindow__inputNameR")
const inputPasswordR = document.querySelector(".registrationWindow__inputPasswordR")
const inputNameA = document.querySelector(".registrationWindow__inputNameA")
const inputPasswordA = document.querySelector(".registrationWindow__inputPasswordA")
const linkA = document.querySelector(".registrationWindow__linkA")
const linkR = document.querySelector(".registrationWindow__linkR")
const header = document.querySelector(".header")
const btnRegistration = document.querySelector(".registrationWindow__buttonRegistration")
const btnAutorization = document.querySelector(".registrationWindow__buttonWelcom")
const main = document.querySelector(".workWindow")
const footer = document.querySelector(".footer")
const passwordInfo = document.querySelector(".registrationWindow__infoPassword")
const nameInfo = document.querySelector(".registrationWindow__infoName")

main.style.filter = "blur(5px)"
header.style.filter = "blur(5px)"
footer.style.filter = "blur(5px)"
registrationWindows[1].style.display = "flex" 
registrationWindows[0].style.display = "none"
linkA.addEventListener("click", function(event) {
registrationWindows[1].style.display = "flex" 
registrationWindows[0].style.display = "none"
})
linkR.addEventListener("click", function(event) {
    registrationWindows[0].style.display = "flex" 
    registrationWindows[1].style.display = "none"
    
    })
    // Проверка на валидность никнейма
    inputNameR.addEventListener("input", function(event) {
       // Проверка на то что ник должен содержать миниимум 10 букв, 1 заглавную букву английскую и 1 цифру
        const regExp = /^(?=.*\w{10,25})(?=.*[A-Z]{1,5})(?=.*\d{1,10}).\w{10,25}$/g
        let value = event.target.value
        if(value.match(regExp)) {
            inputNameR.style.border = "3px dashed green"
            user._name = value 
            
        } else {
        
            inputNameR.style.border = "3px solid red"
        }
    })
    // Проверка на то что пароль должен содержать минимум 10 символов и одну букву и одну цифру
    inputPasswordR.addEventListener("input", function(event) {
        const regExp = /^(?=.*\w[A-Za-z]{1,})(?=.*\d{3,10}).\w{10,30}$/g
        let value = event.target.value
        if(value.match(regExp)) {
            inputPasswordR.style.border = "3px dashed green"
            user._password = value
            
        } else {
            inputPasswordR.style.border = "3px solid red"
        }
    })
    inputNameA.addEventListener("input", function(event) {
        let value = event.target.value
        name = value
    })
    inputPasswordA.addEventListener("input", function(event) {
        let value = event.target.value
        password = value
    })
    nameInfo.addEventListener("click", function(event) {
        const divR = document.createElement("div")
        divR.style.position = "absolute"
        divR.style.top = "210px"
        divR.style.left = "180px"
        divR.style.width = "60%"
        divR.style.height = "10%"
        divR.style.background = "black"
        divR.style.color = "white"
        divR.style.opacity = "0.7"
        divR.style.borderRadius = "5px"
        divR.style.transition = "opacity 2s ease"
        const textInfo = document.createElement("p")
        textInfo.style.fontSize = "11px"
        textInfo.style.lineHeight = "10px"
        textInfo.textContent = "Ваш никнейм должен содержать ,1 заглавную букву, а также 1 цифру. Никнейм должен быть в длину минимум 10 символов "
        divR.appendChild(textInfo)
        windowR.appendChild(divR)
        setTimeout(() => {
            divR.style.opacity = "0"
            setTimeout(() => {
                divR.remove()
            },1000)
        }, 5000)
    })
    passwordInfo.addEventListener("click", function(event) {
        const divR = document.createElement("div")
        divR.style.position = "absolute"
        divR.style.top = "290px"
        divR.style.left = "180px"
        divR.style.width = "60%"
        divR.style.height = "10%"
        divR.style.background = "black"
        divR.style.color = "white"
        divR.style.opacity = "0.7"
        divR.style.borderRadius = "5px"
        divR.style.transition = "opacity 2s ease"
        const textInfo = document.createElement("p")
        textInfo.style.fontSize = "11px"
        textInfo.style.lineHeight = "10px"
        textInfo.textContent = "Ваш пароль должен иметь хотя-бы одну букву любого регистра, а также от 3-10 цифр. Необходимая длина пароля: 10+ символов "
        divR.appendChild(textInfo)
        windowR.appendChild(divR)
        setTimeout(() => {
            divR.style.opacity = "0"
            setTimeout(() => {
                divR.remove()
            },1000)
        }, 5000)
    })
btnRegistration.addEventListener("click", function(event) {
    user.generateRandomId()
    user.setDateRegistration()
    linkR.click()
 
        user.numberOfGeneratedPhoto = user.numberOfGeneratedPhoto

        
      
  
    
 
   
    
    realTimeDataBase.post("POST", `${realTimeDataBase.url}users.json`, user).then((data) => console.log(data)).catch((error) => console.log(error))
    
})
btnAutorization.addEventListener("click", function(event) {

    realTimeDataBase.get("GET",`${realTimeDataBase.url}users.json`).then((data) =>  { 
        console.log(data)
        let digits = false
        for(let [key, value] of Object.entries(data)) {
            console.log(key, value)
         if(value._name === name && value._password === password) {
            digits = true
            const profile = value
            console.log(key + "ERG")
            if(digits) {
                console.log("проверка пройдена")
                windowR.style.display = "none"
                main.style.filter = "blur(0px)"
                header.style.filter = "blur(0px)"
                footer.style.filter = "blur(0px)"
console.log(profile.generatedPhoto)
                user.parseObject(profile.generatedPhoto)
              
                user._name = profile._name
                user._dateRegistration = profile._dateRegistration
                user._password = profile._password
                user.secretId = key
                user.description = profile.description
                user.numberOfGeneratedPhoto = profile.numberOfGeneratedPhoto
                /*
                user.generatedPhoto = new Map(profile.generatedPhoto)
                user.mostUsedStyles = new Set(profile.mostUsedStyles)
                console.log(user.mostUsedStyles, user.generatedPhoto)
                */
            }
        } else {
            inputNameA.style.border = "3px solid red"
            inputPasswordA.style.border = "3px solid red"
        }
}
}).catch((error) => console.error(error))
})
}
 startRegistration()
