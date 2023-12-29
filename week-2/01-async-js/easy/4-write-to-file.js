// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const dataToWrite = "Hello, New data has been written";

fs.writeFile('./file.txt', dataToWrite, "utf-8", (err)=>{
    if(err){
        console.log("Error")
    }else{
        console.log("File Updated")

        // Read file contents
        fs.readFile('./file.txt', "utf-8", (err,data)=>{
            if(err){
                console.log("Error")
            }else{
                console.log("File Contents: "+ data)
            }
        })
    }

})

// expensive operation
let sum = 0;
for (let i=0; i<100000; i++){
    sum += i;
}
console.log(sum);