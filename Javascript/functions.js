import { englishToMorse } from "./data.js";

export const invalidInputError = new Error(
    `Your input contains a character that is not listed.`
);

// export const invalidParamError = new Error("Input must be a string");

export const engToMorse = (userInput) => {
    // if (typeof userInput !== "string") {
    //     return invalidParamError;
    // }

    const input = userInput.toUpperCase().split("");

    const charIsValid = input.every((char) =>
        Object.keys(englishToMorse).includes(char)
    );

    if (!charIsValid) {
        throw invalidInputError;
    }

    const output = input.map((char) => englishToMorse[char]).join(" ");

    return output;
};

export const morseToEng = (userInput) => {
    const input = userInput.split(" ");

    const charIsValid = input.every((char) =>
        Object.values(englishToMorse).includes(char)
    );

    // console.log(charIsValid);

    if (!charIsValid) {
        throw new Error(`Your input contains a character that is not listed.`);
    }

    const reversedObj = Object.entries(englishToMorse).reduce((acc, curr) => {
        const [key, value] = curr;
        acc[value] = key;
        return acc;
    }, {});

    const output = input.map((char) => reversedObj[char]).join("");

    return output;
};

//try catch?
