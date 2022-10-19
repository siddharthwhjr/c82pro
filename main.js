var mouse_event="empty";

var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "black";

width_of_line = 1;


radius = 40;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){

    mouse_event="mouseDown";
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;


}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_mousex = e.clientX - canvas.offsetLeft;
    current_mousey = e.clientY - canvas.offsetTop;

    if(mouse_event == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_mousex, current_mousey, radius, 0, 2*Math.PI);

        console.log("last position of x and y coordinates =");
        console.log("x =" + last_position_of_x + "y =" + last_position_of_y );
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y coordinates =");
        console.log("x =" + current_mousex + "y =" + current_mousey );
        ctx.lineTo(current_mousex, current_mousey);
    }

    last_position_of_x = current_mousex;
    last_position_of_y = current_mousey;
}


canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event="mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseLeave";
}

function clearRect(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}
