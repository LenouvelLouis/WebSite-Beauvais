var nav; //navbar page d'accueil
var page; //site sans la navbar
var body; // élément HTML BODY
var toogle; // ul de la navbar responsive
var header; // element HTML HEADER
var msg; // div message du formulaire
var btnSubmit; // bouton submit du formulaire

window.addEventListener("load", init);
function init() {
  toogle = document.querySelector(".toogle");
  body = document.querySelector("body");
  nav = document.getElementById("navbar");
  page = document.getElementById("page");
  header = document.querySelector("header");
  msg = document.querySelector("#msg");
  btnSubmit = document.querySelector(".btn[type=submit]");
  btnSubmit.addEventListener("click", form);
  window.addEventListener("scroll", navPosition);
  window.addEventListener("resize", navPosition);
  toogle.addEventListener("click", navResp);
}

function navPosition() {
  if (window.innerWidth <= 900 || window.scrollY > header.offsetHeight) {
    //si la largeur de l'écran est inférieur de 900px ou que nous sommes superieurs à la taille de l'header
    nav.style.position = "fixed"; //la navbar est en position fixed
    nav.style.top = 0;
    nav.style.left = "50%";
    nav.style.transform = "translateX(-50%)";
  } else {
    //sinon
    nav.style.position = "static"; //la navbar est en position static
    nav.style.transform = "translateX(0)";
  }
}

function navResp() {
  body.classList.toggle("open"); //on ajoute la classe open si on click sur la navbar responsive
}

function form() {
  msg.innerHTML =
    "Votre message à été envoyé avec succès à l'agglomération du Beauvaisis. Vous recevrez une réponse sur votre adresse mail : " +
    document.querySelector("#email").value +
    " .";
  msg.style.color = "green";
  msg.style.margin = "20px auto";
  msg.style.textAlign = "center";
  msg.style.fontWeight = "600";
}
