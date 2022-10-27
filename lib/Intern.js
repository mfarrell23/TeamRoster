// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee= require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)  
        this.name = name
        this.role = "Intern"
        this.id = id
        this.email = email
        this.school = school
    }

    getRole(){
        return this.role
    }

    getSchool(){
        return this.school
    }

}
function internPrompt(){
    let response =  inquirer.prompt ()
    return response;
}

module.exports = Intern