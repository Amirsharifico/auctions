module.exports = (sequelize, Datatypes) => {
  const Auctions = sequelize.define("Auctions", {
  id: {
    type: Datatypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  sellerEmail: {
    type: Datatypes.STRING(320),
    allowNull: false
  },
  itemName: {
    type: Datatypes.STRING(100),
    allowNull: false
  },
  itemDescription: {
    type: Datatypes.STRING(10000),
    allowNull: false
  },
  lastBidPrice: {
    type: Datatypes.FLOAT,
    allowNull: false
  },
  lastBidderEmail: {
    type: Datatypes.STRING(320),
    allowNull: true
  },


  });
  return Auctions;
};
