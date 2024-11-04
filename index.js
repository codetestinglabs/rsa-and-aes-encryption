import NodeRSA from "node-rsa";
import express from "express";
import CryptoJS from "crypto-js";

const app = express();


// RSA

let privateKey = "";

const rsaDecrypt = (text, key) => {
  let keyPrivate = new NodeRSA(key);
  let decrypt = keyPrivate.decrypt(text, "utf8");
  return decrypt;
};

const rsaEncrypt = (text, key) => {
  let keyPublic = new NodeRSA(key);
  let encrypt = keyPublic.encrypt(text, "base64");
  return encrypt;
};

const rsakey = () => {
  const key = new NodeRSA({ b: 1024 });
  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");

  return { publicKey, privateKey };
}

app.use(express.json());

app.get("/rsa/keys", (req, res) => {
  const rsa = rsakey()
  privateKey = rsa.privateKey

  res.status(201).json({
    data: rsa.publicKey
  })
})

app.post("/rsa/encrypt", (req, res) => {
  const body = req.body

  res.status(201).json({
    data: rsaEncrypt(body.data, body.key)
  })
})

app.post("/rsa/decrypt", (req, res) => {
  const body = req.body

  res.status(201).json({
    data: rsaDecrypt(body.data, body.key ?? privateKey)
  })
})

const aesEncryption =(data, key) => {
  return CryptoJS.AES.encrypt(data, key).toString();
}

const aesDecryption =(data, key) => {
  return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
}

app.post("/aes/encrypt", (req, res) => {
  const body = req.body
  const aes = aesEncryption(body.data, body.key)
  res.status(201).json({
    data: aes
  })
})

app.post("/aes/decrypt", (req, res) => {
  const body = req.body
  const aes = aesDecryption(body.data, body.key)
  res.status(201).json({
    data: aes
  })
})

app.get("/user-agent", (req, res) => {
  res.status(201).json({
    agent: req.headers['user-agent']
  })
})

app.listen(8860, () => {
  console.log(`App running port: 8860`);
})
