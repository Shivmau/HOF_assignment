// Problem 3: Taking the following array into consideration get the output as given below:
// arr = [3,4,5,6,7]
// Output ==> 3 - 5 - 7
// Hint: You have to use forEach and conditional statement over here.

let arr=[3,4,5,6,7]
let output=""
for(let i=0; i<arr.length; i++){
    if(i%2==1){
           output+="-"
    }
    else{
        output+=arr[i]
    }
}
console.log(output)
