let loginSubmit = document.getElementById("login-submit");
let signupSubmit = document.getElementById("signup-submit");

loginSubmit.addEventListener("click", async (event) => {
  event.preventDefault();
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;
  const data = { email, password };
  fetch("http://localhost:5000/signin", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("email", data.user.email);
      window.localStorage.setItem(
        "userProfile",
        JSON.stringify(data.userProfile)
      );
      if (data.token) {
        window.location.href =
          "file:///home/suraj/localDisk/my%20projects/MCA-Sem-2/resumeBuilder/frontend/core/home.html";
      }
      document.getElementById("loginStatus").innerText = data.msg || "";
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("loginStatus").innerText =
        "Unable to login at this moment!";
    });
});

signupSubmit.addEventListener("click", async (event) => {
  event.preventDefault();
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;
  let confPassword = document.getElementById("signup-conf-pass").value;
  const data = { email, password, confPassword };
  fetch("http://localhost:5000/signup", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      document.getElementById("signupStatus").innerText = data.msg;
      if (data.msg) {
        return;
      }

      window.location.href =
        "file:///home/suraj/localDisk/my%20projects/MCA-Sem-2/resumeBuilder/frontend/core/home.html";
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("signupStatus").innerText =
        "Unable to register at this moment!";
    });
});
