// синхронизаация данных с БД при открытиее меню аккаунта
const iframe = document.querySelector(".aside__profile")


 function updateData() {
    const object = {
    description: user.description,
    dateRegistration: user._dateRegistration,
    socialMedia: user.socialMedia,
    numberOfGeneratedPhoto: user.numberOfGeneratedPhoto,
    nameUser: user._name,
    generatedPhoto: user.generatedPhoto
    }
    iframe.contentWindow.postMessage(object, "*")
 }