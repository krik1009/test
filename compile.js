// standard module
const path = require('path') // -> build a directory path from compile.js over to Inbox.sol. 
// to secure the cross platform compability (Cf. require('./contracts/Inbox.sol'))
const fs = require('fs') // file system module
const solc = require('solc') //solidity compiler

// set path to Inbox.sol - syntax: current dir, folder, file name
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
// __dirname = current directory (a constant defined by node)

// def source code by defining path and type of coding
const source = fs.readFileSync(inboxPath, 'utf8')

// compile Inbox.sol by defining source code and number of contracts attempted to compile
// module.exports  to access the compiled code 
// .contracts[':Inbox'] - access to the copmiled code (see the result of console.log(solc.compile(source, 1))
module.exports = solc.compile(source, 1).contracts[':Inbox']