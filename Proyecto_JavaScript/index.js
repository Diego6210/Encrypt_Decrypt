var CryptoJS = require("crypto-js");

let message = "hola";
let password = "123";

let encrypt = true;

if(encrypt){
  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt(message, password).toString();
  console.log(ciphertext); 
}else{
  // Decrypt
  var bytes  = CryptoJS.AES.decrypt(message, password);
  console.log(bytes.toString(CryptoJS.enc.Utf8)); 
}

