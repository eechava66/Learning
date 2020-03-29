const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout( _=> resolve('Hello world'),3000)
            : reject (new Error('Error'));
    });
}

helloWorld().then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(_=> console.log('end'))