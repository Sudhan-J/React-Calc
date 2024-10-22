import { useState } from "react";
import Button from "./Button";
import * as math from "mathjs";
// import TextArea from "./TextArea";

let memor = "";
const NumWrap = () => {
  const [textAreaValue, setTextAreaValue] = useState("0");

  const HandleButtonClick = (number: any) => {
    setTextAreaValue(number);
    captureNumber(number);
  };

  const captureNumber = (number: any) => {
    let number_doc = document.getElementById("inputtext");

    // if (number_doc?.textContent == "0") {
    //   console.log(number);
    // } else {
    //   console.log(number_doc?.textContent + number);
    //   setTextAreaValue(number_doc?.textContent + number);
    // }

    if (number_doc?.textContent == "0") {
      console.log(number);
      // memor = number_doc?.textContent + number;
      // setTextAreaValue(memor);
    } else {
      memor = number_doc?.textContent + number;
      // console.log(memor);
      setTextAreaValue(memor);
    }
  };

  function result(number: any) {
    let ans = math.evaluate(number);
    setTextAreaValue(ans);
  }

  function clear() {
    setTextAreaValue("");
  }

  return (
    <>
      <div className="grid-container">
        <div className="calculator-grid ">
          <textarea
            id="inputtext"
            placeholder="0"
            value={textAreaValue}
          ></textarea>
          <Button clickHandler={() => HandleButtonClick(1)}>1</Button>
          <Button clickHandler={() => HandleButtonClick(2)}>2</Button>
          <Button clickHandler={() => HandleButtonClick(3)}>3</Button>
          <Button clickHandler={() => HandleButtonClick("+")}>+</Button>
          <Button clickHandler={() => HandleButtonClick(4)}>4</Button>
          <Button clickHandler={() => HandleButtonClick(5)}>5</Button>
          <Button clickHandler={() => HandleButtonClick(6)}>6</Button>
          <Button clickHandler={() => HandleButtonClick("-")}>-</Button>
          <Button clickHandler={() => HandleButtonClick(7)}>7</Button>
          <Button clickHandler={() => HandleButtonClick(8)}>8</Button>
          <Button clickHandler={() => HandleButtonClick(9)}>9</Button>
          <Button clickHandler={() => HandleButtonClick("*")}>*</Button>
          <Button clickHandler={() => clear()}>C</Button>
          <Button clickHandler={() => HandleButtonClick(0)}>0</Button>
          <Button clickHandler={() => result((memor = textAreaValue))}>
            =
          </Button>
          <Button clickHandler={() => HandleButtonClick("/")}>/</Button>
        </div>
      </div>
    </>
  );
};

export default NumWrap;
