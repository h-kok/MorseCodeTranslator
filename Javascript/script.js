import { engToMorse, morseToEng } from "./translation.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const errorMsg = document.querySelector(".error-msg");

input.addEventListener("input", () => {
    const text = input.value;
    const re = /[a-z,0-9,,?;:_'"!@$&()+=]/gi;

    re.test(text)
        ? (output.textContent = engToMorse(text))
        : (output.textContent = morseToEng(text));

    const outputTxt = output.textContent;
    const indexHash = text.length - 1;

    const messagePara = document.createElement("p");
    messagePara.className = "message-para";
    const message = document.createTextNode(
        `The following character: ${text.charAt(indexHash)} is not accepted.`
    );
    messagePara.appendChild(message);
    if (outputTxt.includes("#")) {
        errorMsg.appendChild(messagePara);
    }
    if (!outputTxt.includes("#")) {
        errorMsg.removeChild(document.querySelector(".message-para"));
    }
});

//Bugs
//error message - not sure how to target index of invalid character in input textarea, so error message keeps appearing if keep typing after invalid char.
//pressing enter in text area -> error message
