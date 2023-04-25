window.onload = function () {
  var nameI = document.getElementById("name");
  var lastnameI = document.getElementById("lastname");
  var dniY = document.getElementById("dni");
  var bTdate = document.getElementById("date");
  var phoneN = document.getElementById("phone");
  var addressN = document.getElementById("address");
  var cityT = document.getElementById("city");
  var postalC = document.getElementById("postal-code");
  var passwordR = document.getElementById("password-repeat");
  var errorS = document.getElementsByClassName("error");

  function validateLetter(input) {
    if (typeof input !== "string") {
      return false;
    }
    return input.toLowerCase() !== input.toUpperCase();
  }
  function validateName(input) {
    if (input.length > 3) {
      for (index = 0; index < input.length; index++)
        if (!validateLetter(input[index])) {
          return false;
        }
      return true;
    }

    nameI.addEventListener("blur", function (event) {
      nameI.classList.add("red-border");
      errorS[0].classList.remove("none");
    });

    nameI.addEventListener("focus", function () {
      nameI.classList.remove("red-border");
      errorS[0].classList.add("none");
    });
  }
  console.log(errorS);

  /*for (let index = 0; index < input.length; index++) {
        for (j = 0; j < chars.length; j++)
        for
        if (input[0]) {

        }
    }
  }*/

  /*function validateName(input) {
    var value = input.value;
  }

  nameI.addEventListener("blur", function (event) {
    var x = validateName(nameI);
    return true;
  });*/

  /*var nameInput = document.querySelector('input [name = "name"]')
nameInput.onblur = function() {
    console.log('blur')

}
*/

  /*date
var gdate = document.getElementById("date");
gdate.addEventListener();

function validateDate() {
  var gdate = gdateInput.value;
}*/

  //email

  /*var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var emailInput = document.getElementById("email");
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
  });*/

  /*password*/

  /*var passwordInput = document.getElementById("password");

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
  }*/
};
