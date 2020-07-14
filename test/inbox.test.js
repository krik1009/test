// make assertion on test
const assert = require('assert') 
const ganache = require('ganache-cli')

// start w upper case - web3 needs a constractor to create instances of web3 libraries
const Web3 = require('web3') 

// create an instance of Web3 and connect local test network (must use provider)
const web3 = new Web3(ganache.provider())