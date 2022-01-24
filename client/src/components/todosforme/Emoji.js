import React from "react";
import "./styles/emoji.css";

export const Emoji = (emojiProp) => {
  const {emoji} = emojiProp;
  return (
    <span className="withNotoColorEmojiFont">{emoji}</span>
  )
}
