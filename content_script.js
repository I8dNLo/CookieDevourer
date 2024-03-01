console.log("machhoo")

const prompt = "I want to write a novel about a detective who";
const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/completions";

fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": "who is jeff bezos"
            }
        ],
        "max_tokens": 2048,
        "temperature": 0,
    }),
})
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData.choices[0].message.content);
    })
    .catch(error => {
        console.error('Error:', error);
    });
