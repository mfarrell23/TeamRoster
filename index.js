const inquirer= require('inquirer');
const fs= require('fs');
const Engineer = require('./lib/Engineer')

class container {
    
}

const askQuestion = ()=>
{
    let e = new Engineer("Foo", 1, "test@test.com", testValue);    
    
    
    inquirer.prompt([
        {
            type:"list",
            message:"do you want to add a Teammate?",
            name:"addTeam",
            choices:["yes","quit"]
        },
        {
            type:'list',
            message: 'what type of teamate do you want?',
            name: "getTeam",
            choices:['Manager','Engineer','Intern'],
        }
]).then(ans=>{
        if(ans.addTeam==="yes"){
            if(ans.getTeam==="Manager"){

            }else if(ans.getTeam==="Engineer"){
                engineerPrompt().then(answers => {
                    
                })
            }else if(ans.getTeam==="Intern"){

            }else{
                console.log("Invalid Choice")
            }

            askQuestion();
        } else {
            //escape clause, if user chooses quit
            console.log("goodbye!")
        }
    })
}
function init(data) {
    
    console.log("calling init function");
    fs.writeFileSync('index.html',generateHTML(data));
}