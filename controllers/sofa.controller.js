const Sofa = require("../models/Sofa.model");

module.exports.sofaController = {
  postSofa: async (req, res) => {
    const {
      name,
      price,
      type,
      img,
      liked,
      onBasket,
      dimensions,
      backHeight,
      armrestHeightFromSeat,
      maximumLoad,
      supportHeight,
      supportMaterial,
      landingHeight,
      sleepingPlace,
      layoutMechanism,
      desc,
    } = req.body;
    try {
      const sofa = await Sofa.create({
        name,
        price,
        type,
        img,
        liked,
        onBasket,

        discription: {
          dimensions,
          backHeight,
          armrestHeightFromSeat,
          maximumLoad,
          supportHeight,
          supportMaterial,
          landingHeight,
          sleepingPlace,
          layoutMechanism,
          desc,
        },
      });
      res.json(sofa);
    } catch (err) {
      res.json(err.toString());
    }
  },

  getSofas: async (req, res) => {
    try {
      const sofas = await Sofa.find();
      res.json(sofas);
    } catch (err) {
      res.json(err.toString());
    }
  },
};
