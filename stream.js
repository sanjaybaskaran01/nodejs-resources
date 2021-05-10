const fs=require('fs');

const readStream=fs.createReadStream('./docs/streamcheck.txt',{encoding:'utf-8'});
const writeStream=fs.createWriteStream('./docs/streamwritecheck.txt')

// readStream.on('data',(chunk)=>{
//     console.log('------NEW CHUNK-------');
//     console.log(chunk);
//     writeStream.write("\nNEW CHUNK\n");
//     writeStream.write(chunk);
// })

//piping

readStream.pipe(writeStream)