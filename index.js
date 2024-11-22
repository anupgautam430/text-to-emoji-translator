const emojiDictionary = {
    happy: "😊",
    sad: "😢",
    love: "❤️",
    angry: "😡",
    party: "🎉",
    fire: "🔥",
    cool: "😎",
    smile: "😄",
    thumbs: "👍",
    star: "⭐",
    cry: "😭",
    laugh: "😂",
    heart: "💖",
    kiss: "😘",
    hug: "🤗",
    tired: "😴",
    shocked: "😱",
    sleepy: "😪",
    wow: "🤩",
    clap: "👏",
    idea: "💡",
    music: "🎵",
    rain: "🌧️",
    sun: "☀️",
    cloud: "☁️",
    coffee: "☕",
    tea: "🍵",
    dog: "🐶",
    cat: "🐱",
    car: "🚗",
    bike: "🚲",
    rocket: "🚀",
    cake: "🎂",
    gift: "🎁",
    computer: "💻",
    phone: "📱",
    money: "💰",
    tree: "🌳",
    flower: "🌸",
    moon: "🌙",
    starry: "🌟",
    rainbow: "🌈",
    book: "📚",
    writing: "✍️",
    graduation: "🎓",
    pin: "📌",
    thumbsdown: "👎",
    pizza: "🍕",
    burger: "🍔",
    fries: "🍟",
    sushi: "🍣",
    icecream: "🍦",
    drink: "🥤",
    soccer: "⚽",
    basketball: "🏀",
    cricket: "🏏",
    gaming: "🎮",
    sleep: "💤",
    angryface: "😠",
    robot: "🤖",
    alien: "👽",
    ghost: "👻",
    skull: "💀",
    sparkle: "✨",
    explosion: "💥",
  };
  
  /**
   * Translates a string into its emoji equivalent.
   * @param {string} text - The input string.
   * @returns {string} - The translated string with emojis.
   */
  function translateToEmoji(text) {
    if (typeof text !== "string") {
      throw new Error("Input must be a string");
    }
  
    const words = text.split(" ");
    const translatedWords = words.map((word) =>
      emojiDictionary[word.toLowerCase()] || word
    );
  
    return translatedWords.join(" ");
  }
  
  /**
   * Adds a new word-emoji mapping to the dictionary.
   * @param {string} word - The word to map.
   * @param {string} emoji - The emoji to map the word to.
   */
  function addEmoji(word, emoji) {
    if (typeof word !== "string" || typeof emoji !== "string") {
      throw new Error("Both word and emoji must be strings");
    }
  
    emojiDictionary[word.toLowerCase()] = emoji;
  }
  
  module.exports = {
    translateToEmoji,
    addEmoji,
  };
  