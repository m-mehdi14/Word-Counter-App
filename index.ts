#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import { type } from "os";


const sleep =()=> {
    return new Promise((resolve) => {
        setTimeout(resolve,1500);
    })
}
async function wellcome() {
    figlet(' word counter App',(err,data)=>{
        console.log(gradient.fruit(data));
        
    });
    await sleep();
    console.log(chalk.yellowBright("Insert Your Text or Paragraph!"));
    console.log(chalk.cyanBright("I will count the Total Number of Words And Characters."));
    
}



async function question() {
    const answer:{text:string} = await inquirer.prompt([
        {
            type:"input",
            name:"text",
            message:"Write Or Paste Text Here : "
        }
    ])
    if(answer.text){
        type wordcount = (str:string)=> void;
        const wordCount:wordcount = async(string) =>{
            const words = string.trim().split(/\s+/g); 
            console.log(chalk.yellowBright("Total Words : ", words.length));
    
        }
        
        // answer.text.trim().split(' ');
        // console.log(chalk.yellowBright("Total Words : ", answer.text.length));
        
        console.log(chalk.yellowBright("Total Characters : ", answer.text.length));
        await wordCount(answer.text);
    }
}



async function startagain() {
   
    do {
        await wellcome();
        await question();
        var again:{restart:string}  = await inquirer.prompt([
            {
                type:"input",
                name:"restart",
                message:"Do you want to try more ?"
            }
        ]);
    } while (again.restart === "Yes" || again.restart === "yes" || again.restart === "y" || again.restart === "YES");
  

}
await startagain();
