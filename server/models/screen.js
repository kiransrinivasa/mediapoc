module.exports = (sequelize, DataTypes) => {
  const Screen = sequelize.define('Screen', {
    screenInfo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activationCode: {
      type: DataTypes.STRING,
      allowNull: true,
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

  Screen.associate = (models) => {
    Screen.belongsTo(models.Account, {
      foreignKey: 'accountId',
      onDelete: 'CASCADE',
    });

    Screen.belongsTo(models.Site, {
      foreignKey: 'siteId',
      onDelete: 'CASCADE',
    });
  };

  return Screen;
};
