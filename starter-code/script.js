const body = document.getElementById("bodyId");
const button = document.getElementById("buttonNavId");
const h1 = document.getElementById("h1Id");
const h2 = document.getElementById("h2Id");
const pNav = document.getElementById("pNavId");
const pmain = document.getElementById("pmainId");
const imgNav = document.getElementById("imgNavId");
const search = document.getElementById("searchId");
const main = document.getElementById("mainId");
const pDescriptionId = document.getElementById("pDescriptionId");
const statsId = document.getElementById("statsId");
const td1 = document.getElementById("td1Id");
const td2 = document.getElementById("td2Id");
const td3 = document.getElementById("td3Id");
const td1_1 = document.getElementById("td1.1Id");
const td2_2 = document.getElementById("td2.2Id");
const td3_3 = document.getElementById("td3.3Id");
const svglocation = document.getElementById("svglocationId");
const svgwebsite = document.getElementById("svgwebsiteId");
const svgtwitter = document.getElementById("svgtwitterId");
const svgcompany = document.getElementById("svgcompanyId");
const plocation = document.getElementById("plocationId");
const pwebsite = document.getElementById("pwebsiteId");
const pTwitter = document.getElementById("pTwitterId");
const pCompany = document.getElementById("pCompanyId");

let backgroundColorDark = false;

button.addEventListener("click", function () {
  if (backgroundColorDark) {
    body.style.backgroundColor = "#F6F8FF";
    h1.style.color = "black";
    h2.style.color = "black";
    pNav.style.color = "#4B6A9B";
    pmain.style.color = "#697C9A";
    pDescriptionId.style.color = "#697C9A";
    search.style.backgroundColor = "#FFFFFF";
    main.style.backgroundColor = "#FFFFFF";
    statsId.style.backgroundColor = "#F6F8FF";
    td1.style.color = "#4B6A9B";
    td2.style.color = "#4B6A9B";
    td3.style.color = "#4B6A9B";
    td1_1.style.color = "black";
    td2_2.style.color = "black";
    td3_3.style.color = "black";
    svglocation.style.fill = "#4B6A9B";
    svgwebsite.style.fill = "#4B6A9B";
    svgtwitter.style.fill = "#4B6A9B";
    svgcompany.style.fill = "#4B6A9B";
    plocation.style.color = "#4B6A9B";
    pwebsite.style.color = "#4B6A9B";
    pTwitter.style.color = "#4B6A9B";
    pCompany.style.color = "#4B6A9B";
    backgroundColorDark = false;
  } else {
    body.style.backgroundColor = "#141D2F";
    h1.style.color = "white";
    h2.style.color = "white";
    pNav.style.color = "white";
    pmain.style.color = "#ffffff";
    pDescriptionId.style.color = "#FFFFFF";
    search.style.backgroundColor = "#1E2A47";
    main.style.backgroundColor = "#1E2A47";
    statsId.style.backgroundColor = "#141D2F";
    td1.style.color = "#FFFFFF";
    td2.style.color = "#FFFFFF";
    td3.style.color = "#FFFFFF";
    td1_1.style.color = "#FFFFFF";
    td2_2.style.color = "#FFFFFF";
    td3_3.style.color = "#FFFFFF";
    svglocation.style.fill = "#FFFFFF";
    svgwebsite.style.fill = "#FFFFFF";
    svgtwitter.style.fill = "#FFFFFF";
    svgcompany.style.fill = "#FFFFFF";
    plocation.style.color = "#FFFFFF";
    pwebsite.style.color = "#FFFFFF";
    pTwitter.style.color = "#FFFFFF";
    pCompany.style.color = "#FFFFFF";
    backgroundColorDark = true;
  }
});

let DarkMode = false; 

button.addEventListener("click", function () {
  DarkMode = !DarkMode; 

  if (DarkMode) {
    pNav.innerText = "LIGHT";
    pNav.classList.add("dark-mode"); 
  } else {
    pNav.innerText = "DARK";
    pNav.classList.remove("dark-mode");
  }
});

let ImageMode = true;
button.addEventListener("click", function () {
    if (ImageMode) {
      imgNav.src = "assets/icon-sun.svg";
      ImageMode = false;
    } else {
      imgNav.src = "assets/icon-moon.svg";
      ImageMode = true;
    }
})

const obterDados = () => {
    const url = "https://api.github.com/user";
    fetch(url)
     .then(res => res.json())
     .then(dados => {
         console.log(dados);
     })
}




 
