
const validateUserRegistration = (req, res, next) => {
  const { firstName, lastName, password, email, phoneNumber } = req.body;

//    First Name and Last Name 
  if (!firstName || firstName[0] !== firstName[0].toUpperCase()) {
    return res.status(400).json({ error: "First name must start with a capital letter" });
  }
  if (!lastName || lastName[0] !== lastName[0].toUpperCase()) {
    return res.status(400).json({ error: "Last name must start with a capital letter" });
  }

  //Password
  if (!password || !password.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)) {
    return res.status(400).json({ error: "Password must contain at least one special character, one uppercase letter, one numeric character, and at least 8 characters" });
  }

  // Email Address
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  // Phone Number
  if (!phoneNumber || phoneNumber.length < 10) {
    return res.status(400).json({ error: "Phone number must be at least 10 digits" });
  }

  next();
};


export default validateUserRegistration;


