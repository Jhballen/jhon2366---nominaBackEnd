module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User",  {
        idAsesor: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        nombre: Sequelize.STRING,
        edad: Sequelize.INTEGER,
        direccion: Sequelize.STRING,
        cargo: Sequelize.STRING

        }, {
            tableName: "users"
        });
        return User;
}