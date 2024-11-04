# RSA and AES encryption using NodeJS

## Description

This is a simple RSA and AES encryption using NodeJS. Package name: 
1. `node-rsa`
2. `crypto-js`
3. `express`

## Getting Started

clone the repository from github
```shell
git clone https://github.com/abhishekrana/rsa-and-aes-encryption.git
cd rsa-and-aes-encryption
```

## Installation

```shell
npm install
```

## Run
```shell
npm start
```

## Methods

### RSA

1. `GET /rsa/keys` (Generate public and private key)
2. `POST /rsa/encrypt` (Return encrypted data) Parameter: (`data`, `key`)
3. `POST /rsa/decrypt` (Return decrypted data) Parameter: (`data`, `key`)

### AES

1. `POST /aes/encrypt` (Return encrypted data) Parameter: (`data`, `key`)
2. `POST /aes/decrypt` (Return decrypted data) Parameter: (`data`, `key`)

### User Agent

1. `GET /user-agent` (Return user agent)

## Author
__A B M Nasim__<br />
`Software Engineer`
>*Email: info@abmnasim.com* <br />
>*website: https://abmnasim.com*
