import fs from 'node:fs';
import process from "node:process";
import dotenv from "dotenv";
import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

dotenv.config({ path: ".env.local" });

async function main() {
  const client = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY,
  });
  const response = await client.textToSpeech.convert(
    "21m00Tcm4TlvDq8ikWAM",
    {
      modelId: "eleven_v3",
      text: "Hey there, this is a test of Eleven v3 TTS model."
    }
  );
  fs.writeFileSync('output.bin', Buffer.from(response));
  console.log('Saved output.bin');
}
main();
