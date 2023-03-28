const navItem = document.querySelectorAll(".nav-item-container a")
for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", autoClose)
}

const ContentPage =["about", "skills"]
function autoClose() {
    if (sessionStorage.getItem("content") == null || sessionStorage.getItem("content") == "about") {
        navItem[0].classList.add("add")
    }
    else {
        navItem[0].classList.remove("add")
    }

    if (sessionStorage.getItem("content") == "skills") {
        navItem[1].classList.add("add")
    }
    else {
        navItem[1].classList.remove("add")
    }

    if (sessionStorage.getItem("content") == "projects") {
        navItem[2].classList.add("add")
    }
    else {
        navItem[2].classList.remove("add")
    }

    if (sessionStorage.getItem("content") == "education") {
        navItem[3].classList.add("add")
    }
    else {
        navItem[3].classList.remove("add")
    }

    if (sessionStorage.getItem("content") == "awards") {
        navItem[4].classList.add("add")
    }
    else {
        navItem[4].classList.remove("add")
    }
    navBtn.checked = false;
    
    OpenNav()
}

// Darkmode
const switchMode = document.querySelector(".mode")
switchMode.addEventListener("change", Mode)
var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
}
function Mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
    }
}
window.addEventListener(
    "storage",
    function () {
        if (localStorage.lightMode == "dark") {
            app.setAttribute("light-mode", "dark");
        } else {
            app.setAttribute("light-mode", "light");
        }
    },
    false
);


// loadContent
window.addEventListener("load", loadContent)
function loadContent() {
    if (localStorage.getItem("lightMode") == "dark") {
        switchMode.checked = true;
    }
    else {
        switchMode.checked = false;
    }

    if (sessionStorage.getItem("content") == null || sessionStorage.getItem("content") == "about") {
        About()
    }
    if (sessionStorage.getItem("content") == "skills") {
        Skills()
    }
    if (sessionStorage.getItem("content") == "projects") {
        Projects()
    }
    if (sessionStorage.getItem("content") == "education") {
        Education()
    }
    if (sessionStorage.getItem("content") == "awards") {
        Awards()
    }
}

// OpenNav
const navBtn = document.querySelector("#burger")
const nav = document.querySelector(".nav-item-wrapper")
navBtn.addEventListener("click", OpenNav)
function OpenNav() {
    if (navBtn.checked == true) {
        nav.style.left = "0px"
    }
    else {
        nav.style.left = "-252px"
    }
}

// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function () {
    modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) {
    if (e.target.className.indexOf('modal-target') !== -1) {
        var img = e.target;
        var modalImg = document.getElementById("modal-content");
        var captionText = document.getElementById("modal-caption");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }
});

var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "106087010816930");
chatbox.setAttribute("attribution", "biz_inbox");
    
window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v16.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));