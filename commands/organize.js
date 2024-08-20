const fs = require("fs");
const path = require("path");
const types = require("../utility/utility.js");

exports.organizeFunction = function (directoryPath){
    //console.log("organize executed");
    if(directoryPath == undefined) {
        // console.log(" directory path required !!!");
        directoryPath =  process.cwd()
        
    }
    if(!fs.existsSync(directoryPath)){
        console.log(directoryPath);
        console.log("Please enter valid path !!!");
        return ;
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

