// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');


fs.readFile('./file.txt', 'utf-8', (err, data) =>{
    if(err){
        console.log("Error during reading the file!!");
    }else{
        console.log(data);
        const dataToWrite = data.replace(/\s+/g," ");
        fs.writeFile('./file.txt', dataToWrite, (err)=>{
            if(err){
                console.log("Error during writing the file!!")
            }else{
                console.log("File Updated!!")
            }
        })
        
    }
})