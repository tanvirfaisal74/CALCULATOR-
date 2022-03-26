var showres = document.querySelector('.text_field')

function calc(a){
    showres.value=showres.value+a;
}
function result(b){
    var res= eval(showres.value);
    showres.value=res;
}

function squarrt(c){
   res=showres.value;
   showres.value= Math.sqrt(res);
}

function deletee(n){
    res=showres.value;
    showres.value=res.slice(0, -1);
}