module.exports = (sequelize, Datatypes) => {
    const users = sequelize.define('users', {
        user: Datatypes.STRING,
        password: Datatypes.STRING,
        id_role: Datatypes.INTEGER,
        active: Datatypes.BOOLEAN,
        user_creation: Datatypes.STRING,
        createAt: Datatypes.DATE,
        updateAt: Datatypes.DATE
    })
}