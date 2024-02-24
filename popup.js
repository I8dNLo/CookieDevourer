
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.cookies.getAll({ url: tabs[0].url }, function (cookies) {
        const cookieData = cookies.map(cookie => `${cookie.name}: ${cookie.value}`).join('\n');
        callOpenAI(cookieData);
    });
});

function callOpenAI(cookieData) {
    const api_key = YOUR_API_KEY; 
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    console.log('Fetching results from OAI API');

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${api_key}`,
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            prompt: `The following cookies have been found: ${cookieData} Determine the feature, description, and severity for each.`,
            max_tokens: 500,
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`API call failed with status code: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.choices && data.choices.length > 0) {
            const textResponse = data.choices[0].text.trim();
            console.log(textResponse);
        } else {
            throw new Error(`Invalid response structure: ${JSON.stringify(data)}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}