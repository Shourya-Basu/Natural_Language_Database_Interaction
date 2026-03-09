import requests

headers = {
    "Authorization": "Bearer YOUR_KEY",
    "Content-Type": "application/json"
}

data = {
    "model": "mistralai/mistral-7b-instruct",
    "messages": [
        {"role": "user", "content": "Hello"}
    ]
}

r = requests.post("https://openrouter.ai/api/v1/chat/completions", 
                  headers=headers, json=data)

print(r.status_code)
print(r.text)