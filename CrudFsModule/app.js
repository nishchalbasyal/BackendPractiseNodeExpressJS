//Create Folder of Your Name 'Nishchal'
//Create a File of Name bio.txt with Some Data
//Add More Data in mybio.txt
//Read Data Without Buffer
//rename bio.txt to mybio.txt
//delete file


// const fs = require('fs');


//Create Folder of Your Name 'Nishchal'
// fs.mkdirSync('Nishchal')

//Create a File of Name bio.txt with Some Data
// const createFolder = fs.writeFileSync('Nishchal/bio.txt','blue color is best',{flag:'a'});


//Add More Data in mybio.txt
// fs.appendFileSync("Nishchal/bio.txt","I am A Best Programmer");


//Read Data Without Buffer
// const readFile = fs.readFileSync('Nishchal/bio.txt','utf8');
// console.log(readFile)

//rename bio.txt to mybio.txt
//  fs.renameSync("Nishchal/N.txt","Nishchal/mybio.txt");

//delete
// fs.unlinkSync("Nishchal/mybio.txt");