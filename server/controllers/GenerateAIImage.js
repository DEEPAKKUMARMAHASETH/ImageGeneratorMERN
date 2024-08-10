import * as dotenv from "dotenv";
import { createError } from "../error.js";
import OpenAI from "openai";

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});
// Controller to generate Image

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    console.log(prompt)
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const generatedImage = response.data[0].b64_json;
    return res.status(200).json({ photo: generatedImage });
  } catch (error) {
    console.log(error)
    next(
      createError(
        error.status,
        error?.response?.data?.error?.message || error?.message
      )
    );
  }
};
