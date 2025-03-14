window.onscroll = function() {
    if(screen.width < 769) return;

    var header = document.getElementsByTagName("header")[0];
    var logo = document.querySelector(".md-header__button.md-logo img");
    if (document.documentElement.scrollTop == 0) {
        header.classList.remove("minimal");
        logo.classList.remove("logo-minimal");
    }else{
        header.classList.add("minimal");
        logo.classList.add("logo-minimal");
    }
};

window.onload = function() {
    var dropdown_ids = ["dropdown_sidebar_btn", "dropdown_sidebar_span", "dropdown_sidebar_icon", "dropdown_sidebar_svg", "dropdown_sidebar_path"]
    document.addEventListener('click', function(event) {
        if(!dropdown_ids.includes(event.target.id)){
            document.getElementById("dropdown-sidebar").style.display = "none";
        }
    });
}

function dropdown_header() {
    document.getElementById("dropdown-header").style.display = "block";
    document.getElementById("dropdown-wrap").style.display = "block";
}

function dropdown_sidebar() {
    document.getElementById("dropdown-sidebar").style.display = "block";
}

function dropdown_header_cancel() {
    document.getElementById("dropdown-header").style.display = "none";
    document.getElementById("dropdown-wrap").style.display = "none";
}