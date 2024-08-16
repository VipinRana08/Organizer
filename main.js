#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const getInfo = process.argv.slice(2);
console.log(getInfo) ;

// node server.js help 
// node server.js tree directoryPath
// node server.js organize directoryPath

const command = getInfo[0];
const directoryPath = getInfo[1];
const types = {
    media : ["mp4", "mkv", "png", "jpg"],
    archives : ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents : ["doc", "pdf", "xls", "xlsx", "docx", "text"],
    apps : ["exe", "dmg", "pkg"]
};
switch(command){
    case "help":
        helpFunction();
        break;
    case "tree":
        treeFunction(directoryPath);
        break;
    case "organize":
        organizeFunction(directoryPath);
        break;
    default:
        console.log(`💫❌ ${command} is not recognized, Please enter a valid command`);
        break;
}

function helpFunction(){
    console.log(` List of all commands :
                        1. help
                        2. tree "Path of the directory"
                        3. organize "Path of the directory"                
        `);
}

function treeFunction(directoryPath){
    if(directoryPath == undefined) {
        // console.log(" directory path required !!!");
        treeHelper(process.cwd());
        return ;
    }
    if(!fs.existsSync(directoryPath)){
        console.log("Please enter valid path !!!");
    }
    treeHelper(directoryPath, "");
  //  console.log("tree executed");

  
}
function treeHelper(src, res){
    let isFile = fs.lstatSync(src).isFile();
    if(isFile){
        let fileName = path.basename(src);
        console.log(res +"|--> " + fileName);
    }else{
        let dirName = path.basename(src);
        console.log(res +"|__> " + dirName);
        let subDir = fs.readdirSync(src);
        for(let i = 0; i < subDir.length; i++){
            let subPath = path.join(src, subDir[i]);
            treeHelper(subPath, res +"\t");
        }
    }
}

/*
 organize:

 1. will take input -> directory path
 2. will create a new directory for organizing the  files
 3. will verify the categories of all files and that directory
 4. based on the categories will create organized directories within that organized directory and will move those files    


*/

function organizeFunction(directoryPath){
    //console.log("organize executed");
    if(directoryPath == undefined) {
        // console.log(" directory path required !!!");
        directoryPath =  process.cwd()
        
    }
    if(!fs.existsSync(directoryPath)){
        console.log("Please enter valid path !!!");
    }

    const destinationPath = path.join(directoryPath, "Organized");
    if(!fs.existsSync(destinationPath)){
        fs.mkdirSync(destinationPath);
    }
    helper(directoryPath, destinationPath)
}


function helper(src, dest){
    const files = fs.readdirSync(src);
    for(let f = 0; f < files.length; f++){
        let filePath = path.join(src, files[f]);
        let isFile = fs.lstatSync(filePath).isFile();
        if(isFile){
            let category = getCategory(files[f]);
            console.log(files[f], "belogs to category :", category);
            moveFile(filePath, dest, category);
        }
    }
}

function getCategory(file){
    let ext = path.extname(file).slice(1);
    // console.log(ext);
    for(let type in types){
        let extType = types[type];
        for(let e = 0; e < extType.length; e++){
            if(extType[e] == ext){
                return type;
            }
        }
    }
    return "others"
}
function moveFile(src, dest, category){
    let categoryPath = path.join(dest, category);
    if(!fs.existsSync(categoryPath)){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(src);
    let destinationPath = path.join(categoryPath, fileName);
    fs.copyFileSync(src, destinationPath);
    fs.unlinkSync(src);
    console.log(fileName + " copied to :  " + category);
}