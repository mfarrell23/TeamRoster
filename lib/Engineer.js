// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee= require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        this.name = name
        this.role = "Engineer"
        this.id = id
        this.email = email
        this.github = github
    }

    getRole(){
        return this.role
    }

    getGithub(){
        return this.github
    }
}

function engineerPrompt(){
    let response =  inquirer.prompt ([
    
        {
            type: 'input',
            message: 'What is your name?',
            name: 'getName',
        },
        {
            type: 'input',
            message: 'What is your job role',
            name: 'getRole',
        },
        {
            type: 'input',
            message: 'What is your employee id?',
            name: 'getId',
        },
        {
            type: 'input',
            message: 'What is your email',
            name: 'getEmail',
        },
        {
            type: 'input',
            message: 'What is your github?',
            name: 'gethub',
        }
    ])
    return response;
}

function init(engineer) {
    console.log("calling init function");
    fs.writeFileSync('index.html',generateHTML(engineer));
}

module.exports = Engineer