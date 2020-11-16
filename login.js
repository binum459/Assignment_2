var pwd = document.getElementById("pwd");
var pwderror = document.getElementById('pwderror');

function valid(){
    
    
    if(pwd.value.length<10){
            pwderror.innerHTML="Password less than 10";
            pwd.style.border="2px solid red";
            return false;
        }
        else if(pwd.value.length>10)
        {
            pwderror.innerHTML="Password greater than 10";
            
            pwd.style.border="2px solid red";
                return false;
        }
        else{
            return true;
         }
        }


 


        

