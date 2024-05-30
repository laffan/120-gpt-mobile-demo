import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function useChatGPT( selection ) {
  console.log("useChatGPT working...");

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          'You are the storyteller for a text-based adventure game where the user explores a fantastic world. All text is in present tense. The user will give you a room name. Your job is to return a JSON object that describes the next stage of the game. The object should have the following format :  { "roomName" : "repeat back the name of the room you have been given", "narrative" : "brief descsription of the route the user took to reach the selection, follwed by a short paragraph describing the selected space",  "options" : [ { "direction": "North", "roomName": "First option" }, { direction: "South", "roomName": "Second option" }, { "direction": "East", "roomName": "Third option" }, { "direction": "West", "roomName": "Fourth option" }, ] }  Return only the JSON with no introduction or description.',
      },
      { role: "user", content: selection  },
    ],
  });

  return response.choices[0].message.content.trim();
}

export default useChatGPT;
