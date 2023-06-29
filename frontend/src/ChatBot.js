import Chatbot from "react-simple-chatbot";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// Set some properties of the bot
const config = {
  floating: true,
};

const MyChatbot = () => {
  const handleEnd = async ({ steps, values }) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${steps[0].value}`,
      temperature: 0,
    });
    return {
      id: "3",
      message: response.data.choices[0].text,
      user: "bot",
    };
  };

  const steps = [
    {
      id: "1",
      message: "Hello, how can I help you?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: handleEnd,
    },
    {
      id: "3",
      user: true,
      trigger: handleEnd,
    },
    {
      id: "4",
      message:
        "I am sorry, I am not able to understand you at this moment, please try again later",
      end: true,
    },
  ];

  return <Chatbot steps={steps} {...config} />;
};
export default MyChatbot;