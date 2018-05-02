module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define('Media', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
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

  Media.associate = (models) => {
    Media.belongsTo(models.Account, {
      foreignKey: 'accountId',
      onDelete: 'CASCADE',
    });
  };

  return Media;
};
