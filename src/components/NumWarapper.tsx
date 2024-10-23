import { useState } from "react";
import Button from "./Button";
import * as math from "mathjs";

let memor = "";
const NumWrap = () => {
  const [textAreaValue, setTextAreaValue] = useState("0");
  const [result, setResult] = useState(null);

  const button_list = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "+", value: "+" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "-", value: "-" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "*", value: "*" },
    { label: "c", value: "c", HandleButtonClick: handleClear },
    { label: "0", value: "0" },
    { label: "=", value: "=", HandleButtonClick: handleResult },
    { label: "/", value: "/" },
  ];

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

  function handleResult(number: any) {
    let ans = 0;
    try {
      ans = math.evaluate(number);
      setTextAreaValue(ans.toString());
    } catch (error) {
      setTextAreaValue("Math Error");
    }
  }

  function handleClear() {
    setTextAreaValue("");
    setResult(null);
  }

  return (
    <>
      <div className="grid-container">
        {/* <div>{textAreaValue || result}</div> */}
        <div className="calculator-grid ">
          <textarea
            id="inputtext"
            placeholder="0"
            value={textAreaValue}
          ></textarea>
          {button_list.map((btn, index) => (
            <Button
              key={index}
              clickHandler={() =>
                btn.HandleButtonClick
                  ? btn.HandleButtonClick(textAreaValue)
                  : HandleButtonClick(btn.value)
              }
            >
              {btn.label}
            </Button>
          ))}
          {/* <Button clickHandler={() => HandleButtonClick(1)}>1</Button>
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
          <Button clickHandler={() => handleClear()}>C</Button>
          <Button clickHandler={() => HandleButtonClick(0)}>0</Button>
          <Button clickHandler={() => handleResult((memor = textAreaValue))}>
            =
          </Button>
          <Button clickHandler={() => HandleButtonClick("/")}>/</Button> */}
        </div>
      </div>
    </>
  );
};

export default NumWrap;
