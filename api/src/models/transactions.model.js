module.exports = (sequelize, type) => {
  return sequelize.define("transactions", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    concept: type.STRING,
    category: type.STRING,
    date: type.DATE,
    amount: type.DECIMAL(10, 2),
    type: type.BOOLEAN,

  });
};
