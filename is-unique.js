function isUnique(string) { //Solution w/ object, O(n) time
    let tracker = {}

    for(let i = 0; i < string.length; i++) {
        if(tracker[string[i]]) {
            return false
        } else {
            tracker[string[i]] = true
        }
    }

    return true
}


function isUniqueNoOtherDataStructure(string) { //Solution w/ no other data structure, O(n log n)? time
    let sorted = string.split('').sort()
    
    let last

    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] === last) {
            return false
        } else {
            last = sorted[i]
        }
    }

    return true
}