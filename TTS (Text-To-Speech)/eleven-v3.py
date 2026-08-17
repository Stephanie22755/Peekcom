import os
from elevenlabs.client import ElevenLabs
from dotenv import load_dotenv

load_dotenv(dotenv_path=".env.local")
client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))
response = client.text_to_speech.convert(
  voice_id="21m00Tcm4TlvDq8ikWAM",
  model_id="eleven_v3",
  text="This is a test for the API of ElevenLabs."
)
with open("output.bin", "wb") as f:
  f.write(b"".join(response))
print("Saved output.bin")
