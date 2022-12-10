const pressed = [];
const secretCode = 'secret';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key)
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length) 
    // look from the back, 7 letters, and trim from there
    console.log(pressed)
     if (pressed.join("").includes(secretCode)) {
        console.log("You entered the secret code!")
        cornify_add();
     }
})