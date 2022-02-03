//checking if user is logged in or not
if (window.localStorage.token) {
  let loginNav = document.getElementsByClassName("loginNav");
  for (let i = 0; i < loginNav.length; i++) {
    let username = localStorage.email.split("@");
    loginNav[i].innerText = username[0];
    loginNav[i].setAttribute("href", "../core/form.html");

    let userAvatar = document.getElementsByClassName("userAvatar");
    for (let i = 0; i < userAvatar.length; i++) {
      userAvatar[i].style.display = "inline-block";
    }
  }

  let logoutNav = document.getElementsByClassName("logoutNav");
  for (let i = 0; i < logoutNav.length; i++) {
    logoutNav[i].style.display = "inline-block";
  }
}

//logout
let logoutNav = document.getElementsByClassName("logoutNav");
for (let i = 0; i < logoutNav.length; i++) {
  logoutNav[i].onclick = function () {
    localStorage.clear();
    window.location.reload();
  };
}

// Drawing canvas on right side of body
let rightDivHeight = document.getElementById("CanvasSection").offsetHeight; //represents y axis
let rightDivWidth = document.getElementById("CanvasSection").offsetWidth; //represents x axis

var canvas = document.getElementById("canvas");
canvas.height = rightDivHeight;
canvas.width = rightDivWidth;
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";

function draw(x, y) {
  ctx.fillRect(x, y, 2, 2);
}

let x = 10;
let y = 2;
for (x = 10; x <= rightDivWidth; x = x + 20) {
  if (x >= rightDivWidth) {
    y = y + 20;
    x = 10;
  }
  if (y >= rightDivHeight) {
    break;
  }
  draw(x, y);
}

//removing canvas for mobile screen
function hideCanvasForMobile() {
  if (window.innerWidth <= 800) {
    canvas.style.display = "none";
  }
}
hideCanvasForMobile();

//check for screen size when resizing window and hide canvas when size hits mobile width
window.addEventListener("resize", hideCanvasForMobile);
