import {
    engToMorse,
    morseToEng,
    // invalidInputError,
    missingParamError,
} from "./translation";

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
    it("should return # if input is not a listed English character", () => {
        expect(engToMorse("^")).toBe("#");
        expect(engToMorse("5<6")).toBe("..... # -....");
        expect(engToMorse("{cats")).toBe("# -.-. .- - ...");
    });
    it("throw an error if there are no parameters", () => {
        expect(() => {
            engToMorse();
        }).toThrow(missingParamError);
    });
    it("throw an error if input is not a string", () => {
        expect(() => {
            engToMorse(["a", "b", "c"]);
        }).toThrow(missingParamError);
        expect(() => {
            engToMorse(56);
        }).toThrow(missingParamError);
        expect(() => {
            engToMorse({});
        }).toThrow(missingParamError);
    });
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
    it("should return # if input is not a listed morse character", () => {
        expect(morseToEng("......")).toBe("#");
        expect(morseToEng(".- -... -/")).toBe("AB#");
    });
    it("throw an error if there are no parameters", () => {
        expect(() => {
            morseToEng();
        }).toThrow(missingParamError);
    });
    it("throw an error if input is not a string", () => {
        expect(() => {
            morseToEng([".-", "-...", "-.-."]);
        }).toThrow(missingParamError);
        expect(() => {
            morseToEng(56);
        }).toThrow(missingParamError);
        expect(() => {
            morseToEng({});
        }).toThrow(missingParamError);
    });
});

//edge case, translating T and -?
//try catch?
