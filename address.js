//引入包
 const secp256k1 = require("secp256k1/elliptic")
 const createKeccakHash =  require("keccak")
 const crypto = require('crypto')

 // 生成私钥
 const privateKey = crypto.randomBytes(32)
 // 生成公钥
 const publicKey = secp256k1.publicKeyCreate(privateKey, false).slice(1)
 // 生成地址
 const address = createKeccakHash("keccak256").update(publicKey).digest().slice(-20)

 // 查看结果

 console.log(privateKey.toString('hex'));
 console.log('------------');
 console.log(publicKey.toString('hex'));
 console.log('------------');
 console.log(address.toString('hex'));