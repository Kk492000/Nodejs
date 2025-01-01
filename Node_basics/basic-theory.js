//core modules - 1)http- launch a server, send requests
// 2)https
// 3)fs
// 4)path
// 5)os

//how web works
//client -> request -> server -> response -> client
// 1) nodejs runs non-blocking js code and uses an event loop for running your logic
// 2) a nodejs program exits as soon as there is no more work to do
// 3) the createServer function never finishes by default

//asynchronous code
// js code is non blocking
// uses callbacks and events

//requests and responses
// 1)parse request data in chunks (Streams and buffers)
// 2) avoid double responses

//nodejs core modules
// 1) nodejs ships with multiple core modules (http , fs, path)
// 2) core modules can be imported into any file to be used there
// 3) imported via require module

//the node module system
// 1) import via ('./path-to-file') for custom files or require('module') for core and third party modules
// 2) export via module.exports or just exports (for multiple exports)

//types of errors
// 1)syntax errors
// 2) runtime errors
// 3) logical errors
