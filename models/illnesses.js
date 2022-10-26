const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_illness: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_illness",
      autoIncrement: true
    },
    name_illness: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name_illness",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "illnesses",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true
  };
  const IllnessesModel = sequelize.define("illnesses_model", attributes, options);
  return IllnessesModel;
};