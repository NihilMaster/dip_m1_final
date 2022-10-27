const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_patient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_patient",
      autoIncrement: true
    },
    name_patient: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name_patient",
      autoIncrement: false
    },
    illness: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "illness",
      autoIncrement: false,
      references: {
        key: "id_illness",
        model: "illnesses_model"
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
    },
    biological_sex: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: "M/F",
      primaryKey: false,
      field: "biological_sex",
      autoIncrement: false
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "birthday",
      autoIncrement: false
    },
    identification: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "identification",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "patients",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true
  };
  const PatientsModel = sequelize.define("patients_model", attributes, options);
  return PatientsModel;
};