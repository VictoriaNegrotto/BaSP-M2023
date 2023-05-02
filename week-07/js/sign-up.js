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

  function validateLetter(input) {
    if (typeof input !== "string") {
      return false;
    }
    return input.toLowerCase() !== input.toUpperCase();
  }
  function validateName(input) {
    if (input.length >= 3) {
      for (var index = 0; index < input.length; index++)
        if (!validateLetter(input[index])) {
          return false;
        }
      return true;
    }
  }

  var nameI = document.getElementById("name");
  nameI.addEventListener("blur", function (event) {
    if (!validateName(nameI.value)) {
      nameI.classList.add("red-border");
      errorS[0].classList.remove("none");
    }
  });

  nameI.addEventListener("focus", function () {
    nameI.classList.remove("red-border");
    errorS[0].classList.add("none");
  });

  function validateLastname(input1) {
    if (input1.length >= 3) {
      for (var index = 0; index < input1.length; index++)
        if (!validateLetter(input1[index])) {
          return false;
        }
      return true;
    }
  }
  lastnameI.addEventListener("blur", function (event) {
    if (!validateLastname(event.target.value)) {
      lastnameI.classList.add("red-border");
      errorS[1].classList.remove("none");
    }
  });

  lastnameI.addEventListener("focus", function (event) {
    lastnameI.classList.remove("red-border");
    errorS[1].classList.add("none");
  });

  function hasNumbers(string) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (var x = 0; x < string.length; x++) {
      if (!numbers.includes(string[x])) {
        return false;
      }
      return true;
    }
  }
  function validateDni(dni1) {
    if (dni1.length >= 8 && hasNumbers(dni1)) {
      return true;
    } else {
      return false;
    }
  }

  var dniInput = document.getElementById("dni");
  dniInput.addEventListener("blur", function (event) {
    if (!validateDni(event.target.value)) {
      dniInput.classList.add("red-border");
      errorS[2].classList.remove("none");
    }
  });
  dniInput.addEventListener("focus", function () {
    dniInput.classList.remove("red-border");
    errorS[2].classList.add("none");
  });

  function validateDate(date1) {
    var birthDate = new Date(date1);
    var currentDate = new Date();
    if (birthDate.getTime() <= currentDate.getTime()) {
      return true;
    }
    return false;
  }

  var storedDate = localStorage.getItem("dob");
  if (validateDate(storedDate)) {
    var formattedDate = changeDateFormat(storedDate);
  } else {
    return formattedDate;
  }

  function changeDateFormat(date) {
    var dateArray = date.split("-");
    year = dateArray[0];
    month = dateArray[1];
    day = dateArray[2];

    dateArray = month + "/" + day + "/" + year;
    return dateArray;
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

  function validatePhone(phone1) {
    if (phone1.length == 10 && hasNumbers(phone1)) {
      return true;
    } else {
      return false;
    }
  }

  var phoneN = document.getElementById("phone");
  phoneN.addEventListener("blur", function (event) {
    if (!validatePhone(phoneN.value)) {
      hasNumbers(event.target.value);
      phoneN.classList.add("red-border");
      errorS[4].classList.remove("none");
    }
  });
  phoneN.addEventListener("focus", function () {
    phoneN.classList.remove("red-border");
    errorS[4].classList.add("none");
  });

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

  function validateCity(letter) {
    var char = 0;
    if (letter.length >= 3) {
      for (var x = 0; x < letter.length; x++) {
        if (validateLetter(letter[x])) {
          char++;
        }
        if (char > 0) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

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

  function validatePostal(input) {
    if (input.length >= 4 && input.length <= 5) {
      for (var index = 0; index < input.length; index++)
        if (!hasNumbers(input[index])) {
          return false;
        }
      return true;
    }
  }

  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var emailInput = document.getElementById("email");
  function validateEmail(email) {
    if (emailExpression.test(email)) {
      return true;
    }
    return false;
  }
  emailInput.addEventListener("blur", function (event) {
    if (!validateEmail(event.target.value)) {
      emailInput.classList.add("red-border");
      errorS[8].classList.remove("none");
    }
  });
  emailInput.addEventListener("focus", function (event) {
    emailInput.classList.remove("red-border");
    errorS[8].classList.add("none");
  });

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

  var button = document.getElementById("continue");
  button.addEventListener("click", function (event) {
    urlSignUp =
      "https://api-rest-server.vercel.app/signup?" +
      "name=" +
      nameI.value +
      "&lastName=" +
      lastnameI.value +
      "&dni=" +
      dniInput.value +
      "&dob=" +
      changeDateFormat(bTdate.value) +
      "&phone=" +
      phoneN.value +
      "&address=" +
      addressN.value +
      "&zip=" +
      postalC.value +
      "&city=" +
      cityT.value +
      "&email=" +
      emailInput.value +
      "&password=" +
      passwordInput.value;
    event.preventDefault();
    if (
      validateEmail(emailInput.value) &&
      hasNumbersAndChar(passwordInput.value) &&
      validateName(nameI.value) &&
      validateLastname(lastnameI.value) &&
      validateDni(dniInput.value) &&
      validateDate(bTdate.value) &&
      validatePhone(phoneN.value) &&
      validateAddress(addressN.value) &&
      validateCity(cityT.value) &&
      validatePostal(postalC.value) &&
      validateRepeatPass(passwordR.value, passwordInput.value)
    ) {
      alert(
        "email" +
          emailInput.value +
          "\npassword" +
          passwordInput.value +
          "\nname=" +
          nameI.value +
          "\nlastname=" +
          lastnameI.value +
          "\ndni=" +
          dniInput.value +
          "\ndate=" +
          bTdate.value +
          "\nphone=" +
          phoneN.value +
          "\naddress" +
          addressN.value +
          "\ncity=" +
          cityT.value +
          "\npostal" +
          postalC.value
      );
    }
    fetch(urlSignUp)
      .then(function (response) {
        return response.json();
      })
      .then(function (infouser) {
        if (infouser.hasOwnProperty("data")) {
          var keys = Object.keys(infouser.data);
          for (var i = 1; i < keys.length; i++) {
            var key = keys[i];
            if (infouser.data.hasOwnProperty(key)) {
              var value = infouser.data[key];
              localStorage.setItem(key, value);
              alert(key + ": " + value);
            }
          }
        } else if (infouser.hasOwnProperty("errors")) {
          for (var i = 0; i < infouser.errors.length; i++) {
            var error = infouser.errors[i];
            if (error.hasOwnProperty("msg")) {
              alert(error.msg);
            }
          }
        }
      })
      .catch(function () {
        alert("ERROR");
      });

    if (!validateEmail(emailInput.value)) {
      alert("ERROR =" + emailInput.value);
    }
    if (!hasNumbersAndChar(passwordInput.value)) {
      alert("ERRORPASS1 =" + passwordInput.value);
    }
    if (!validateName(nameI.value)) {
      alert("ERROR=" + nameI.value);
    }
    if (!validateLastname(lastnameI.value)) {
      alert("ERROR=" + lastnameI.value);
    }
    if (!validateDni(dniInput.value)) {
      alert("ERROR=" + dniInput.value);
    }
    if (!validateDate(bTdate.value)) {
      alert("ERROR=" + bTdate.value);
    }
    if (!validatePhone(phoneN.value)) {
      alert("ERROR=" + phoneN.value);
    }
    if (!validateAddress(addressN.value)) {
      alert("ERROR=" + addressN.value);
    }
    if (!validateCity(cityT.value)) {
      alert("ERROR=" + cityT.value);
    }
    if (!validatePostal(postalC.value)) {
      alert("ERROR=" + postalC.value);
    }
    if (!validateRepeatPass(passwordR.value, passwordInput.value)) {
      alert("ERRORPASS2=" + passwordR.value);
    }
  });

  document.addEventListener("DOMContentLoaded", ReloadInfo());
  function ReloadInfo() {
    nameI.value = localStorage.getItem("name");
    lastnameI.value = localStorage.getItem("lastName");
    addressN.value = localStorage.getItem("address");
    postalC.value = localStorage.getItem("zip");
    formattedDate.value = localStorage.getItem("dob");
    phoneN.value = localStorage.getItem("phone");
    dniInput.value = localStorage.getItem("dni");
    cityT.value = localStorage.getItem("city");
    emailInput.value = localStorage.getItem("email");
    passwordInput.value = localStorage.getItem("password");
    passwordR.value = localStorage.getItem("password");
  }
};
