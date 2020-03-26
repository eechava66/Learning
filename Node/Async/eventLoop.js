'use strict'

//L1
//Shows first cause is running in main thread
console.log('Sync 1!')

//L2
//Queued for future task because setTimeout  (Eventloop thing)
setTimeout(_=> console.log('Timeout 2!'),0);

//L3
//Queued for micro task inmediately after this current task (Higher priority than timeout)
Promise.resolve().then(_=>console.log('Promise 3!'));

//L4
//Final part of the task! (Executes first than queued)
console.log('Sync 4!')