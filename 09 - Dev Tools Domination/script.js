const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated
console.log('Hello I am a %s string', 'cool')
console.log(`Hello I am a ${"great"} string`)

// table
console.table(dogs)

// Styled
console.log('%c I am some great text', 'font-size:20px; background:red; text-shadow: 3px 3px 0 blue')

// warning!
console.warn('WARNING')

// Error :|
console.error('ERROR')

// Info
console.info('INFO')

// Testing
const p = document.querySelector('p')
// console.assert(1 === 1, 'That is wrong!')
// console.assert(1 === 2, 'That is wrong!')
console.assert(p.classList.contains('ouch'), 'That is wrong!')
// throw and error if is false

// clearing
// console.clear()

// Viewing DOM Elements
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`) // or .groupCollasped
    console.log(`${dog.name} is ${dog.age} years old.`)
    console.log(`${dog.name} is ${dog.age * 7} dog years old.`)
    console.groupEnd(`${dog.name}`)
})

// counting
console.count('word')
console.count('word')
console.count('another word')
console.count('word')
console.count('word')
console.count('another word')
console.count('another word')
console.count('word')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/joycehwchan')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data')
        console.log(data)
    })

