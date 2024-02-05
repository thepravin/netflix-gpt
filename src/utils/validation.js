export const checkValidData = (email, password) => {
  // use regex for email validation
  // give true or false
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  ); 
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email Id is Not Valid";
  if (!isPasswordValid) return "Password is Not Valid";

  // both are correct
  return null;
};
