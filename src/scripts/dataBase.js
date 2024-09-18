// Отправка и получение данных с помощью базы данных FIREBASE 
class dataBase {
    url = "https://telegrambotfishcombat-default-rtdb.firebaseio.com/"
// Метод для отправки обьекта в БД
    post(method, url , body) {
        return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = "json"
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onload = () => {
            if(xhr.status >= 400) {
                reject(xhr.response)
                console.log("ОШИБКА")
            } else {
                resolve(xhr.response)
                console.log("ВСЕ ОК")
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body))
        })
    }
// Метод для получение response from RealTimeDataBase
    get(method, url) {
        return fetch(url, {
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: method,
           

        }).then((response) => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error("ОШИБКАААААЫ")
        }
        })
    }
}
const realTimeDataBase = new dataBase()



