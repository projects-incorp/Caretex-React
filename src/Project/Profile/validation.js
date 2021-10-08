const validation = (value) => {
  let errors = {};

  if (!value.username) {
    errors.username = "user-name field is required";
  }

  if (!value.firstname) {
    errors.firstname = "first name is required";
  }

  if (!value.lastname) {
    errors.lastname = "last name is required";
  }

  if (!value.email) {
    errors.email = "email field is blank";
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.email = "email is invalid";
  }

  if (!value.number) {
    errors.number = "number is required";
  } else if (value.number.length < 10) {
    errors.number = "number is invalid";
  }

  if (!value.location) {
    errors.location = "location is required";
  }

  return errors;
};

export default validation;
