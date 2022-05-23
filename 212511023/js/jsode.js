function sayfabası() {
    alert(" Furkan Çolak'ın web sayfasına hoşgeldiniz......");
}
/*
function cevap(){

    document.getElementById("cevap").innerHTML="Network Marketing";
}
*/

function tarihsaatgöster(){
    
    onclick=document.getElementById('göster').innerHTML = Date();
}

/* 3 */

  
function ads(){
   
    var ad = prompt("");
    var ad2=prompt("Adınızı girin")
  
}

//4
function chargebattery() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf244;";
  setTimeout(function () {
      a.innerHTML = "&#xf243;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf242;";
    }, 2000);
  setTimeout(function () {
      a.innerHTML = "&#xf241;";
    }, 3000);
  setTimeout(function () {
      a.innerHTML = "&#xf240;";
    }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);

//5
var tag = document.getElementsByClassName("c1");
var i;

for (i = 0; i < tag.length; i++) {
  tag[i].addEventListener("click", function() {
    this.parentElement.querySelector(".n1").classList.toggle("active");
    this.classList.toggle("c1-down");
  });
}

//6

function f7() {
  var x = document.getElementById("w1");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  }
}

// 7

function f8() {
  location.replace("#1")
}

//8
function arttir(){
 
  var sonuc=document.getElementById("sonuc");
  sonuc.value=Number(sonuc.value)+1;
  }
   
  function azalt(){
   
  var sonuc=document.getElementById("sonuc");
  sonuc.value=Number(sonuc.value)-1;
  }


  //9

  function f10() {
    var checkBox = document.getElementById("m1");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

  //10

  
  function myFunction() {
    var x = document.getElementById("snackbar");
  
    
    x.className = "show";
  
    
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }







sayfabası();// 1
ads();//2
tarihsaatgöster();// 3









/**************************/

/* jquery kısmı */


//1
$.noConflict();
jQuery(document).ready(function(){
  jQuery("#epostabuton").click(function(){
    jQuery("#eposta").text("E-posta  : furkanolak@rocketmail.com ");
  });
});

//2-3

$(document).ready(function(){
    $("#btn1").click(function(){
      $("#g1").text("Görüşmek Üzere");
    });
    $("#btn2").click(function(){
      $("#g2").html("<b>Umarım  fayadalı olmuşumdur.....</b>");
    });
  });

  // 4 

  $(document).ready(function(){
    $("h2").siblings().css({"border": "2px "});
  });
//5
function chargebattery() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf244;";
  setTimeout(function () {
      a.innerHTML = "&#xf243;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf242;";
    }, 2000);
  setTimeout(function () {
      a.innerHTML = "&#xf241;";
    }, 3000);
  setTimeout(function () {
      a.innerHTML = "&#xf240;";
    }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);

//6
var tag = document.getElementsByClassName("c1");
var i;

for (i = 0; i < tag.length; i++) {
  tag[i].addEventListener("click", function() {
    this.parentElement.querySelector(".n1").classList.toggle("active");
    this.classList.toggle("c1-down");
  });
}

//7

function f7() {
  var x = document.getElementById("w1");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  }
}

// 8 

function f8() {
  location.replace("#1")
}

//9
function arttir(){
 
  var sonuc=document.getElementById("sonuc");
  sonuc.value=Number(sonuc.value)+1;
  }
   
  function azalt(){
   
  var sonuc=document.getElementById("sonuc");
  sonuc.value=Number(sonuc.value)-1;
  }


  // 10 

  function f10() {
    var checkBox = document.getElementById("m1");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }



