// models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    empid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      defaultValue: "user"
    },
    dob: DataTypes.DATEONLY,
    gender: DataTypes.ENUM("male", "female", "other"),
    nationality: DataTypes.STRING,
    designation: DataTypes.STRING,
    department: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    project_assigned: DataTypes.STRING
  }, {
    underscored: true,
    timestamps: true
  });

  return User;
};
