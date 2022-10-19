const name=[];
function receive(){
    let n=document.getElementById("nm").value;
    name.push(n);
    //nm.value="";
    console.log(n);
    let totalName=name.length;
    document.getElementById("demo").innerHTML=totalName;
    nm.value=""; 
}

