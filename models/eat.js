module.exports = (sequelize, DataTypes) => {
    const Eat = sequelize.define("Eat", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        consumed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        freezeTableName: true
    });

    Eat.associate = (models) => {
        Eat.belongsTo(models.Moment);
    };

    return Eat;
}
