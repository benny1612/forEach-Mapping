// const nums =["hi","bye","die"]
// for (let i =0 ; i <= nums.length;i++){
//     const elemnt = nums[i]
//     console.log(elemnt.toUpperCase())
// }
// function processData(){
//     const data = "";
//     console.log("ID",data.id)

//     const list=[1,2,3]
    
//     list.pop();

//     const user = {name:"dana",age:30};
//     user.age
// }

// processData()
// function countletters(str){
//     const parts = str.split(" ")
//     let total = 0
//     for (let i =0 ; i< parts.length;i++){
//         total +=parts[i]
//     }  
//     return total
// }
// console.log(countletters("hello world"))
function sumAges(str){
    const parts =str.split(" ")
    let total =0 
    for (let i =0 ; i<parts.length ; i++){
        total += parseInt(parts[i])
    }
    return total
}
console.log(sumAges("10 20 30"))