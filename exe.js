// exe1
const arr=[1,"2","3","4"]
function doubleValues(arr){
       const newarr = arr.map((i) => i*2)
        return newarr
}
// console.log(doubleValues(arr))

// exe2
function onlyEvenValues(arr){
    const even_arr=arr.filter((i) => i%2===0)
    return even_arr
}
// console.log(onlyEvenValues(arr))

// exe3

function showFirstAndLast(arr){
    const first_and_lest=arr.filter((num,i)  => (i==0 || i ===arr.length-1) && typeof(num)==="string")
    return first_and_lest   
} 
// console.log(showFirstAndLast(arr))

// exe4
function vowelCount(str) {
    const arr = [...str];
    const vowels = "aeiouAEIOU";
    const obj = {};

    arr.forEach(element => {
        if (vowels.includes(element)) {

            if (element in obj) {
                obj[element] += 1;
            } else {
                obj[element] = 1;
            }
        }
    });

    return obj;
}
// console.log(vowelCount("aaaeeeeeeabc"))

// exe5
function capitalize(str){
    return str.toUpperCase()
    
}
// exe6
function shiftLetters(str) {
    return [...str].map(ch =>
        String.fromCharCode(ch.charCodeAt(0) - 1)
    ).join('');
}

// console.log(shiftLetters("bcd"))


// console.log(shiftLetters("נבש"))
function swapCase(str) {
    return [...str].map(ch =>
        String.fromCharCode(ch.charCodeAt(0) - 32)
    ).join('');
}

console.log(swapCase("bcd"));
