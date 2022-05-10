var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

var imgNum = 0;
var img = new Image();

function playSequence() {
    var timer = setInterval(function() {
        console.log("Time Interval : " + imgNum);
        
        if(imgNum > 86) {
            imgNum = 0;
        }

        player(imgNum);
        imgNum++;
    }, 33);   // 인터벌 타이머
}

function player(num) {
    console.log("number : " + num);
    img.src = "../images/crow/crow" + num + ".png";
}

img.addEventListener("load", function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clearRect(x좌표, y좌표, 너비, 높이)
    ctx.drawImage(img, 0, 0);   // (변수, x좌표, y좌표)
});

playSequence();