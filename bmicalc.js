let cal=document.getElementById("calc");

cal.addEventListener("click",function(){
    let height=document.getElementById("height").value;
    let weight=document.getElementById("weight").value;
    document.getElementById("bmi").value=(weight/(height*height))*10000;
})