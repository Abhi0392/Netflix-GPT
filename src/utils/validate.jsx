export const checkValidData = (name, email, password) => {
  const isValidName = /^[a-zA-ZÀ-ÿ' -]+$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isValidName) return "name is not Valid";
  if (!isEmailValid) return "Email is not valid";

  if (!isPasswordValid) return "Password is not valid";
};
