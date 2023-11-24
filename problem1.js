// Problem 1: Find the average of elements present at odd index of the following array.
// let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let sol=arr.filter((element,index)=> index%2==1)
let average=sol.reduce((acc,cur)=>acc+cur,0)/sol.length
console.log(average)

// console.log(sol)
// let a=sol.length
// let sum=0
// for(let i=0; i<sol.length; i++){
//     sum=sum+sol[i]
// }
// let n=sum/a
// console.log(n)