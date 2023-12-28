// http
// url
// path
// fs

const fs = require("fs")
// console.log(fs);


// writing on file
const content = "hello everyone this is my first server by I can create file and also write into that file too. Now i'm just appending somthing on my existing file"

fs.appendFile("doc01.txt", content, (err) =>{
    if(err){
        console.log("Something wrong");
    }else{
        console.log("Sucsessful");
    }
})


// reading from file
fs.readFile("doc01.txt","utf8", (err, data) =>{
    if(err){
        console.log("Something wrong");
    }
    else{
        console.log(data);
    }
})


// changing name of exist file
fs.rename("doc01.txt", "doc02.txt", (err)=>{
    if(err){
        console.log("Something wrong");
    }else{
        console.log("Sucsessful rename");
    }
})


// remove file
fs.rm("doc02.txt", err =>{
    if(err){
        console.log("Something wrong");
    }else{
        console.log("removed");
    }
})