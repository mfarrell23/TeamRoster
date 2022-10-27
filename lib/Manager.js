// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer= require('inquirer');
const Employee= require('./Employee')

class Manager extends Employee{
    
    constructor(name, id, email, officeNumber){
        this.name = name
        this.role = "Manager"
        this.id = id
        this.email = email
        this.officeNumber = officeNumber
   
    }

    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return this.role
    }
};


function init(manager) {
    console.log("calling init function");
    fs.writeFileSync('index.html',generateHTML(manager));
}
module.exports = Manager