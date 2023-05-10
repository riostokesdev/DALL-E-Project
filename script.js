import { config } from "dotenv";
import readline from "readline";

config()

import { Configuration, OpenAIApi } from "openai"

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))



const userInterface = new readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log("What Image Would You Like To Generate?")
userInterface.prompt("")
userInterface.on("line", async input => {
    const response = await openai.createImage({
        prompt: input,
        n: 1,
        size: "1024x1024",
    });
    const image_url = response.data.data[0].url;
    console.log(image_url)
})


