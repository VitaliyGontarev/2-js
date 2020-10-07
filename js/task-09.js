function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  let lengthName = login.length >= min && login.length <= max;
  return lengthName;
}
function isLoginUnique(allLogins, login) {
  'use strict';
  // Write code under this line
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line
  if (isLoginValid(login) === false) {
    return (message = ERROR);
  } else if (isLoginUnique(allLogins, login) === false) {
    return (message = REFUSAL);
  } else {
    allLogins.push(login);
    return (message = SUCCESS);
  }
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
