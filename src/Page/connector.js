const { ethers } = require("ethers");

const abi = [
 {
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "uint256",
    "name": "certificateId",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "studentName",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "courseName",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "issueDate",
    "type": "uint256"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "issuer",
    "type": "address"
   }
  ],
  "name": "CertificateIssued",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "studentName",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "courseName",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "_dateOfGraduation",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "issueDate",
    "type": "uint256"
   }
  ],
  "name": "issueCertificate",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "certificates",
  "outputs": [
   {
    "internalType": "string",
    "name": "studentName",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "courseName",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "DateOfGraduation",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "issueDate",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "issuer",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "certificateId",
    "type": "uint256"
   }
  ],
  "name": "getCertificate",
  "outputs": [
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "owner",
  "outputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "totalCertificates",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0x76118a37cCbf2b99Cc371F9E1B5017065103d5c1"

export const contract = new ethers.Contract(address, abi, signer)
