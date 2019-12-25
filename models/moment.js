module.exports = (sequelize, DataTypes) => {
    const Moment = sequelize.define("Moment", {
      moment: DataTypes.STRING
    }, {
        freezeTableName: true
    });
  
    Moment.associate = (models) => {
      Moment.hasMany(models.Eat);
    };
  
    return Moment;
  };
  