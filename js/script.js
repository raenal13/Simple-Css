const myHeader = document.getElementById("myHeader");
myHeader.style.color = "rgb(173, 32, 32)";
myHeader.style.padding = "15px";
myHeader.style.textAlign = "right";

const teks = document.getElementsByClassName("para-text")[0];
teks.style.color = "rgb(250, 250, 250)";
teks.style.paddingTop = "200px";
teks.style.position = "relative";

const teks = document.getElementsByClassName("para-text2")[0];
teks.style.color = "rgb(250, 250, 250)";
teks.style.paddingTop = "200px";
teks.style.position = "relative";

const card = document.getElementsByClassName("card")[0];
card.style.backgroundColor = "white";
card.style.padding = "10px";
card.style.marginTop = "20px";

const leftcolumn = document.getElementsByClassName("leftcolumn")[0];
leftcolumn.style.float = "left";
leftcolumn.style.width = "45%";
leftcolumn.style.paddingTop = "200px";
leftcolumn.style.paddingLeft ="30px";

const rightcolumn = document.getElementsByClassName("rightcolumn")[0];
rightcolumn.style.float = "right";
rightcolumn.style.width = "45%";
rightcolumn.style.paddingTop = "230px";
rightcolumn.style.paddingRight ="30px";

const tombol = document.getElementsByClassName("tombol");
tombol[0].style.backgroundColor = "green";
tombol[1].style.backgroundColor = "green";


const footer = document.getElementsByTagName("footer");
footer[0].style.color = "white";
footer[0].style.clear = "both";
footer[0].style.backgroundColor = "Black";
footer[0].style.padding = "25px";
footer[0].style.textAlign = "center";
footer[0].style.marginTop = "50px";

const body = document.getElementsByTagName("body")[0];
body.style.backgroundImage = "url('background.jpg')";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundPosition = "right top";
body.style.backgroundAttachment = "scroll";
body.style.backgroundSize = "100vw 610px";

const row = document.getElementsByClassName("row");
row[0].style.display = "table";
row[0].style.clear = "both";

const a = document.getElementsByTagName("a");
for (let i =0; i< a.length; i++){
    a[i].style.color = "rgb(255, 255, 255)";
    a[i].style.padding = "14px 25px";
    a[i].style.textAlign = "center";
    a[i].style.textDecoration = "none";
    a[i].style.display = "inline-block";
}
