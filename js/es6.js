/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODOone: fill in your name and email and add some programming languages you know
// to the languages array
// TODOone: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Tony';
const email = 'first.last@coudeup.com';
const languages = ['html', 'css', 'javascript', 'C++'];


// TODOne: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});


// TODOne: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];


// TODOne: rewrite the following using arrow functions
users.forEach(({email}) => emails.push(email));
//you can do it like this too
users.forEach(user => names.push(user.name));


// TODOne: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODOne: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const person = {name: user.name, email: user.email, languages: user.languages};
  const { name, email, languages } = person;

  // TODOne: rewrite the assignment below to use template strings
  developers.push(`${name}'s email is ${email}, ${name} knows ${languages.join(", ")}`);
  console.log(developers);
});


// TODOne: Use `let` for the following variable
let list = '<ul>';

// TODOone: rewrite the following loop to use a for..of loop
for(let developer of developers) {

  // TODOne: rewrite the assignment below to use template strings
  list += `<li>${developer}</li>`;
};
list += '</ul>';

console.log(list);
