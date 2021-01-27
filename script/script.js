var i = 0;

function bombka(event) {
    var img = document.createElement("img");
    let Y = event.clientY;
    let X = event.clientX;
    if (i === 0) {
        var j = Math.floor(Math.random() * 5 + 1);
        img.src = "img/banki/banka" + j + ".png";
        img.style.width = "64px";
        img.style.height = "80px";
        img.style.position = "absolute";
        if (Y > 855) {
            Y = 855;
        }
        if (X > 1875) {
            X = 1875;
        }
        if (X < 1730) {
            X = 1730;
        }
        X = X - 32;
    } else {
        var j = Math.floor(Math.random() * 4 + 1);
        img.src = "img/lampki/lampka" + j + ".png";
        img.style.width = "16px";
        img.style.height = "40px";
        img.style.position = "absolute";
        if (Y > 895) {
            Y = 895;
        }
        if (X > 1900) {
            X = 1900;
        }
        if (X < 1730) {
            X = 1730;
        }
        X = X - 8;
    }
    img.style.top = Y + "px";
    img.style.left = X + "px";
    document.getElementById('body').appendChild(img);
    var chance = Math.floor(Math.random() * 4 + 1);
    if (chance === 1) {
        przelacz()
    }
}

function przelacz() {
    if (i === 0) {
        i = 1;
    } else {
        i = 0;
    }
}