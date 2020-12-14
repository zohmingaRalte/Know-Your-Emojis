import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face - conveys general pleasure and good cheer or humor.",
  "😁":
    "Beaming Face with Smiling Eyes - expresses a radiant, gratified happiness.",
  "😆": "Grinning Squinting Face - conveys excitement or hearty laughter.",
  "😅": "Grinning Face with Sweat - depict nerves or discomfort.",
  "🤣": "Rolling on the Floor Laughing - conveys hysterical laughter.",
  "😂": "Face with Tears of Joy - used to show something is funny or pleasing.",
  "🙂":
    "Slightly Smiling Face - conveys a wide range of positive, happy, and friendly sentiments.",
  "🙃":
    " Upside-Down Face - convey irony, sarcasm, joking, or a sense of goofiness or silliness.",
  "😉":
    "Winking Face - may signal a joke, flirtation, hidden meaning, or general positivity.",
  "😊":
    " Smiling Face with Smiling Eyes - expresses genuine happiness and warm, positive feelings.",
  "😇": "Smiling Face with Halo - represents angels, prayers, and blessings.",
  "🥰":
    " Smiling Face with Hearts -  Expresses a range of happy, affectionate feelings, especially being in love.",
  "😍":
    "Smiling Face with Heart-Eyes - conveys enthusiastic feelings of love, infatuation, and adoration.",
  "🤩":
    "Star-Struck - express that someone or something is amazing, fascinating, impressive, or exciting.",
  "😘": "Face Blowing a Kiss - represent a kiss goodbye or good night .",
  "😗": "Kissing Face - conveys sentiments of love and affection.",
  "😚":
    "Kissing Face with Closed Eyes - conveys sentiments of romantic love and affection.",
  "😋": "Face Savoring Food - convey that a food item is delicious.",
  "😛":
    "Face with Tongue -  convey a sense of fun, excitement, silliness, cuteness, happiness.",
  "😜":
    "Winking Face with Tongue - conveys a sense of fun, excitement, wackiness, buffoonery, or joking.",
  "🤪":
    "Zany Face -  represents such activities as acting goofy, having fun, and partying .",
  "😝":
    "Squinting Face with Tongue - conveys a sense of fun, excitement, playfulness, hilarity, and happiness",
  "🤑":
    "Money-Mouth Face - convey making money, loving wealth, being or feeling rich.",
  "🤗":
    "Hugging Face - may be used to offer thanks and support, show love and care.",
  "🤫": "Shushing Face - convey silence, quiet, secrecy, and discreetness.",
  "🤔": "Thinking Face - often used to question or scorn something or someone.",
  "🤐": "Zipper-Mouth Face - conveys a secret or that someone will keep one.",
  "🤨":
    "Face with Raised Eyebrow - conveys suspicion, skepticism, concern, consideration, disbelief, and disapproval.",
  "😐":
    "Neutral Face -  convey mild irritation and concern or a deadpan sense of humor.",
  "😑": "Expressionless Face - convey a sense of frustration or annoyance.",
  "😶": "Face Without Mouth -  conveys speechlessness, humility, and silence.",
  "😏": "Smirking Face - convey flirtation or sexual innuendo.",
  "😒":
    "Unamused Face - conveys irritation, displeasure, grumpiness, and skepticism.",
  "🙄":
    "Face with Rolling Eyes - conveys playful, sassy, resentful, and sarcastic.",
  "😬": "Grimacing Face - conveys nervousness, embarrassment, or awkwardness.",
  "🤥": "Lying Face -  convey disbelief or may represent lying."
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var meaning = emojiDictionary[event.target.value];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database 😞";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <div className="bg-image"></div>
      <h1 className="heading">Know Your Emojis</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="put your emoji here.."
      ></input>
      <div className="outputDiv">{meaning}</div>
      <div className="emojiList">
        {emojiList.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              className="emojiStyle"
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
