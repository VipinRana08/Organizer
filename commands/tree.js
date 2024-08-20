const fs = require("fs");
const path = require("path");

exports.treeFunction = function(directoryPath){
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
        console.log(res +" |-- " + fileName);
    }else{
        let dirName = path.basename(src);
        console.log(res +" |--> " + dirName);
        let subDir = fs.readdirSync(src);
        for(let i = 0; i < subDir.length; i++){
            let subPath = path.join(src, subDir[i]);
            treeHelper(subPath, res +"\t");
        }
    }
}
