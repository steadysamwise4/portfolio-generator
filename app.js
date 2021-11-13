const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(Aname, githuh);



// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!')
// });


// const printProfileData = profileDataArr => {
//     for(let i = 0; i < profileDataArr.length; i++) {

//         console.log(profileDataArr[i]);
//     }

//     console.log('====================');

//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);