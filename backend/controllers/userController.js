const bcrypt = require("bcryptjs"); // Updated bcrypt version
const { User } = require('../models');
const sendEmail = require('../utils/sendEmail'); // Assuming sendEmail utility is in place

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('❌ Error fetching users:', error);
    res.status(500).json({ error: error.message });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const { empid, name, email, password, role, dob, gender, nationality, designation, department, contact_number, project_assigned } = req.body;

  // Validate required fields
  if (!email || !password || !name || !empid) {
    return res.status(400).json({ error: 'Email, Password, Name, and Employee ID are required' });
  }

  try {
    // Check if user already exists with the same email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      dob,
      gender,
      nationality,
      designation,
      department,
      contact_number,
      project_assigned
    });

    // Send a confirmation email
    await sendEmail({
      to: email,
      subject: "Welcome to Our Platform",
      text: `Hello ${name},\n\nThank you for registering with us!\n\nYour details:\nName: ${name}\nEmail: ${email}\nRole: ${role}\n\nWe are excited to have you on board!`,
    });

    // Respond with the newly created user
    res.status(201).json(newUser);
  } catch (error) {
    console.error('❌ Error creating user:', error);
    res.status(500).json({ error: error.message });
  }
};
