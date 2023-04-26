window.onload = function () {
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var emailInput = document.getElementById("email");
  var errorE = document.getElementsByClassName("error");
  console.log(emailInput, errorE);

  function validateEmail(email) {
    if (emailExpression.test(email)) {
      return true;
    }
    return false;
  }
  emailInput.addEventListener("blur", function (event) {
    console.log("blur", emailInput.value);
    if (!validateEmail(event.target.value)) {
      emailInput.classList.add("red-border");
      errorE.classList.remove("none");
    }
  });
  emailInput.addEventListener("focus", function (event) {
    emailInput.classList.remove("red-border");
    errorE.classList.add("none");
  });

  /*password*/

  var passwordInput = document.getElementById("password");
  var errorMessage = document.querySelectorAll(".error");

  passwordInput.addEventListener("blur", function (event) {
    console.log(event.target.value);
    if (!hasNumbersAndChar(event.target.value)) {
      passwordInput.classList.add("red-border");
      errorMessage[1].classList.remove("none");
    }
  });
  passwordInput.addEventListener("focus", function () {
    passwordInput.classList.remove("red-border");
    errorMessage[1].classList.add("none");
  });

  function hasNumbers(myString) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < myString.length; x++) {
      if (numbers.includes(myString[x])) {
        return true;
      }
    }
    return false;
  }

  function hasNumbersAndChar(myString) {
    var num = 0;
    var char = 0;
    if (myString.length >= 8) {
      for (var x = 0; x < myString.length; x++) {
        if (hasNumbers(myString[x])) {
          num++;
        } else {
          char++;
        }
        if (num > 0 && char > 0) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  var loginform = document.getElementById("form1");
  loginform.onsubmit = function button(event) {
    event.preventDefault();
    if (
      validateEmail(emailInput.value) &&
      hasNumbersAndChar(passwordInput.value)
    ) {
      alert("email" + emailInput.value + "password" + passwordInput.value);
    } else {
      if (!validateEmail(emailInput.value)) {
        alert("ERROR =" + emailInput.value);
      }
      if (!hasNumbersAndChar(passwordInput.value)) {
        alert("ERROR =" + passwordInput.value);
      }
    }
  };
};
