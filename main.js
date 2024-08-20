#!/usr/bin/env node

const organizeObj = require("./commands/organize");
const treeObj = require("./commands/tree");
const helpObj = require("./commands/help");

const getInfo = process.argv.slice(2);
console.log(getInfo) ;


const command = getInfo[0];
const directoryPath = getInfo[1];

switch(command){
    case "help":
        helpObj.helpFunction();
        break;
    case "tree":
        treeObj.treeFunction(directoryPath);
        break;
    case "organize":
        organizeObj.organizeFunction(directoryPath);
        break;
    default:
        console.log(`💫❌ ${command} is not recognized, Please enter a valid command`);
        break;
}











