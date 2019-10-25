module.exports = (sequelize, Datatypes) => {
    const photos = sequelize.define('photos', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Datatypes.INTEGER
        },
        photo: Datatypes.STRING,
        description: Datatypes.STRING,
        image: Datatypes.INTEGER,
        active: Datatypes.BOOLEAN,
        number: Datatypes.INTEGER,
        author: Datatypes.STRING,
        user_creation: Datatypes.STRING

    });

    return photos;
}