const fs = require('fs');

//to get data of any file in chunks then we use this 
const rs = fs.createReadStream('./files/read1.txt',{encoding:'utf-8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');

// rs.on('data',(datachunk) =>{
//     ws.write(datachunk);
// })

//another way of doing this in chunks to avoid listener
rs.pipe(ws);
