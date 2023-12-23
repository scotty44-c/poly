document.addEventListener("DOMContentLoaded", function () {
  //  click event listeners to the buttons
  document.getElementById("registerBtn").addEventListener("click", function () {
    openForm('registerForm');
  });
 
  let loginFor = document.querySelector("#loginForm");

  document.getElementById("loginBtn").addEventListener("click", function () {
    openForm('loginForm');
  });

  // for form switching
  function openForm(formName) {
    var i;
    var forms = document.getElementsByClassName("form-container");
    var buttons = document.getElementsByClassName("tablink");

    for (i = 0; i < forms.length; i++) {
      forms[i].style.display = "none";
    }

    for (i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }

    document.getElementById(formName).style.display = "block";
    document.getElementById(formName + "Btn").classList.add("active");
  }

  //for checking if the password matchs
  let loginForm = document.querySelector(".form-login"); 
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirm-password");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log('Email:', email.value);
    console.log('Password:', password.value);
  });

  function onChange() {
    if (confirmPassword.value === password.value) {
      confirmPassword.setCustomValidity('');
    } else {
      confirmPassword.setCustomValidity('Passwords do not match!');
    }
  }

  password.addEventListener('change', onChange);
  confirmPassword.addEventListener('change', onChange);
});



let registerForm = document.querySelector(".form-reg");
let studentId = document.getElementById("student_id");
let Surname = document.getElementById("surname");
let NationalID = document.getElementById("natonal_id");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log('student_id:', studentId.value);
    console.log('national_id:', NationalID.value);
    console.log('surname:', Surname.value);
    console.log('Password:', password.value);
    
});

function onChange() {
    if (confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity('');
       ('');
    } else {
        confirmPassword.setCustomValidity('Passwords do not match!');
    }
}

password.addEventListener('change', onChange);
confirmPassword.addEventListener('change', onChange);

// for password visibility
document.addEventListener("DOMContentLoaded", function () {
  const passwordInputs = document.querySelectorAll(".password-input");
  const passwordIcons = document.querySelectorAll(".password-icon");

  const togglePasswordVisibility = (input, icon) => {
    const type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
  };

  const toggleEyeIcon = (input, icon) => {
    const iconPath = input.getAttribute("type") === "password" ? "/assets/eye-off.svg" : "/assets/eye.svg";
    icon.setAttribute("src", iconPath);
  };

  const handleIconClick = (e) => {
    e.preventDefault();
    const targetInput = e.target.previousElementSibling;

    togglePasswordVisibility(targetInput, e.target);
    toggleEyeIcon(targetInput, e.target);
  };

  passwordIcons.forEach((icon) => {
    icon.addEventListener("click", handleIconClick);
  });
});


// for confirm-password visibility
document.addEventListener("DOMContentLoaded", function () {
  const inputFields = document.querySelectorAll(".input__field");
  const inputIcons = document.querySelectorAll(".input__icon");

  const togglePasswordVisibility = (input, icon) => {
    const type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
  };

  const toggleEyeIcon = (input, icon) => {
    const iconPath = input.getAttribute("type") === "password" ? "/assets/eye-off.svg" : "/assets/eye.svg";
    icon.setAttribute("src", iconPath);
  };

  const handleIconClick = (e) => {
    e.preventDefault();
    const targetInput = e.target.previousElementSibling;

    togglePasswordVisibility(targetInput, e.target);
    toggleEyeIcon(targetInput, e.target);
  };

  inputIcons.forEach((icon) => {
    icon.addEventListener("click", handleIconClick);
  });
});

   