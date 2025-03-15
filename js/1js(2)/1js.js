function validateForm() {
  let surname = document.forms["myForm"]["surname"].value;
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let phone = document.forms["myForm"]["phone"].value;
  let about = document.forms["myForm"]["about"].value;
  let city = document.forms["myForm"]["city"].value;
  let course = document.querySelector('input[name="course"]:checked');
  let bgtuCheckbox = document.forms["myForm"]["bgtu"].checked;
  let isValid = true;

  let surnameErrorMessage = "";
  let nameErrorMessage = "";
  let emailErrorMessage = "";
  let phoneErrorMessage = "";
  let aboutErrorMessage = "";


  
  if (surname == "") {
    surnameErrorMessage = "Поле 'Фамилия' не должно быть пустым";
    isValid = false;
  } else {
    let nameRegex = /^[A-Za-zА-Яа-я]{1,20}$/;
    if (!nameRegex.test(surname)) {
      surnameErrorMessage = "Фамилия должна содержать только символы русского и английского алфавита и не превышать 20 символов";
      isValid = false;
    }
  }

  
  if (name == "") {
    nameErrorMessage = "Поле 'Имя' не должно быть пустым";
    isValid = false;
  } else {
    let nameRegex = /^[A-Za-zА-Яа-я]{1,20}$/;
    if (!nameRegex.test(name)) {
      nameErrorMessage = "Имя должно содержать только символы русского и английского алфавита и не превышать 20 символов";
      isValid = false;
    }
  }

  
  if (email == "") {
    emailErrorMessage = "Поле 'E-mail' не должно быть пустым";
    isValid = false;
  } else {
    let emailRegex = /^\S+@\S+\.[A-Za-z]{2,5}$/;
    if (!emailRegex.test(email)) {
      emailErrorMessage = "Недопустимый формат";
      isValid = false;
    }
  }

  
  if (phone == "") {
    phoneErrorMessage = "Поле 'Телефон' не должно быть пустым";
    isValid = false;
  } else {
    let phoneRegex = /^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
      phoneErrorMessage = "Недопустимый формат";
      isValid = false;
    }
  }
  if (about == "") {
    aboutErrorMessage = "Поле 'Расскажите о себе' не должно быть пустым";
    isValid = false;
  } else if (about.length > 250) {
    aboutErrorMessage = "Поле 'Расскажите о себе' не должно превышать 250 символов";
    isValid = false;
  }
  
  document.getElementById("surname-error").innerHTML = surnameErrorMessage;
  document.getElementById("name-error").innerHTML = nameErrorMessage;
  document.getElementById("email-error").innerHTML = emailErrorMessage;
  document.getElementById("phone-error").innerHTML = phoneErrorMessage;
  document.getElementById("about-error").innerHTML = aboutErrorMessage;
  if (city !== "Минск" || course === null || !bgtuCheckbox) {
    let confirmed = confirm("Вы уверены, что все данные введены верно?");
    console.log(confirmed);
    if (!confirmed) {
      isValid = false; 
    }
  }
  return isValid;

}


