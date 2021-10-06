function checkPermutation(string1, string2) { // O((n log n) + (m log m))
    if(string1.length != string2.length) {
        return false
    }
   
    if(string1.split('').sort().join() != string2.split('').sort().join()) {
        return false
    }

    return true
}

function checkPermutation(string1, string2) { // O(n) I think
    if(string1.length != string2.length) {
        return false
    }

    let tracker = {}

    for(let i = 0; i < string1.length; i++) {
        tracker[string1[i]] = tracker[string1[i]] ? tracker[string1[i]] + 1 : 1
        tracker[string2[i]] = tracker[string2[i]] ? tracker[string2[i]] - 1 : -1
    }

    for(const char in tracker){
        if(tracker[char] != 0) {
            return false
        }
    }

    return true
}
