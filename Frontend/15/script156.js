var Output = [];
var count = 1;



function fizbuzz(){

    while (count <= 100) {
        if(count%3===0){
            Output.push("Fizz")
        }else if(count %5 ===0){
            Output.push("Buzz");

        }
        
        else{
            Output.push(count);
        }
        count++;
    }
    
console.log(Output);

   
}

fizbuzz();