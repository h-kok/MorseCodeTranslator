import { englishToMorse } from "./data.js";

export const missingParamError = new Error(
    "You must enter a parameter and it must be a string"
);

const createTranslatedText = (input, obj, join) => {
    const indexCharNotValid = input.findIndex(
        (char) => !Object.keys(obj).includes(char)
    );

    if (indexCharNotValid < 0) {
        const output = input.map((char) => obj[char]).join(join);
        return output;
    } else if (input.length > 0) {
        input.splice(indexCharNotValid, 1, "#");
        const output = input.map((char) => obj[char]).join(join);
        return output;
    }
};

export const engToMorse = (userInput) => {
    if (typeof userInput === "undefined" || typeof userInput !== "string") {
        throw missingParamError;
    }

    const input = userInput.toUpperCase().split("");

    return createTranslatedText(input, englishToMorse, " ");
};

export const morseToEng = (userInput) => {
    if (typeof userInput === "undefined" || typeof userInput !== "string") {
        throw missingParamError;
    }

    const input = userInput.split(" ");

    const reversedObj = Object.entries(englishToMorse).reduce((acc, curr) => {
        const [key, value] = curr;
        acc[value] = key;
        return acc;
    }, {});

    reversedObj[""] = "";

    return createTranslatedText(input, reversedObj, "");
};
