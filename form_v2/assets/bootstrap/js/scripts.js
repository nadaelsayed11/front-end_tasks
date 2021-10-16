const Inputname = document.getElementById("Name");
const Inputemail = document.getElementById("Email");
const Inputmassage = document.getElementById("Massage");
const StanderdEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


function onclickfunction(){
    if(!(Inputname.value.length>1) || !(Inputname.value.length<26))
    {
        document.getElementById("errorname").style.display="inline";
    }else
    {
        document.getElementById("errorname").style.display="none";
        console.log("Name");
        console.log(Inputname.value);
    }

    if((!(Inputemail.value.length>5) || !(Inputemail.value.length<36)) || !Inputemail.value.match(StanderdEmail))
    {
        document.getElementById("erroremail").style.display="inline";
    }else
    {
        document.getElementById("erroremail").style.display="none";
        console.log("Email");
        console.log(Inputemail.value);
    }

    if(!(Inputmassage.value.length>0) || !(Inputmassage.value.length<101))
    {
        document.getElementById("errortext").style.display="inline";
    }else
    {
        document.getElementById("errortext").style.display="none";
        console.log("Massge");
        console.log(Inputmassage.value);
    }
}

