function hackerrankInString(s) {
    let chars = "hackerrank".split("");
    for(const char of s){
        if(char === chars[0]) chars.shift()
        if(chars.length === 0) return "YES"
    }
    return "NO"
}
