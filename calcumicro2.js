let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(so)=>{
        if(so.target.innerHTML == 'AC'){
            string=" ";
            document.querySelector('input').value=string;
        }
        // else{
        //     console.log(so.target);
        //     string+=so.target.innerHTML;
        //     document.querySelector('input').value=string;
        // }
        if(so.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else{
            console.log(so.target);
            string+=so.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})
