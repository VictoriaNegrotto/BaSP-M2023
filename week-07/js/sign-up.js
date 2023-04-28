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
    validateName(nameI.value);
    nameI.classList.add("red-border");
    errorS[0].classList.remove("none");
  });

  nameI.addEventListener("focus", function () {
    validateName(nameI.value);
    nameI.classList.remove("red-border");
    errorS[0].classList.add("none");
  });

  //Lastname

  function validateLetter(input) {
    if (input.toLowerCase() !== input.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
  function validateLastname(input) {
    if (input.length >= 3 && validateLetter(input)) {
      return true;
    } else {
      return false;
    }
  }
  /*Dejo el cosole.log porque funciona la validacion pero en la pagina hay un error con EventListener*/
  console.log(validateLetter("Negrotto"));
  console.log(validateLastname("Negrotto"));

  lastnameI.addEventListener("blur", function (event) {
    if (!validateLastname(event.target.value));
    {
      console.log("hola");
      lastnameI.classList.add("red-border");
      errorS[1].classList.remove("none");
    }
  });

  lastnameI.addEventListener("focus", function (event) {
    lastnameI.classList.remove("red-border");
    errorS[1].classList.add("none");
  });

  //Dni

  function hasNumbers(string) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < string.length; x++) {
      if (numbers.includes(string[x])) {
        return true;
      } else {
        return false;
      }
    }
  }
  function validateDni(dni1) {
    if (dni1.length >= 7 && hasNumbers(dni1)) {
      return true;
    } else {
      return false;
    }
  }

  var dniInput = document.getElementById("dni");
  dniInput.addEventListener("blur", function (event) {
    if (!validateDni(event.target.value));
    {
      dniInput.classList.add("red-border");
      errorS[2].classList.remove("none");
    }
  });
  dniInput.addEventListener("focus", function () {
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
    if (input.length >= 4 && input.length <= 5) {
      for (var index = 0; index < input.length; index++)
        if (!hasNumbers(input[index])) {
          return false;
        }
      return true;
    }
  }

  //email

  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var emailInput = document.getElementById("email");
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
      errorS[8].classList.remove("none");
    }
  });
  emailInput.addEventListener("focus", function (event) {
    emailInput.classList.remove("red-border");
    errorS[8].classList.add("none");
  });

  //Password
  var passwordInput = document.getElementById("password");

  passwordInput.addEventListener("blur", function (event) {
    if (!hasNumbersAndChar(event.target.value)) {
      passwordInput.classList.add("red-border");
      errorS[9].classList.remove("none");
    }
  });
  passwordInput.addEventListener("focus", function () {
    passwordInput.classList.remove("red-border");
    errorS[9].classList.add("none");
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

  //Repeat Password
  function validateRepeatPass(p1, p2) {
    if (p1 == p2) {
      return true;
    }
    return false;
  }

  var passwordR = document.getElementById("password-repeat");

  passwordR.addEventListener("blur", function (event) {
    if (!validateRepeatPass(event.target.value, passwordInput.value)) {
      passwordR.classList.add("red-border");
      errorS[10].classList.remove("none");
    }
  });
  passwordR.addEventListener("focus", function () {
    passwordR.classList.remove("red-border");
    errorS[10].classList.add("none");
  });

  //button
  var buttonform = document.getElementById("continue");
  buttonform.onclick = function button(event) {
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

    if (validateName(nameI.value) && validateLastname(lastnameI.value)) {
      alert("name=" + nameI.value + "lastname=" + lastnameI.value);
    } else {
      if (!validateName(nameI.value)) {
        alert("ERROR=" + nameI.value);
      }
      if (!validateLastname(lastnameI.value)) {
        alert("ERROR=" + lastnameI.value);
      }
    }

    if (validateDni(dniInput.value) && validateDate(bTdate.value)) {
      alert("dni=" + dniInput.value + "date=" + bTdate.value);
    } else {
      if (!validateDni(dniInput.value)) {
        alert("ERROR=" + dniInput.value);
      }
      if (!validateDate(bTdate.value)) {
        alert("ERROR=" + bTdate.value);
      }
    }
    if (validatePhone(phoneN.value) && validateAddress(addressN.value)) {
      alert("phone=" + phoneN.value + "address" + addressN.value);
    } else {
      if (!validatePhone(phoneN.value)) {
        alert("ERROR=" + phoneN.value);
      }
      if (!validateAddress(addressN.value)) {
        alert("ERROR=" + addressN.value);
      }
    }
    if (
      validateCity(cityT.value) &&
      validatePostal(postalC.value) &&
      validateRepeatPass(passwordR.value)
    ) {
      alert("city=" + cityT.value + "postal" + postalC.value);
    } else {
      if (!validateCity(cityT.value) && validatePostal(postalC.value)) {
        alert("ERROR=" + cityT.value);
      }
      if (!validatePostal(postalC.value)) {
        alert("ERROR=" + postalC.value);
      }
      if (!validateRepeatPass(passwordR.value)) {
        alert("ERROR=" + passwordR.value);
      }
    }
  };
};
