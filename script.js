
// TEXT FÄLT OCH KNAPP 
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const loginBtn = document.getElementById("btnOutput");

// DIVEN MED INNEHÅLLET ATT ÄNDRA VID INLOGG
let inloggDiven = document.querySelector("#inloggSidan");
let contentDiven = document.querySelector("#content");

// NY LOGGA UT KNAPP OCH NY DIV
let nyBtn = document.createElement("button");
let nyDiv = document.createElement("div");

// KOLLA OM MAN FORTFARANDE ÄR INLOGGAD I LOCALSTORAGE
const inloggad = localStorage.getItem("inloggad");

// FUNKTIONER
function nyDivMedValkommenText() {
    let nyDivText = document.createTextNode("Välkommen, du är nu inloggad!");
    nyDiv.appendChild(nyDivText);
    inloggDiven.appendChild(nyDiv);
}

function rensaGammalDiv() {
    inloggDiven.innerHTML = "";
}

function nyLoggaUtKnapp() {
    let nyBtnText = document.createTextNode("Logga ut");
    nyBtn.appendChild(nyBtnText);
    inloggDiven.appendChild(nyBtn);
}

// FUNKTION LOGGA UT
function loggaUt() {
    nyDiv.innerHTML = ""
    location.reload();
}


nyBtn.addEventListener("click", function () {
    localStorage.clear();
    loggaUt();

})

// IF SATSER

loginBtn.addEventListener('click', function () {

    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;


    if (userName == "Sara" && password == "qwe123") {
        localStorage.setItem("inloggad", "ja");
        rensaGammalDiv();
        nyDivMedValkommenText();
        nyLoggaUtKnapp();
    }
    else {
        alert('Fel användarnamn eller lösenord, försök igen!');
    }
})

// HÅLLS INLOGGAD TILL MAN TRYCKER PÅ KANPPEN "LOGGA UT"

if (inloggad) {
    rensaGammalDiv();
    nyDivMedValkommenText();
    nyLoggaUtKnapp();
}
else {
    nyDiv.innerHTML = ""
}