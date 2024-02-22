import React, { useEffect, useState } from 'react';

type MovableTextType = {
  label: string;
  words: string[];
};

export function MovableText({ label, words }: MovableTextType) {
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    let index = 0;
    let wordIndex = 0;
    let direction = 1;
    const interval = setInterval(() => {
      const word = words[wordIndex];

      setCurrentWord(word.slice(0, index));
      if (index === word.length) {
        direction = -1;
      } else if (index === 0) {
        direction = 1;
        wordIndex = (wordIndex + 1) % words.length;
      }
      index += direction;
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="font-black text-blue text-[64px]">
      {label} <span className="text-yellow">{currentWord}</span>|
    </p>
  );
}
