const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/db");
const {
  createUser,
  getUserByUsername,
} = require("../controllers/user-controller");

exports.register = async (req, res, next) => {
  const { name, lastName, email, address, phone, username, password } =
    req.body;
  try {
    // validation
    if (
      !(name && lastName && email && address && phone && username && password)
    ) {
      return next(new Error("Fulfill all inputs"));
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    // console.log(hashedPassword);
    const data = {
      name,
      lastName,
      email,
      address,
      phone,
      username,
      password: hashedPassword,
    };

    // Assuming 'createUser' function exists and saves the user in the database
    const rs = await createUser(data);
    console.log(rs);

    res.json({ msg: "ลงทะเบียนสำเร็จ" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  // console.log(req.body)
  const { username, password } = req.body;
  try {
    // validation
    if (!(username.trim() && password.trim())) {
      throw new Error("username or password must not be blank");
    }
    // find username in db.user
    const user = await getUserByUsername(username);
    // check password
    const pwOk = await bcrypt.compare(password, user.password);
    if (!pwOk) {
      throw new Error("invalid login");
    }
    // issue jwt token
    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log(token);
    res.json({ token: token });
  } catch (err) {
    next(err);
  }
};

exports.getme = (req, res, next) => {
  res.json(req.user);
};
