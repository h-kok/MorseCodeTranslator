import { engToMorse, morseToEng } from "./translation.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const errorMsg = document.querySelector(".error-msg");
const messageContainer = document.querySelector(".message-para");

input.addEventListener("input", () => {
    const text = input.value;
    const re = /[a-z,0-9,,?;:_'"!@$&()+=]/gi;

    re.test(text)
        ? (output.textContent = engToMorse(text))
        : (output.textContent = morseToEng(text));

    const outputTxt = output.textContent;

    const messagePara = document.createElement("p");
    messagePara.className = "message-para";

    if (!text.includes("#") && errorMsg.hasChildNodes()) {
        errorMsg.removeChild(document.querySelector(".message-para"));
    }

    try {
        if (outputTxt.includes("#")) throw "#";
    } catch (err) {
        if (errorMsg.hasChildNodes()) {
            errorMsg.removeChild(messageContainer);
        }
        const message = document.createTextNode(
            `The character at ${err} is not valid`
        );
        errorMsg.appendChild(messagePara);
        messagePara.appendChild(message);
    }
});

//Bugs
//error message - not sure how to target index of invalid character in input textarea, so error message keeps appearing if keep typing after invalid char.
//pressing enter in text area -> error message
