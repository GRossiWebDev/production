var modal1 = document.getElementById("modal1");
var btn1 = document.getElementById("modalBtn1");
var infoBtn1 = document.getElementById('infoBtn1');
var span1 = document.getElementsByClassName("close-btn")[0];

var modal2 = document.getElementById("modal2");
var btn2 = document.getElementById("modalBtn2");
var infoBtn2 = document.getElementById('infoBtn2');
var span2 = document.getElementsByClassName("close-btn")[1];

var modal3 = document.getElementById("modal3");
var btn3 = document.getElementById("modalBtn3");
var infoBtn3 = document.getElementById('infoBtn3');
var span3 = document.getElementsByClassName("close-btn")[2];

var modal4 = document.getElementById("modal4");
var btn4 = document.getElementById("modalBtn4");
var infoBtn4 = document.getElementById('infoBtn4');
var span4 = document.getElementsByClassName("close-btn")[3];

var modal5 = document.getElementById("modal5");
var btn5 = document.getElementById("modalBtn5");
var infoBtn5 = document.getElementById('infoBtn5');
var span5 = document.getElementsByClassName("close-btn")[4];

var modal6 = document.getElementById("modal6");
var btn6 = document.getElementById("modalBtn6");
var infoBtn6 = document.getElementById('infoBtn6');
var span6 = document.getElementsByClassName("close-btn")[5];

var modal7 = document.getElementById("modal7");
var btn7 = document.getElementById("modalBtn7");
var infoBtn7 = document.getElementById('infoBtn7');
var span7 = document.getElementsByClassName("close-btn")[6];

var modal8 = document.getElementById("modal8");
var btn8 = document.getElementById("modalBtn8");
var infoBtn8 = document.getElementById('infoBtn8');
var span8 = document.getElementsByClassName("close-btn")[7];

var modal9 = document.getElementById("modal9");
var btn9 = document.getElementById("modalBtn9");
var infoBtn9 = document.getElementById('infoBtn9');
var span9 = document.getElementsByClassName("close-btn")[8];

var modal10 = document.getElementById("modal10");
var btn10 = document.getElementById("modalBtn10");
var infoBtn10 = document.getElementById('infoBtn10');
var span10 = document.getElementsByClassName("close-btn")[9];

var modal11 = document.getElementById("modal11");
var btn11 = document.getElementById("modalBtn11");
var infoBtn11 = document.getElementById('infoBtn11');
var span11 = document.getElementsByClassName("close-btn")[10];

var modal12 = document.getElementById("modal12");
var btn12 = document.getElementById("modalBtn12");
var infoBtn12 = document.getElementById('infoBtn12');
var span12 = document.getElementsByClassName("close-btn")[11];


btn1.addEventListener("click", displayModal1);

infoBtn1.addEventListener("click", displayModal1);

span1.addEventListener("click", closeModal1);


btn2.addEventListener("click", displayModal2);

infoBtn2.addEventListener("click", displayModal2);

span2.addEventListener("click", closeModal2);


btn3.addEventListener("click", displayModal3);

infoBtn3.addEventListener("click", displayModal3);

span3.addEventListener("click", closeModal3);


btn4.addEventListener("click", displayModal4);

infoBtn4.addEventListener("click", displayModal4);

span4.addEventListener("click", closeModal4);


btn5.addEventListener("click", displayModal5);

infoBtn5.addEventListener("click", displayModal5);

span5.addEventListener("click", closeModal5);


btn6.addEventListener("click", displayModal6);

infoBtn6.addEventListener("click", displayModal6);

span6.addEventListener("click", closeModal6);


btn7.addEventListener("click", displayModal7);

infoBtn7.addEventListener("click", displayModal7);

span7.addEventListener("click", closeModal7);


btn8.addEventListener("click", displayModal8);

infoBtn8.addEventListener("click", displayModal8);

span8.addEventListener("click", closeModal8);


btn9.addEventListener("click", displayModal9);

infoBtn9.addEventListener("click", displayModal9);

span9.addEventListener("click", closeModal9);


btn10.addEventListener("click", displayModal10);

infoBtn10.addEventListener("click", displayModal10);

span10.addEventListener("click", closeModal10);


btn11.addEventListener("click", displayModal11);

infoBtn11.addEventListener("click", displayModal11);

span11.addEventListener("click", closeModal11);


btn12.addEventListener("click", displayModal12);

infoBtn12.addEventListener("click", displayModal12);

span12.addEventListener("click", closeModal12);


function displayModal1(){
  modal1.style.display = "block";
}
function closeModal1(){
  modal1.style.display = "none";
}

function displayModal2(){
  modal2.style.display = "block";
}
function closeModal2(){
  modal2.style.display = "none";
}

function displayModal3(){
  modal3.style.display = "block";
}
function closeModal3(){
  modal3.style.display = "none";
}

function displayModal4(){
  modal4.style.display = "block";
}
function closeModal4(){
  modal4.style.display = "none";
}

function displayModal5(){
  modal5.style.display = "block";
}
function closeModal5(){
  modal5.style.display = "none";
}

function displayModal6(){
  modal6.style.display = "block";
}
function closeModal6(){
  modal6.style.display = "none";
}

function displayModal7(){
  modal7.style.display = "block";
}
function closeModal7(){
  modal7.style.display = "none";
}

function displayModal8(){
  modal8.style.display = "block";
}
function closeModal8(){
  modal8.style.display = "none";
}

function displayModal9(){
  modal9.style.display = "block";
}
function closeModal9(){
  modal9.style.display = "none";
}

function displayModal10(){
  modal10.style.display = "block";
}
function closeModal10(){
  modal10.style.display = "none";
}

function displayModal11(){
  modal11.style.display = "block";
}
function closeModal11(){
  modal11.style.display = "none";
}

function displayModal12(){
  modal12.style.display = "block";
}
function closeModal12(){
  modal12.style.display = "none";
}

window.onclick = function(event){

  if (event.target == modal1){
  modal1.style.display = "none";

  }else if (event.target == modal2){
  modal2.style.display = "none";

  }else if (event.target == modal3){
  modal3.style.display = "none";

  }else if (event.target == modal4){
  modal4.style.display = "none";

  }else if (event.target == modal5){
  modal5.style.display = "none";

  }else if (event.target == modal6){
  modal6.style.display = "none";

  }else if (event.target == modal7){
  modal7.style.display = "none";

  }else if (event.target == modal8){
  modal8.style.display = "none";

  }else if (event.target == modal9){
  modal9.style.display = "none";

  }else if (event.target == modal10){
  modal10.style.display = "none";

  }else if (event.target == modal11){
  modal11.style.display = "none";

  }else if (event.target == modal12){
  modal12.style.display = "none";

  }
}
