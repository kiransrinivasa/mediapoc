module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define('Site', {
    siteName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    siteAddress: {
      type: DataTypes.TEXT,
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

  Site.associate = (models) => {
    Site.belongsTo(models.Account, {
      foreignKey: 'accountId',
      onDelete: 'CASCADE',
    });
  };
  
  return Site;
};
