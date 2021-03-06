// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquierer = require('inquirer');
const fs = require ('fs')
const { message } = require ('statuses');

inquierer.prompt(
    [
        {
         type: 'input',
         message: 'What is your name?',
         name: 'fn',
         validate: (value)=> {if (value){return true} else {return 'you must input a value to continue'}},   
        },
        {
         type: 'input',
         message: 'What is the title of your project?',
         name: 'title',
         validate: (value)=> {if (value){return true} else {return 'you must input a value to continue'}},   
        },
        {
        type: 'input',
        message: 'How do you install your app?',
        name: 'installation',
        validate: (value)=> {if (value){return true} else {return 'you must input a value to continue'}},   
        },
        {
        type: 'input',
        message: 'Are there any instructions to follow?',
        name: 'instructions',
        validate: (value)=> {if (value){return true} else {return 'you must input a value to continue'}},
        },
        {
        type: 'input',
        message: 'How do you use your app?',
        name: 'usage',
        validate: (value)=> {if (value){return true} else {return 'you must input a value to continue'}},   
        },
        {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'git',
        validate: (value)=> {if (value){return true} else {return 'you must input a value to continue'}},    
        }
    ]
    ).then(({
        fn,
        title,
        installation,
        instructions,
        usage,
        git,
    })=>{
    const template = `# ${title}
    * [fn](#fn)
    * [title](#title)
    * [installation](#installation)
    * [instructions](#instructions)
    * [usage](#usage)
    * [git](#git) 
    `

    }
    );
// TODO: Create a function to write README file
createNewFile(title,template);
// TODO: Create a function to initialize app
function createNewFile(fileName,data){
fs.writeFile[`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Your readme has been generated');
})
}
