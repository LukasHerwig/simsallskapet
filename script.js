
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const loginBtn = document.getElementById("btnOutput");


let inloggDiven = document.querySelector("#inloggSidan");
let contentDiven = document.querySelector("#content");


let nyBtn = document.createElement("button");
let nyDiv = document.createElement("div");


const inloggad = localStorage.getItem("inloggad");


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


function loggaUt() {
    nyDiv.innerHTML = ""
    location.reload();
}


nyBtn.addEventListener("click", function () {
    localStorage.clear();
    loggaUt();

})


const corecctUsername = "Sara";
const corecctPassword = "qwe123";


loginBtn.addEventListener('click', function () {

    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;


    if (userName == corecctUsername && password == corecctPassword) {
        localStorage.setItem("inloggad", "ja");
        rensaGammalDiv();
        nyDivMedValkommenText();
        nyLoggaUtKnapp();
    }
    else {
        alert('Fel användarnamn eller lösenord, försök igen!');
    }
})


if (inloggad) {
    rensaGammalDiv();
    nyDivMedValkommenText();
    nyLoggaUtKnapp();
}
else {
    nyDiv.innerHTML = ""
}
