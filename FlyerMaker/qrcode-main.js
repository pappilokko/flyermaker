var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 200,
    height: 200,
    colorDark: "",
    colorLight: "#FFFFFF"

});

var text1_max = document.getElementById("text_1").maxLength;

function makeCode() {
    var elText = document.getElementById("text");

    qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });
