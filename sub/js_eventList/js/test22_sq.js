var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");
var scrollYPos = 0;
var img = new Image();

img.src = "./images/crow/crow0.png";

window.addEventListener("scroll", function(e) {
    scrollYPos = Math.round(window.scrollY/18); // 가장 가까운 정수 값으로 변환시켜서 반환
    console.log(scrollYPos);

    if (scrollYPos > 86) {
        scrollYPos = 86;
    }

    player(scrollYPos);
});

function player(num) {
    // console.log("number : " + num);
    img.src = "./images/crow/crow" + num + ".png";
}

img.addEventListener("load", function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clearRect(x좌표, y좌표, 너비, 높이)
    ctx.drawImage(img, 0, 0);   // (변수, x좌표, y좌표)
});