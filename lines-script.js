// make sure that dom has loaded before we try execute js
window.onload = function () {
    // definitions
    const canvas = document.getElementById("line-canvas");
    const context = canvas.getContext("2d");

    const canvas2 = document.getElementById("complex-lines");
    const context2 = canvas2.getContext("2d");

    const canvas3 = document.getElementById("line-caps");
    const context3 = canvas3.getContext("2d");

    // draw line steps
    context.beginPath(); //reset the context state
    context.strokeStyle = "red"; // colour of the line
    context.lineWidth = 10; // thickness of the line
    context.moveTo(30, 70); // moveTo(x, y) -> starting point of the line
    context.lineTo(130, 70); // line(x,y) -> end point of the line
    context.stroke(); //draws the line


    // complex lines - long hand
    // context2.beginPath();
    // context2.moveTo(30, 30);
    // context2.lineTo(80, 80);
    // context2.stroke();
    //
    // context2.beginPath();
    // context2.moveTo(80, 80);
    // context2.lineTo(130, 30);
    // context2.stroke();
    //
    // context2.beginPath();
    // context2.moveTo(130, 30);
    // context2.lineTo(180, 80);
    // context2.stroke();
    //
    // context2.beginPath();
    // context2.moveTo(180, 80);
    // context2.lineTo(230, 30);
    // context2.stroke();

    // complex lines - short hand
    context2.beginPath();
    context2.moveTo(30, 30);
    context2.lineTo(80, 80);
    context2.lineTo(130, 30);
    context2.lineTo(180, 80);
    context2.lineTo(230, 30);
    context2.stroke();

    // Line Caps -> context.lineCap = '';
    // - butt -> default
    // - round
    // - square

    // first line
    context3.beginPath();
    context3.lineCap = "butt";
    context3.strokeStyle = "red";
    context3.lineWidth = 10;
    context3.moveTo(70, 50);
    context3.lineTo(160, 50);
    context3.stroke();

    // second line
    context3.beginPath();
    context3.lineCap = "round";
    context3.strokeStyle = "blue";
    context3.lineWidth = 10;
    context3.moveTo(70, 75);
    context3.lineTo(160, 75);
    context3.stroke();

    // third line
    context3.beginPath();
    context3.lineCap = "square";
    context3.strokeStyle = "green";
    context3.lineWidth = 10;
    context3.moveTo(70, 100);
    context3.lineTo(160, 100);
    context3.stroke();
}