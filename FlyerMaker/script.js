function insertRestaurantTitle() {
  var restaurantName = document.getElementById("restaurant-name").value;
  var paragraf = document.getElementById("p_1");
  paragraf.innerHTML = restaurantName;
}

function background() {
  var color_back = document.getElementById("color_back").value;
  var background_color = document.getElementById("background_flyer");
  background_color.style.backgroundColor = color_back;

  //font

  var color_font = document.getElementById("color_font").value;
  var m1 = document.getElementById("middleHeader");
  m1.style.color = color_font;
  var m2 = document.getElementById("middleHeader_2");
  m2.style.color = color_font;
  var list = document.getElementById("list");
  list.style.color = color_font;
  var hashtag = document.getElementById("p_2");
  hashtag.style.color = color_font;
  var hilsen = document.getElementById("hilsen");
  hilsen.style.color = color_font;

  //detail
  var color_detail = document.getElementById("color_detail").value;
  var qrcodeBorder = document.getElementById("qrcode");
  qrcodeBorder.style.borderColor = color_detail;
  var bordNrBorder = document.getElementById("bordNr");
  bordNrBorder.style.borderColor = color_detail;
  var listNumb1 = document.getElementById("numb1");
  var listNumb2 = document.getElementById("numb2");
  var listNumb3 = document.getElementById("numb3");
  listNumb1.style.borderColor = color_detail;
  listNumb2.style.borderColor = color_detail;
  listNumb3.style.borderColor = color_detail;

  //bold font style
  var color_bold = document.getElementById("color_bold").value;
  var ordrBold = document.getElementById("ordrBold");
  ordrBold.style.color = color_bold;
  var p_1 = document.getElementById("p_1");
  p_1.style.color = color_bold;
  var bordNr_p = document.getElementById("bordNr_p");
  bordNr_p.style.color = color_bold;
}

//Slider output
var slider = document.getElementById("sliderComp");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

//------IMG preview---------
$(function () {
  $(":file").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = imageIsLoaded;
      reader.readAsDataURL(this.files[0]);
    }
  });
});

function imageIsLoaded(e) {
  $("#logo").attr("src", e.target.result);
}

function makeQR() {
  console.log("makeqr");

  var elText = document.getElementById("qr-link");
  const qrCode = new QRCodeStyling({
    width: 120,
    height: 120,
    data: elText.value,
    image: "images/ordrLogo.png",
    dotsOptions: {
      color: "#125c76",
      type: "dots",
    },
    backgroundOptions: {
      color: "#ffffff",
    },
  });

  qrCode.append(document.getElementById("qrcode"));
}

function createPreview() {
  document.getElementById("background_flyer").style.display = "block";
  document.getElementById("generatePDF").style.display = "block";
  document.getElementById("editPDF").style.display = "block";
  insertRestaurantTitle();
  background();
  makeQR();
}

//animation to flyer
$("#button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#generatePDF").offset().top,
    },
    "slow"
  );
});

$("#editPDF").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#body").offset().top,
    },
    "slow"
  );
});

//-------PDF-----------

$("#generatePDF").click(function () {
  var element = document.getElementById("background_flyer");
  var element2 = document.getElementById("qrcode");

  var opt = {
    margin: 0,
    filename: "minFlyer.pdf",
    image: { type: "jpeg", quality: 3 },
    html2canvas: { scale: 3 },
    jsPDF: { unit: "in", format: "a5", orientation: "portrait" },
  };

  // New Promise-based usage:
  //html2pdf().set(opt).from(element).save();

  // Old monolithic-style usage:
  html2pdf(element, opt);
});
