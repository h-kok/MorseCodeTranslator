import { englishToMorse } from "./data";
import {
    engToMorse,
    invalidInputError,
    invalidParamError,
    morseToEng,
} from "./functions";

//should return object value from an object key
//should return object key from object value
//should return special characters
//should have correct spacing in morse code
//should return numbers?
//should be able to translate upper or lower case latin

//abc to morse
//should return error if input is not a string
//should return error if input contains not latin a-z case insensitive or special character not listed

//morse to abc
//should return error if input is not abc latin or special chara

describe("Test cases for a function that returns the corresponding morse character of an english character", () => {
    it("should return the correct morse character for valid english inputs", () => {
        expect(engToMorse("A")).toBe(".-");
        expect(engToMorse("O")).toBe("---");
        expect(engToMorse("5")).toBe(".....");
        expect(engToMorse("!")).toBe("-.-.--");
    });
    it("should return a string", () => {
        expect(typeof engToMorse("12345!")).toBe("string");
        expect(typeof engToMorse("apples")).toBe("string");
    });
    it("should handle multiple characters", () => {
        expect(engToMorse("CAT")).toBe("-.-. .- -");
        expect(engToMorse("$5.99")).toBe("...-..- ..... .-.-.- ----. ----.");
    });
    it("should handle inputs with spaces", () => {
        expect(engToMorse("WHAT IS THE DATE?")).toBe(
            ".-- .... .- - / .. ... / - .... . / -.. .- - . ..--.."
        );
        expect(engToMorse("5 X &")).toBe("..... / -..- / .-...");
    });
    it("should handle both upper and lower case inputs", () => {
        expect(engToMorse("CAT")).toBe("-.-. .- -");
        expect(engToMorse("cat")).toBe("-.-. .- -");
    });
    it("throw an error if input is not a listed English character", () => {
        expect(() => {
            engToMorse("^");
        }).toThrow(invalidInputError);
        expect(() => {
            engToMorse("5<6");
        }).toThrow(invalidInputError);
        expect(() => {
            engToMorse(" > *");
        }).toThrow(invalidInputError);
        expect(() => {
            engToMorse("#cats");
        }).toThrow(invalidInputError);
    });
    // it("throw an error if input is not a string", () => {
    //     expect(() => {
    //         engToMorse([a, b, c]);
    //     }).toThrow(invalidParamError);
    //     expect(() => {
    //         engToMorse(56);
    //     }).toThrow(invalidParamError);
    //     expect(() => {
    //         engToMorse({});
    //     }).toThrow(invalidParamError);
    // });
});

describe("Test cases for a function that returns the corresponding english character of a morse character", () => {
    it("returns the correct english character for valid morse inputs", () => {
        expect(morseToEng("..-.")).toBe("F");
        expect(morseToEng("-")).toBe("T");
        expect(morseToEng("....-")).toBe("4");
        expect(morseToEng("-....-")).toBe("-");
    });
    it("should return a string", () => {
        expect(typeof morseToEng("/")).toBe("string");
        expect(typeof morseToEng(".---- ..--- ...-- -.-.--")).toBe("string");
    });
    it("should handle multiple characters", () => {
        expect(morseToEng("-.-. .- -")).toBe("CAT");
        expect(morseToEng("...-..- ..... .-.-.- ----. ----.")).toBe("$5.99");
    });
    it("should handle inputs with spaces", () => {
        expect(
            morseToEng(".-- .... .- - / .. ... / - .... . / -.. .- - . ..--..")
        ).toBe("WHAT IS THE DATE?");
    });
    // it("should handle both upper and lower case inputs", () => {});
    // it("throw an error if input is an empty string", () => {});
    it("throw an error if input is not a listed morse character", () => {
        expect(() => {
            ("......");
        }).toThrow(invalidInputError);
        expect(() => {
            ("-.-..--");
        }).toThrow(invalidInputError);
    });
});

//edge case, translating T and -?
//try catch?
