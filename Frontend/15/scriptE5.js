function isLeap() {
    
      var x = prompt("Enter Year");
      x = parseInt(x);

      if(x%4 === 0){
        if(x%100 ===0){
            if( x%400 ===0){
                alert("Leap Year");
            }
            else{
                alert("Not a Leap Year");
            }
        }
        else{
            alert("Leap Year");
        }
      }
      
    
    }

isLeap();