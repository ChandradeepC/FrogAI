import discord
import requests
import json

intents = discord.Intents.default()
intents.typing = True  # Disable typing event to reduce unnecessary events
intents.presences = True  # Disable presence event to reduce unnecessary events
intents.messages = True
intents.message_content = True

client = discord.Client(intents=intents)


@client.event
async def on_ready():
    print(f"Bot is ready. Logged in as {client.user}")


@client.event
async def on_message(message):
    # Ignore messages sent by the bot itself
    if message.author == client.user:
        return

    # Check if the message content is a command (e.g., "!recommend")
    if message.content.startswith("!rec"):
        # Extract the user input
        user_input = message.content[4:]  # Remove "!recommend" from the message

        # default payload
        payload = {
            "country": "US",
            "pcGpu": "yes",
            "consoles": "no",
            "mac": "no",
            "budget": 1000,
            # ---
            "mode": "basic",  # cant be changed
            # ---
            "casual": "imp",
            "comp": "not",
            "text": "not",
            "media": "not",
            # ---
            "persistence": "not",  # no
            "response": "not",  # no
            "contrast": "not",  # no
            "brightness": "not",  # no
            "volume": "not",  # no
            "sharp": "not",  # no
            "subpixel": "not",  # no
            # ---
            "esports": "not",
            "edit": "no",
            "print": "no",
            "grade": "no",
            # ---
            "aspect": "nopref",
            "curve": "nopref",
            "size": "nopref",
            "res": "nopref",
            "minRR": "nopref",
            "panel": "nopref",
            "backlight": "nopref",
            "hdr": "nopref",
            "finish": "nopref",
            "calibrated": "nopref",
            "hub": "nopref",
            "module": "nopref",
        }

        try:
            # Send the POST request to the API
            api_url = "https://frogai.onrender.com/api/monitor-recommendations"
            response = requests.post(api_url, json=payload)

            # Parse the API response
            recommendations = response.json()

            country = payload["country"]
            if country == "US":
                currency_symbol = "$"
            elif country == "EU":
                currency_symbol = "€"
            else:
                currency_symbol = ""

            # Format and print the recommendations
            formatted_recommendations = []
            for recommendation in recommendations:
                cost = f"{currency_symbol}{recommendation['cost']}"

                formatted_recommendation = (
                    f"**{recommendation['name']}**\n"
                    f"**Motion**: {recommendation['persistence']}; **Image Quality**: {recommendation['contrast']}; **Text**: {recommendation['subpixel']}\n"
                    f"**Specs**: {recommendation['size']}\" {recommendation['resolution']}p {recommendation['refreshRate']}hz {recommendation['panel']}\n"
                    # f"Refresh Rate:  | "
                    # f"Panel: {recommendation['panel']} | "
                    # f"Size: {recommendation['size']}\" | "
                    # f"Approximate Cost: {cost} | "
                    # f"Curve: {recommendation['curve']} | "
                    # f"Adobe RGB: {recommendation['adobeRgb']} | "
                    # f"HDR: {recommendation['hdr']} | \n\n"
                    f"**Notes**: {recommendation['specialFeatures']}\n"
                    f"**Reviews**: {'; '.join([f'{review[0]} (<{review[1]}>)' for review in recommendation['reviews']])}\n--------------------------------"
                )

                formatted_recommendations.append(formatted_recommendation)

            formatted_recommendations_text = "\n".join(formatted_recommendations[:4])

            await message.channel.send(formatted_recommendations_text)
            if len(formatted_recommendations) > 4:
                formatted_recommendations_text = "\n".join(
                    formatted_recommendations[4:]
                )
                await message.channel.send(formatted_recommendations_text)

        except requests.exceptions.RequestException as e:
            await message.channel.send(f"Error: {str(e)}")


bot_token = "OTg0NDg2NjkxMTk4ODY1NDE5.Gd8RyN.KN5b_701SPvhL2_E1VK1WYKCVri-_-ZkO3Xyjc"

client.run(bot_token)
