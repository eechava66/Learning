'use strict'
//This will lock the eventloop since it's an infite task
while(true);
    //do nothing


//This won't lock the eventloop since it's adding more tasks to the queue
function loop(){
    setTimeout(loop,0);
    //do nothing
}
loop();