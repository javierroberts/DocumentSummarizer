import requests
import json
import keys

API_URL = "https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0"


def getSumm(siteURL):
    querystring = {
        "url": siteURL, "sentences": "5"}

    headers = {
        'x-rapidapi-host': "meaningcloud-summarization-v1.p.rapidapi.com",
        'x-rapidapi-key': keys.summ_api_key,
        'accept': "application/json"
    }

    response = requests.request(
        "GET", API_URL, headers=headers, params=querystring)

    response = json.loads(response.text)

    if response["status"]["code"] == "212":
        return "ERROR: URL could not be sumarized"
    else:
        return response["summary"]
