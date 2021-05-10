const fs = require("fs");

//reading files

// fs.readFile('./docs/checking.txt',(err,data)=>{
//     if (err){
//         console.log("Checking")
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log("last line");

///Writing file

// fs.writeFile('./docs/checking.txt','hello world',()=>{
//     console.log("File was written");
// })

//Directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder was created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder was deleted");
  });
}

//Deleting a file

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}else{
    fs.writeFile('./docs/deleteme.txt',"Hello yo",()=>{
        console.log("deleteme.txt file was created");

    })
}
