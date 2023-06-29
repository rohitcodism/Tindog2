/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import { type } from "os";
import qr from "qr-image";
import fs from "fs";
inquirer
    .prompt([
        {
            message:"Enter the URL to make a QR : ",
            name:"URL",
        },
    ])
    .then((answers)=>{
        const url = answers.URL;
        var qr_svg = qr.image(url, {type: 'png'});
        qr_svg.pipe(require('fs').createWriteStream('qr_img.png'));

        writeFile('URL.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch((error)=>{
        if(error.isTtyError){

        }else{

        }
    })




var svg_string = qr.imageSync('I love QR!', { type: 'svg' });