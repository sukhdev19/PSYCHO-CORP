import { GoogleGenerativeAI } from "@google/generative-ai";// Endpoint to handle chatbot messages
const chatbotReply= async (req, res) => {
  try {
    const { message } = req.body;

    // Make sure to include these imports:
    // import { GoogleGenerativeAI } from "@google/generative-ai";
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = message;

    const result = await model.generateContent(prompt);
    // Extract and send back the bot's response
    const botReply = result.response.text() || "I'm not sure about that.";
    return res.json({ reply: botReply });
  } catch (error) {
    console.error("Error in chatbot API:", error);
    res.status(500).json({ error: "Failed to get a response from Gemini API" });
  }
};


export default chatbotReply;
