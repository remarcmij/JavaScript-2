# JavaScript Week 3

> Don't forget to start a recording!

## Lecture goals

- Advanced data types [Objects]
- Conditions
- Statements vs Expressions
- Loops (for/while)
- Functions
- Scope

## Homework

- Correct and refactor the week 1 homework of one student

## Scope

- Use dictionary.com to look up what the word 'scope' means.
- Scope: what you can see (from where you are)
- Explain scope by creating an `index.html`, `app.js` and `style.css` triplet
- Show and explain that global scope is a crowded place (use debugger in browser)
- Take class 12 to be the global scope and create a new variable `mohammed`: it will clash
- Show var, let, const effects on scope
- strict mode
- function scope
- block scope
- iffe

## State

- Explain state with chess board analogy.
- Use roverjs introduction level to discuss state


## JavaScript in the BROWSER with HTML and CSS

- Progressively build the rover introduction level from ASCII art to SPA using live coding (see final folder)

### robot-ascii

- Make sure everyone has VSCode correctly set up and configured
- Add `"editor.formatOnType": true,` to VSCode user settings
- Start a new project folder from scratch. Call it `robot`.
- Discuss what the state of the game comprises
- Create the `state` object
- Create a `render()` function that renders the current state as ASCII art.
- Add the `move()` and `turn()` functions. No need for student to understand all the fine details.
Just that these functions change the state.

### robot-web-1

- Show hard coded rendering of game board in HTML. This is what we need to reproduce programmatically.

### robot-web-2

- Create the `render()` function to reproduce the game board initial state programmatically (without clearing `innerHTML`).
- Show effect of re-rendering. Demonstrate that you must clear `innerHTML` before re-rendering.

### robot-web-3

- Copy the `move()` and `turn()` functions from `robot-ascii` and use the new `render()` function to render the game steps (will only show the final state)

### robot-web-4

- Add an buttons to execute robot commands.

### robot-web-5

- Use images to render the robot, trees, water and flag. Use CSS classes to rotate the robot.
