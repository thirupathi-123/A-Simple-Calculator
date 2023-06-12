let input=document.getElementById('inputbox');
// Assaining input the which value we enter and getting the element from html to javascript by id we assaigned in html
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            // Taking input as a string from user
            input.value=string;

        }
        else if(e.target.innerHTML=='AC'){
            // If user clicks AC button then empty string is displayed
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
             // If user clicks DEL button then one number from the string is deleted and rest displayed
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
        input.value=string;
        }
        
    })
})