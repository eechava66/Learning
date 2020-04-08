const isAlmostPalindrome = (str) => {
    let fail = 0;
    for(i = 0; i < str.length/2 ; i++){
        console.log(`${str[i]} ${str[str.length -1 -i]}`)
        if (!(str[i] === str[str.length -1 -i])) {
            fail ++
        }
    }
    console.log(fail)
    return (fail <= 1) ? true : false;
}


console.log(isCasiPalindromo('abcca'))