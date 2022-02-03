//navbar effects on page scroll
document.addEventListener("scroll", function (e) {
  if (window.pageYOffset < 50) {
    document.getElementById("navigationBar").classList.remove("bg-light");

    let element = document.getElementsByClassName("navbar-nav")[1];
    element.classList.add("navigation");
    element.classList.remove("navigationOnScroll");
  }
  // else {
  else if (window.pageYOffset > 50) {
    document.getElementById("navigationBar").classList.add("bg-light");
    document.getElementById("navigationBar").style.opacity = "0.9";
    document.getElementById("navigationBar").style.transition = "all 0.5s";
    // document.getElementById("navigationBar").style.height = "50px";

    //changing font color of navigation items for large screen (hence using [1])
    //no need to change for mobile screen , as it will come in right slide
    let element = document.getElementsByClassName("navbar-nav")[1];
    element.classList.remove("navigation");
    element.classList.add("navigationOnScroll");
  }
});
