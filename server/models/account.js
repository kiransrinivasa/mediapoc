module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    planId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
  });
  return Account;
};
