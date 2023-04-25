window.onload = function () {
  var nameI = document.getElementById("name");
  var lastnameI = document.getElementById("lastname");
  var dniInput = document.getElementById("dni");
  var bTdate = document.getElementById("date");
  var phoneN = document.getElementById("phone");
  var addressN = document.getElementById("address");
  var cityT = document.getElementById("city");
  var postalC = document.getElementById("postal-code");
  var passwordR = document.getElementById("password-repeat");
  var errorS = document.getElementsByClassName("error");

  //Name

  function validateLetter(input) {
    if (typeof input !== "string") {
      return false;
    }
    return input.toLowerCase() !== input.toUpperCase();
  }
  function validateName(input) {
    if (input.length > 3) {
      for (var index = 0; index < input.length; index++)
        if (!validateLetter(input[index])) {
          return false;
        }
      return true;
    }
  }
  var nameI = document.getElementById("name");
  nameI.addEventListener("blur", validateName, function (event) {
    validateName(lastnameI.value);
    nameI.classList.add("red-border");
    errorS[0].classList.remove("none");
  });

  nameI.addEventListener("focus", function () {
    validateName(lastnameI.value);
    nameI.classList.remove("red-border");
    errorS[0].classList.add("none");
  });

  //Lastname

  function validateLetter(input) {
    if (typeof input !== "string") {
      return false;
    }
    return input.toLowerCase() !== input.toUpperCase();
  }
  function validateLastname(input) {
    if (input.length > 3) {
      for (var index = 0; index < input.length; index++)
        if (!validateLetter(input[index])) {
          return false;
        }
      return true;
    }
  }
  var lastnameI = document.getElementById("lastname");
  lastnameI.addEventListener("blur", function (event) {
    validateLastname(lastnameI.value);
    lastnameI.classList.add("red-border");
    errorS[1].classList.remove("none");
  });

  lastnameI.addEventListener("focus", function () {
    validateLastname(lastnameI.value);
    lastnameI.classList.remove("red-border");
    errorS[1].classList.add("none");
  });

  //Dni

  function hasNumbers(string) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < string.length; x++) {
      if (numbers.includes(string[x])) {
        return true;
      }
    }
    return false;
  }
  function validateDni(dni1) {
    var num = 0;
    if (dni1.length >= 7) {
      for (var x = 0; x < dni1.length; x++) {
        if (!validateDni(dni1[x])) {
          return false;
        } else {
          return true;
        }
      }
    }
  }

  var dniInput = document.getElementById("dni");
  dniInput.addEventListener("blur", function (event) {
    validateDni(dniInput.value);
    hasNumbers(event.target.value);
    dniInput.classList.add("red-border");
    errorS[2].classList.remove("none");
  });
  dniInput.addEventListener("focus", function () {
    validateDni(dniInput.value);
    dniInput.classList.remove("red-border");
    errorS[2].classList.add("none");
  });

  //date

  function validateDate(bTdate) {
    var birthDate = new Date(bTdate);
    var currentDate = new Date();
    if (birthDate.getTime() <= currentDate.getTime()) {
      return true;
    }
    return false;
  }

  bTdate.addEventListener("blur", function (event) {
    if (!validateDate(event.target.value)) {
      bTdate.classList.add("red-border");
      errorS[3].classList.remove("none");
    }
  });
  bTdate.addEventListener("focus", function () {
    bTdate.classList.remove("red-border");
    errorS[3].classList.add("none");
  });

  //Phone

  function hasNumbers(phone) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < phone.length; x++) {
      if (numbers.includes(phone[x])) {
        return true;
      }
    }
    return false;
  }
  function validatePhone(phone1) {
    if (phone1.length == 10) {
      for (var x = 11; x > phone1.length; x++) {
        if (!validatePhone(phone1[x])) {
          return false;
        } else {
          return true;
        }
      }
    }
  }

  var phoneN = document.getElementById("phone");
  phoneN.addEventListener("blur", function (event) {
    validatePhone(phoneN.value);
    hasNumbers(event.target.value);
    phoneN.classList.add("red-border");
    errorS[4].classList.remove("none");
  });
  phoneN.addEventListener("focus", function () {
    validatePhone(phoneN.value);
    phoneN.classList.remove("red-border");
    errorS[4].classList.add("none");
  });

  //Address

  function validateAddress(myString) {
    var num = 0;
    var char = 0;
    var space = 0;
    if (myString.length >= 5) {
      for (var index = 0; index < myString.length; index++) {
        if (validateLetter(myString[index])) {
          num++;
        }
        if (hasNumbers(myString[index])) {
          char++;
        }
        if (spaceB(myString[index])) {
          space++;
        }
      }
      if (num > 0 && char > 0 && space > 0) {
        return true;
      }
      return false;
    }
  }

  addressN.addEventListener("blur", function (event) {
    if (!validateAddress(event.target.value)) {
      addressN.classList.add("red-border");
      errorS[5].classList.remove("none");
    }
  });
  addressN.addEventListener("focus", function () {
    addressN.classList.remove("red-border");
    errorS[5].classList.add("none");
  });

  function spaceB(string) {
    if (string == " ") {
      return true;
    }
    return false;
  }

  function hasNumbers(num) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < num.length; x++) {
      if (numbers.includes(num[x])) {
        return true;
      }
    }
    return false;
  }

  //City

  var cityT = document.getElementById("city");

  cityT.addEventListener("blur", function (event) {
    if (!validateCity(event.target.value)) {
      cityT.classList.add("red-border");
      errorS[6].classList.remove("none");
    }
  });
  cityT.addEventListener("focus", function () {
    cityT.classList.remove("red-border");
    errorS[6].classList.add("none");
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

  function validateCity(numberandchar) {
    var num = 0;
    var char = 0;
    if (numberandchar.length >= 3) {
      for (var x = 0; x < numberandchar.length; x++) {
        if (hasNumbers(numberandchar[x])) {
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

  //Postal Code

  postalC.addEventListener("blur", function (event) {
    if (!validatePostal(event.target.value)) {
      postalC.classList.add("red-border");
      errorS[7].classList.remove("none");
    }
  });
  postalC.addEventListener("focus", function () {
    postalC.classList.remove("red-border");
    errorS[7].classList.add("none");
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
  function validatePostal(input) {
    if (input.length > 4) {
      for (var index = 0; index < input.length; index++)
        if (!hasNumbers(input[index])) {
          return false;
        }
      return true;
    }
  }
};

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
