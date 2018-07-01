console.log('Starting app');

setTimeout(() => {
    console.log('First setTimeout');
}, 2000);

setTimeout(() => {
   console.log('Second setTimeout');
}, 0);


console.log('Finishing app');

// Node Async Basics

// 1. Call Stack - Executes the code, starting with the main() wrapper function, think of it like a can of tennis balls.
// 2. Node APIs - Processes Node specific APIs, like setTimeout()
// 3. Callback Queue - Keeps items in the queue for when the call stack clears
// 4. Event Loop - Checks the call stack to see if it's empty, if so, then it runs the code from the Callback Queue

// Expected output:
// Starting app
// Finishing app
// Second setTimeout
// First setTimeout
