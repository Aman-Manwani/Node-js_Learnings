const fs = require('fs');
const fsPromises = require('fs').promises;
const { dirname } = require('path');
const path = require('path');

//to prevent callback hell we use fs promises 
const fileops = async () => {
    try{
        const data =await fsPromises.readFile(path.join(__dirname,'files','read1.txt'),'utf-8')
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
fileops();

//to delte a file we have to use unlink i.e fs.unlink

// gives buffer data
fs.readFile('./files/read.txt',(err,data) =>{
    if(err) throw err;
    console.log(data);
})


// this process is asynchronous in nature
// reading data from a file 
fs.readFile(path.join(__dirname,'files','read1.txt'),'UTF-8',(err,data) =>{
    if(err) throw err;
    console.log(data);
})


//writing data in a file if exists if not then do this with making a file
fs.writeFile(path.join(__dirname,'files','write.txt'),'hii here is a dummy text file',(err) =>{
    if(err) throw err;
    console.log('operation complete');
})


//to append text to a file
fs.appendFile(path.join(__dirname,'files','write.txt'),'hii here is a aman text file',(err) =>{
    if(err) throw err;
    console.log('operation complete');
})

// if file is not present it doesnt show err to get the error we have to specify below lines 
process.on('uncaughtException',err =>{
    console.error(`there is error called ${err}`);
    process.exit(1);
})

// to rename the file 
fs.rename(path.join(__dirname,'files','read.txt'),path.join(__dirname,'files','read1.txt'),(err) => {
    if(err) throw err
    console.log('rename complete')
})

//to make a new directory
//to check whether this dir is present of not use existsSync operation
//to remove or delete the directory use fs.rmdir(path,err)

if(!fs.existsSync('./new_dir')){
    fs.mkdir('./new_dir',(err) =>{
        if(err) throw err
        console.log('dir created');
    })
}