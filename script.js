window.addEventListener('load', function(event){

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

// Interpolated
var a = 'h';
console.log('hello I am a %s string', 'G');
console.log(`hello I am ${a}`);

// Styled
console.log('%c I am great text', 'font-size: 50px; background: red');
// warning!
console.warn('oh no');

// Error :|
console.error('Error');
// Info
console.info('fun fact');
// Testing
console.assert(1 === 1, 'that is wrong!');
console.assert(1 === 2, 'that is wrong!');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is wrong');
// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);

  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years`);
  console.groupEnd(`${dog.name}`);

})

// counting
console.count('A');
console.count('A');
console.count('A');
console.count('B');
console.count('B');
console.count('B');
console.count('A');
console.count('A');
console.count('B');
console.count('B');
console.count('A');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
  });

//table
console.table(dogs);

});
