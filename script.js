// VARIABLES
const body = document.getElementsByTagName("body");
const hamButton = document.getElementById("ham-btn");
const navPanel = document.getElementById("nav-panel");
const overlay = document.getElementById("overlay");
const hamBtnLine = document.querySelectorAll(".line");
const moreInfoBtn = document.querySelectorAll(".more_info_btn");
const copyEmailBtn = document.getElementById("copy-email");
const emailCopiedText = document.getElementById("email-copied");
const emailInput = document.getElementById("my-email")
const listItems = document.querySelectorAll("li")

console.log(listItems)

// EVENT LISTENERS
hamButton.addEventListener("click", handleHamButton)

for(let i = 0; i < moreInfoBtn.length; i++) {
    moreInfoBtn[i].addEventListener('click', handleMoreInfo)
}

for(let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", closeNav)
}

copyEmailBtn.addEventListener("click", handleEmailCopy)

// FUNCTIONS 

function handleHamButton () {
    hambugerCheck();
}

function hambugerCheck () {
    if(navPanel.classList.contains("active")) {
        navPanel.classList.remove("active");
        overlay.style.display = "none";
        body[0].style.overflow = "";
    } else {
        navPanel.classList.add("active");
        overlay.style.display = "block";
        body[0].style.overflow = "hidden";
    }
    if(hamBtnLine[0].classList.contains("line_active")) {
        hamBtnLine.forEach(line => {
            line.classList.remove("line_active")
        })
    } else {
        hamBtnLine.forEach(line => {
            line.classList.add("line_active")
        })
    }
}

function handleMoreInfo () {
    const moreInfo = this.nextElementSibling;
    const projectSummary = moreInfo.nextElementSibling;


    if(moreInfo.classList.contains("more_info-active")) {
        moreInfo.classList.remove("more_info-active")
        projectSummary.style.opacity = '1'
    } else {
        moreInfo.classList.add("more_info-active")
        projectSummary.style.transition = 'all 300ms ease'
        projectSummary.style.opacity = '0'
    }
}


function handleEmailCopy () {

    emailInput.select();
    emailInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(emailInput.value);

    emailCopiedText.style.display = "block";

    setTimeout(function() {
        emailCopiedText.style.display = "none";
    }, 2000)
}

function closeNav () {
    hambugerCheck()
    body[0].style.overflow = "";
}