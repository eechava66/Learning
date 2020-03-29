const helloPromise =  () => {
    return new Promise((resolve,reject) =>{
        if(false)
            resolve('Works!')
        else
            reject('Does not work')
    })
}


helloPromise()
    .then(response => console.log(response))
    .then(_=> console.log('Yay!'))
    .catch(err => console.log(err))