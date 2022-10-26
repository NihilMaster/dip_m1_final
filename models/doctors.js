const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_doctor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_doctor",
      autoIncrement: true
    },
    name_doctor: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name_doctor",
      autoIncrement: false
    },
    specialization: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "specialization",
      autoIncrement: false,
      references: {
        key: "id_specialization",
        model: "specializations_model"
      }
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "state",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "doctors",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true
  };
  const DoctorsModel = sequelize.define("doctors_model", attributes, options);
  return DoctorsModel;
};