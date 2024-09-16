window.addEventListener("message", function(event) {
    const nameUser = document.querySelector(".profile__name")
    const description = document.querySelector(".profile__description")
    const numberOfVisit = document.querySelector(".profile__arrivalSite")
    const digitsGenerate = document.querySelector(".profile__quantityPhoto")
    const instagramm = document.querySelector(".profile__link")
    const nameLetter = document.querySelector(".profile__letter")
    nameLetter.textContent = event.data.nameUser.slice(0, 1)
    nameUser.textContent = event.data.nameUser
    description.textContent = event.data.description
    numberOfVisit.textContent =  "На сайте с " + event.data.dateRegistration.toString().slice(0, 10)
    digitsGenerate.textContent = event.data.numberOfGeneratedPhoto
    instagramm.href = event.data.socialMedia
   

})
// Способ изменения данных аккаунта
const mainObject = document.querySelector(".profile__content")
const reDescriptionBtn = document.querySelector(".profile__redactorDescription")
const reMediaLinkBtn = document.querySelector(".profile__redactorMediaLink")
const description = document.querySelector(".profile__description")
const itemDescription = document.querySelector(".profile__itemDescription")
const itemMedia = document.querySelector(".profile__socialMedia")
const mediaImage = document.querySelector(".profile__link")

reDescriptionBtn.addEventListener("click", function(event) {
const input = document.createElement("input")
const value = description.textContent
description.style.display = "none"
input.value = value
input.classList.add("description")
input.style.width = "350px"
input.style.height = "45px"
input.style.borderRadius = "5px"
input.style.border = "none"
input.style.backgroundColor = "gray"
itemDescription.appendChild(input)
reDescriptionBtn.style.display = "none"

})

reMediaLinkBtn.addEventListener("click", function(event) {
const input = document.createElement("input")
const value = mediaImage.href
mediaImage.style.display = "none"
input.value = value
input.classList.add("media")
input.style.width = "450px"
input.style.height = "30px"
input.style.borderRadius = "5px"
input.style.border = "none"
input.style.backgroundColor = "gray"
itemMedia.appendChild(input)
reMediaLinkBtn.style.display = "none"
})
mainObject.addEventListener("click", function(event) {
const descriptionObject = document.querySelector(".media") 
const mediaObject = document.querySelector(".description")
const dBtn = event.target.closest(".profile__redactorDescription")
const mediaBtn = event.target.closest(".profile__redactorMediaLink")
const descr = document.querySelector(".description")
const media = document.querySelector(".media")

if (!event.target.closest(".description") && !event.target.closest(".media") && !dBtn && !mediaBtn) {
        if (mediaObject) {
  
            description.textContent = description.value;
            description.style.display = "flex";
            reDescriptionBtn.style.display = "block";
            isEditingDescription = false;
            description.textContent = mediaObject.value
            const promptDescription = description.textContent
            window.parent.postMessage(promptDescription, "*")
            mediaObject.remove();
        }
        
        if (descriptionObject) {
          
            mediaImage.href = descriptionObject.value;
            const mediaValue = descriptionObject.value
            mediaImage.style.display = "block";
            reMediaLinkBtn.style.display = "block";
            isEditingMedia = false;
            window.parent.postMessage(mediaValue, "*")
            descriptionObject.remove();
        }
    }
})