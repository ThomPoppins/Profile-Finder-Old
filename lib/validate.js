export default function login_validate(values) {
  const errors = {};

  if(!values.email) {
    errors.email = "Vereist"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Ongeldig emailadres';
  }

  // validation for password
  if(!values.password){
    errors.password = "Wachtwoord vereist"
  } else if(values.password.length < 8 || values.password.lenth > 20){
    errors.password = "Moet groter zijn dan 8 en minder dan 20 tekens lang";
  } else if (values.password.includes(" ")) {
    errors.password = "Ongeldig wachtwoord"
  }

  return errors;
}