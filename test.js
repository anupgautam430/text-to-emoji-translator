const emojiTranslator = require("./index");

// Test 1: Default translations
console.log(emojiTranslator.translateToEmoji("I love pizza and burgers!")); 
// Output: I ❤️ 🍕 and 🍔!

console.log(emojiTranslator.translateToEmoji("The sun and rainbow are beautiful."));
// Output: The ☀️ and 🌈 are beautiful.

// Test 2: Adding custom emojis
emojiTranslator.addEmoji("code", "💻");
console.log(emojiTranslator.translateToEmoji("I love to code!"));
// Output: I ❤️ to 💻!

emojiTranslator.addEmoji("travel", "✈️");
console.log(emojiTranslator.translateToEmoji("I want to travel the world."));
// Output: I want to ✈️ the world.

// Test 3: Complex text
console.log(
  emojiTranslator.translateToEmoji("Party hard, stay cool, and smile more!")
);
// Output: 🎉 hard, stay 😎, and 😄 more!
