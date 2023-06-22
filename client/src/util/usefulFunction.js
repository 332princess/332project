export const validateNickname = (nickname) => {
  const Regex = /^[a-z][a-z0-9]*$/i;
  return Regex.test(nickname);
};

export const validateEmail = (email) => {
  const Regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return Regex.test(email);
};

export const validatePassword = (password) => {
  return password.length > 7;
};
