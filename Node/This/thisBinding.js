'use strict'
//When in strict mode, this doesn't refer to global or Window, it's just undefined.

function showFace(){
    return this.face;
}

const jeff = {
    face: '😲'
}

//Bind associates this to the object passed as argument (jeff) and taking it's argument face. 
const showJeffsFace = showFace.bind(jeff);

console.log(showJeffsFace());