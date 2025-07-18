const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

// User model
const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
  passwordHash: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('creative', 'client', 'admin'), defaultValue: 'creative' },
});

// Project model
const Project = sequelize.define('Project', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  ownerId: { type: DataTypes.INTEGER, allowNull: false },
});

// Associations
User.hasMany(Project, { foreignKey: 'ownerId' });
Project.belongsTo(User, { foreignKey: 'ownerId' });

module.exports = { sequelize, User, Project };