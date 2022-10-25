const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_appointment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_appointment",
      autoIncrement: true
    },
    doctor: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "doctor",
      autoIncrement: false
    },
    patient: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "1",
      comment: null,
      primaryKey: false,
      field: "patient",
      autoIncrement: false
    },
    date_appointment: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('now'),
      comment: null,
      primaryKey: false,
      field: "date_appointment",
      autoIncrement: false
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
    tableName: "appointments",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true
  };
  const AppointmentsModel = sequelize.define("appointments_model", attributes, options);
  return AppointmentsModel;
};