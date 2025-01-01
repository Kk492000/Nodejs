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

// module summary
// 1)npm - npm stands for the node package manager and it allows you to manage your node project and its
// dependencies
// 2) you can utilize the project with the npm init
// 3) npm scripts can be defined in the package.json file to give you shortcuts to common tasks/commands

// third party packages
// 1)node project typically dont just use the core modules and custom code but also third party packages
// 2) you can install them via npm
// 3) you can differentiate between the production dependencies(--save) development dependencies(--save-dev)
// and global dependencies (-g)

//debugging
// 1) use the vs code node debugger to step into your code and go through it step by step
// 2) analyze variable value at runtime
// 3) look into (and manipulate ) variables at runtime
// 4) set breakpoints cleverly(respect the async/ event driven architecture)
