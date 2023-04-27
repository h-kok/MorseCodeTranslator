# Morse Code Translator

## Demo & Snippets

-   You can view the live version here: https://h-kok.github.io/MorseCodeTranslator/.

## Requirements / Purpose

-   The MVP was to create a morse code translator using the knowledge we have learnt about objects in Javascript. It also requires us to make use of previously learnt topics, such as the DOM, and testing JS functions.
-   Tech stack used: JavaScript, DOM, CSS/Sass, HTML

## Build Steps

-   Run 'npm install' in Javascript folder to access translation tests, then 'npm run test' to run unit tests.

```
npm install
```

```
npm run test
```

## Design Goals / Approach

-   I have taken a TDD approach to the project, creating tests to determine the expected outcomes of my functions and tackling possible edge cases prior to writing the code.

## Known issues

-   Error message - not sure how to target index of invalid character in input textarea, so error message keeps appearing if keep typing a valid char after invalid char.
-   Pressing enter in text area -> error message.

## Future Goals

-   Feedback recieved 13/4/23:
    -   Increase font size or change font to improve readability.
    -   Make page responsive.
    -   Create develop branch for current project with bugs. Create main branch with working version of translator (add more simple error message handling.)

---

## Change logs

### 26/04/23

-   This project was submitted on 11/04/23.
-   Updated README detailing known issues, and future goals, plans for reimplementation.
-   Create develop branch on github.

### 27/04/23

-   Made translation section responsive.
-   Increase font size in text area.
-   Refactor JS and add try/catch block to show error message if translation contains invalid character, which has been replaced with "#".

---

## What did you struggle with?

-   Error handling. My aim was to return a message indicating that a character was not valid, as well as the invalid character. I attempted to target the value through index, however because latin and morse code characters are not the same length, I could not do this. I will attempt to find a solution in my develop branch.

## Further details, related projects, reimplementations

-   The initial project was completed and submitted on 11/04/23.
-   After recieving feedback, I will move this version to a develop branch to work out bugs listed above and create a main branch with a working version that can be deployed.
