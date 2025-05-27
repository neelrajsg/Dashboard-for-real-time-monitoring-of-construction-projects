// backend/models/Todo.js
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    status: { type: DataTypes.ENUM('pending', 'completed'), defaultValue: 'pending' },
    user_id: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    tableName: "todos",
    timestamps: true,
    underscored: true
  });

  Todo.associate = (models) => {
    Todo.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return Todo;
};
