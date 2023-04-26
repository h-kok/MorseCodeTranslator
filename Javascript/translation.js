import { englishToMorse } from "./data.js";

// export const invalidInputError = new Error(
//     `Your input contains a character that is not listed.`
// );

export const missingParamError = new Error(
    "You must enter a parameter and it must be a string"
);

const createTranslatedText = (input, obj, join) => {
    const indexCharNotValid = input.findIndex(
        (char) => !Object.keys(obj).includes(char)
    );

    let output = input.map((char) => obj[char]).join(join);

    if (indexCharNotValid < 0) {
        return output;
    } else if (input.length > 0) {
        input[indexCharNotValid] = "#";
        const newInput = input;
        output = newInput.map((char) => obj[char]).join(join);

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

// const charIsValid = input.every((char) =>
//     Object.keys(englishToMorse).includes(char)
// );
// console.log(input[indexCharNotValid]);

//Working solultion
//check if all chars in array are valid, if yes, return join
//if no, map through array and change each invalid char to #
