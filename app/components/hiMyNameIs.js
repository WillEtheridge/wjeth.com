"use client";

// External Imports
import { useState, useEffect } from "react";

// Internal Imports
import { Heading6 } from "./textComponents";

const HiMyNameIs = () => {
  const [index, setIndex] = useState(0);

  const greetings = [
    "Hi, my name is",
    "你好，我的名字是",
    "नमस्ते, मेरा नाम है",
    "Hola, me llamo",
    "こんにちは、私の名前は",
    "Salut, je m'appelle",
    "مرحبًا، اسمي",
    "ہیلو، میرا نام ہے",
    "Hallo, mein Name ist",
    "Ciao, mi chiamo",
    "안녕하세요, 제 이름은",
    "Olá, o meu nome é",
    "Hej, jag heter",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 1500); // Change every 1.5s

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden mb-8 ">
      {greetings.map((greeting, i) => (
        <div
          key={i}
          className={`absolute  transition-opacity duration-500 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Heading6 text={greeting} />
        </div>
      ))}
    </div>
  );
};

export default HiMyNameIs;
