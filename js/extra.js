window.onscroll = function() {
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