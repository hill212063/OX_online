module.exports = (sequelize, Sequelize) => {
    const OX = sequelize.define("ox", {
        current_board: {
            type: Sequelize.STRING
        },
        turn: {
            type: Sequelize.STRING
        }
    });

    return OX;
};
