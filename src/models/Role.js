const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {

    static associate(models) {
      // define association here
    }
    
  };

  Role.init({
    ro_id: DataTypes.INTEGER,
    ro_name: DataTypes.STRING,
    ro_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'role',
  });
  
  return Role;
};