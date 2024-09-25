function vote(){
    var name=document.getElementById("name").value;
    var pass=100 *math.random();
    var result=document.getElementById("result").value;
    result.innerHTML=name +",you have scored:"
    +pass.toFixed(2)+"%";
    if(Marks>=0 && Marks<=35){
        resultmessage=name+"has failed with"+Mark+"marks.";
    }else if(Marks>35 && Marks<=60){
        resultmessage=name+"has passed with "+ Marks+
    }else
