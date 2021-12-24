mouse_event=" ";
 var last_x ;
 var last_y ;
canvas= document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="red";
width=10;
canvas.addEventListener("mousedown",mousedown);
 function mousedown(e){
     mouse_event="mousedown";
     console.log(mouse_event);
     width_of_line = document.getElementById("width_of_line").value;
     radius= document.getElementById("radius").value;


 }
canvas.addEventListener("mousemove",mousemove);
function mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

if (mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(current_x,current_y,radius,0,2*Math.Pi);
    console.log("last x = "+last_x+"last y = "+last_y);
    console.log("current  x = "+current_x+ "current_y = "+current_y);
    ctx.stroke();

}
last_x=current_x;
last_y=current_y;

}
function clear(){
    ctx.clearRect(0,0,800,600);

}




