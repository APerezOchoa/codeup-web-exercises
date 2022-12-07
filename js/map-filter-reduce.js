const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2) .filter() - filter users that have at least 3 languages
const threeLang = users.filter(lang => lang.languages.length >= 3);
console.log("#2) " + threeLang);


// 3) .map() - create an array of strings with user's emails
const emails = users.map(address => address.email)
console.log("#3) " + emails);


// 4) .reduce() - to get total years experience, calc avg
const sum = users.reduce((accumulation, currentNumber ) => {
    accumulation += currentNumber.yearsOfExperience;
    return parseFloat(accumulation)/5;
}, 0); //the starting value of accumulation is 0
console.log("#4) " + sum);


// 5) .reduce() - to get longest email from users
const longestEmail = emails.reduce((longEmail, anEmail) => {
    if (anEmail.length > longEmail.length){
        longEmail = anEmail;
    }
    return longEmail;
},{length: 0});
console.log("#5) " + longestEmail);


// 6) .reduce() - to get the list of user's names in a single string
const userNames = users.map(names => names.name).reduce((bigString, oneUser) =>{
    bigString += ", " + oneUser;
    return bigString;
})
console.log("#6) " + userNames);
