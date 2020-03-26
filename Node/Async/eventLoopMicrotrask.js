'use strict'

/**Task, Animation renders and Microtrask works different

Task resolves a pending task, and then switch to next thing

Renders resolves all pendings, but if a new rendering comes while rendering
it it's queued to the next frame

Microtask resolves all pending microtask, if a new microtask come while resolving one another
it keeps resolving microtask (Can lock rendering)

**/

//Promises are resolved into microtask, since we are queueing more and more microtask
//Eventloop will run them before any other task or render until microtask completion.
function loop(){
    Promise.resolve().then(loop);
}
loop();