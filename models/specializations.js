const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_specialization: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_specialization",
      autoIncrement: true
    },
    name_specialization: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name_specialization",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "specializations",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true
  };
  const SpecializationsModel = sequelize.define("specializations_model", attributes, options);
  return SpecializationsModel;
};