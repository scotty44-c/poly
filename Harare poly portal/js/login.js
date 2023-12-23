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