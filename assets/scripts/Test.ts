import { AES, enc } from "../crypto/crypto-ts";

let param = "hello world";
let encode = AES.encrypt(JSON.stringify(param), "123456").toString();
console.log("encode:" + JSON.stringify(encode));

let decode = AES.decrypt(encode, "123456").toString(enc.Utf8);
console.log("decode: " + decode);