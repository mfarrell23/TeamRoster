// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee= require('./Employee');

class Engineer extends Employee{
    
    constructor(name, id, email, github){
        super(name, id, email)   
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
    let response =  inquirer.prompt ()
    return response;
}

module.exports = Engineer