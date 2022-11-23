import React, { useState, useEffect } from "react";
// import { Online, Offline } from "react-detect-offline";
import HappyFaceAi from "./Faces/HappyFaceAi";
import NoExpressionAi from "./Faces/NoExpressionAi";
import SadFaceAi from "./Faces/SadFaceAi";

function Home() {
  // sample Array
  const goodWords = ["good", "sweet", "happy"];
  const badWords = ["bad", "naughty", "horrible"];

  // state definition
  const [possGood, setPossGood] = useState(1);
  const [possBad, setPossBad] = useState(0);
  const [text, setText] = useState("");

  // useEffect
  useEffect(() => {
    console.log("possbad :" + possBad);
    console.log("possGood: " + possGood);
  }, [possBad, possGood]);

  useEffect(() => {
    console.log("possbad :" + possBad);
    console.log("possGood: " + possGood);
  }, [possGood, possBad]);

  useEffect(() => {
    if (possGood > possBad) {
      console.log("good:" + possGood);
      setFace("happy");
    } else {
      console.log("bad: " + possBad);
      setFace("sad");
    }
  }, [possGood, possBad]);

  // checking for . mark
  const check = (e) => {
    if (
      text.split("").find((op) => {
        return op === ".";
      })
    ) {
      console.log("full stop was found");
      setText(text);
    } else {
      setText(e.target.value);
    }
  };

  // breaking starts here
  const breaking = () => {
    setPossBad(0);
    setPossGood(0);
    let text1 = document.getElementById("text").value;

    const words = text1.split(" ");
    console.log(words);

    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < badWords.length; j++) {
        if (words[i] === badWords[j]) {
          if (words[i - 1] === "not") {
            setPossGood((prev) => prev + 1);
          } else {
            setPossBad((prev) => prev + 1);
          }
          // console.log("PossBad : " + possBad);
        }
      }
    }

    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < goodWords.length; j++) {
        if (words[i] === goodWords[j]) {
          if (words[i - 1] === "not") {
            setPossBad((prev) => prev + 1);
          } else {
            setPossGood((prev) => prev + 1);
          }
          // console.log("possGood: " + possGood);
        }
      }
    }

    // main logic
  };

  const [face, setFace] = useState("happy");
  let usedface;

  if (face === "happy") usedface = <HappyFaceAi />;
  if (face === "sad") usedface = <SadFaceAi />;
  if (face === "none") usedface = <NoExpressionAi />;

  return (
    <div className="w-screen h-screen bg-primary">
      {/* title */}
      <div className="text-7xl text-secondary text-center mt-10">
        Happy <span className="text-2xl">AI</span>
      </div>

      {/* text area and face */}
      <div></div>
      <div className="flex w-screen justify-evenly items-center px-10 mt-10">
        {/* text area */}

        <div className="w-[30rem] h-[35rem] border-2 border-black rounded-xl relative">
          {/* input button */}
          <div className="flex absolute items-center top-[31rem]">
            <input
              type="text"
              name="text"
              id="text"
              className="border-2 w-[22rem] ml-4 px-5 py-2 text-xl rounded-l-xl bg-transparent border-black"
              value={text}
              onChange={(e) => check(e)}
            />

            <button
              type="submit"
              className="bg-secondary text-xl w-[5rem] px-2 py-2 rounded-r-xl"
              onClick={() => breaking()}
            >
              Enter
            </button>
          </div>
        </div>

        {/* face */}
        <div>{usedface}</div>
      </div>
    </div>
    // <div className="flex gap-48 items-center bg-red-100">
    //   <div className="text-2xl">
    //     {/* <Online> Hello there, wifi is open</Online>
    //     <Offline>Wifi is gone</Offline> */}
    //     <br />
    //     Hello
    //     <div>there is me</div>
    //     <div className="mt-10">What face do you want me to wear?</div>
    //     {/* text */}
    //     <div className="flex">
    //       <input
    //         type="text"
    //         name="text"
    //         id="text"
    //         className="border-2 "
    //         value={text}
    //         onChange={(e) => check(e)}
    //       />

    //       <button
    //         type="submit"
    //         className="bg-yellow-400 px-2 py-2 rounded-r-xl"
    //         onClick={() => breaking()}
    //       >
    //         Enter
    //       </button>
    //     </div>
    //     {/* button */}
    //     {/* <div className="flex gap-10 mt-4">
    //       <button
    //         className="bg-green-400 px-10 py-2 rounded-full hover:bg-green-800 hover:text-white transition-all duration-300"
    //         onClick={() => setFace("happy")}
    //       >
    //         Happy
    //       </button>
    //       <button
    //         className="bg-green-400 px-10 py-2 rounded-full hover:bg-green-800 hover:text-white transition-all duration-300"
    //         onClick={() => setFace("sad")}
    //       >
    //         Sad
    //       </button>
    //       <button
    //         className="bg-green-400 px-10 py-2 rounded-full hover:bg-green-800 hover:text-white transition-all duration-300"
    //         onClick={() => setFace("none")}
    //       >
    //         None
    //       </button>
    //     </div> */}
    //   </div>
    //   <div> {usedface}</div>
    // </div>
  );
}

export default Home;
