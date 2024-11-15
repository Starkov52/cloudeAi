
// Класс USER
class User {
    constructor(name, password, generatedPhoto,  mostUsedStyles, socialMedia, numberOfGeneratedPhoto, dateRegistration, imageProfile,  description, id = null, secretId) {
        this._name = name;
        this._password = password;
        this.generatedPhoto =  generatedPhoto ;
        this._id = id
        this.mostUsedStyles = mostUsedStyles;
        this.description = description;
        this.socialMedia = socialMedia;
        this.numberOfGeneratedPhoto = numberOfGeneratedPhoto;
        this._dateRegistration = dateRegistration;
        this._imageProfile = imageProfile;
        this.secretId = secretId
    }
    // Методы клaссa user
    setName(name) {
     this._name = name;
    }
    setPassword(password) {
        this._password = password
    }
    addGeneretePhoto(photo) {
        user.addNumberGeneretedPhoto()
        this.generatedPhoto.set(this.numberOfGeneratedPhoto, photo)
    }
   
    addMostUsedStyle(style) {
        this.mostUsedStyles.add(style)
    }
    setDesription(description) {
        this._description = description
    }
     setSocialMedia(instagramm) {
        this.socialMedia = this.socialMedia
     }
     addNumberGeneretedPhoto() {
        this.numberOfGeneratedPhoto += 1
     }
     setDateRegistration() {
        this._dateRegistration = new Date
     }
     setImageProfile(image) {
        this._imageProfile = image
     }
     generateRandomId() {
        let id = ""
        const alphabet = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
          ];
         function random() {
         return Math.floor(Math.random() * 10)
         }
        for(let i = 0; i < 10; i++) {
           id += alphabet[random()]
           if(i === 9) {
            user._id = id
           }
        }
        
     }
     // Подготовка свойства generetedPhoto(MAP) к отправки в БД(превращение его в обычный обьект)
     createObject(objectPhoto) {
        for(let [key, value] of user.generatedPhoto.entries()) { 
            objectPhoto[key] = value  
        }
        user.generatedPhoto = objectPhoto
     }
     // Извлечение из ответа БД generetedPhoto и деструктуризция его в MAP
     parseObject(profile) {
        user.generatedPhoto = new Map()
        if(profile) {
        for (let [key, value] of Object.entries(profile)) {
            if(value !== null) {
            this.generatedPhoto.set(key + 1, value);  
            console.log(value);  
            }
        }
        }
     }
    
     
}

// Система сохранения данных при выходе с сайта(С помощью методов user превращает в обьект и затем отпрвляет в БД, следом преврщает в map, дабы пользовтель мог дальше генерировть изображениe)
     function exitSite(event) {
        
            const objectPhoto = {}
          
            user.createObject(objectPhoto)
        
        console.log(user.generatedPhoto)
         realTimeDataBase.post("PATCH", `${realTimeDataBase.url}users/${user.secretId}.json`, user)
         realTimeDataBase.get("GET",`${realTimeDataBase.url}users.json`).then((response) => {
            for(let [key, value] of Object.entries(response)) {
                if(key === user.secretId) {
                   
                    console.log(value)
                    user.parseObject(value.generatedPhoto)
                }
            }
         })
    };
    

// Класс карты 
class photoCard {
      url = "https://telegrambotfishcombat-default-rtdb.firebaseio.com/"
    constructor(image, like, description, userName, date, id) {
        this.image = image
        this.like = like 
        this.description = description
        this.userName = userName
        this.date = date
        this.id = id
    }
    like() {
        this.like += 1;
    }
    // Метод который отправляет карту в БД
    sendCard(card) {
        realTimeDataBase.post("POST", `${realTimeDataBase.url}usersCards.json`, card).then((data) => console.log(data)).catch((error) => console.log(error))
    }
}
const card = new photoCard()









    