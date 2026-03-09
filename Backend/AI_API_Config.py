import requests
import json
import re
from Config import OPENROUTER_KEY

url = "https://openrouter.ai/api/v1/chat/completions"


def call_ai(messages):

    headers = {
        "Authorization": f"Bearer {OPENROUTER_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "openai/gpt-4o-mini",
        "messages": messages,
        "temperature": 0
    }

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code != 200:
        return {"error": "AI request failed", "details": response.text}

    result = response.json()

    return result["choices"][0]["message"]["content"]


def ai_sql(prompt):

    system_prompt = """
        You are an AI assistant connected to a MySQL database.

        Database table:
        sales_data

        Columns:
        id
        product_name
        category
        region
        sell_date
        quantity_sold
        selling_price
        cost_price
        revenue
        profit
        stock_remaining

        Rules:

        If the question requires database data → return JSON:

        {
        "type": "sql",
        "query": "SELECT ..."
        }

        If the question is general knowledge → return:

        {
        "type": "answer",
        "answer": "your answer here"
        }

        Return JSON only.
        """

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": prompt}
    ]

    response = call_ai(messages)

    try:
        json_match = re.search(r"\{[\s\S]*\}", response)

        if json_match:
            return json.loads(json_match.group())

        return {"type": "answer", "answer": response}

    except Exception as e:
        return {
            "error": "AI response parsing failed",
            "details": str(e)
        }