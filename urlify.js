function URLify(string) { // O(n)
    let urlString = ''

    for(let i = 0; i < string.length; i++) {
        if(string[i] === ' ') {
            urlString += '%20'
        } else {
            urlString += string[i]
        }
    }
    
    return urlString
}