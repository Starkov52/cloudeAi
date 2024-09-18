// Класс API ИИ 
class FusionBrain {
    constructor(apiKey, apiUrl) {
        this.apiUrl = apiUrl || "https://api.gen-api.ru/api/v1/networks/sd3";
        this.apiKey = apiKey || "sk-x6WfE3olGIbGhGr7CFlBRIo1irxQ0Eq9XwOicmOn5ZeMrSpdOtq7wtMl8xzl";
    }
// Метод класса который посылает запрос на сервер AI
    sendRequest(method, url, size , prompt, style) {
        const input = {
                "is_sync": true,
                "translate_input": true,
                "prompt": `${prompt}${style}`,
                "model": "medium",
                "negative_prompt": "blur, unfocused, cartoon",
                "prompt_expansion": false,
                "image_size": size,
                "num_inference_steps": 10,
                "guidance_scale": 5,
                "num_images": 1,
                "enable_safety_checker": false
            
        };
        return fetch(url, {
            method: method,
            body: input ? JSON.stringify(input) : null,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${this.apiKey}`
            }
        }).then(response => {
            if(response.ok) {
                
                return response.json();
            } else {
                throw new Error("Ошибка :(");
            }
        });
    }
}

// Инициализация экземпляра класса

const api = new FusionBrain();

