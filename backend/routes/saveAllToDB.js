const router = require("express").Router();
const DrawDown = require("../../models/DrawDown");
const Rentability = require("../../models/Rentability");
const Resume = require("../../models/Resume");
const Wallet = require("../../models/Wallet");
const auxiliars = require("../../helpers/auxiliars");

router.post("/drawdown", async (req, res) => {
  for (let i = 0; i < auxiliars.drawDown.length; i++) {
    let savedrawDown = new DrawDown({
      date: auxiliars.drawDown[i].Data,
      drawDownFIA: parseFloat(auxiliars.drawDown[i]["DrawDown FIA"]),
      drawDownIbovespa: parseFloat(auxiliars.drawDown[i]["DrawDown Ibovespa"]),
    });
    let savedDrawDown = await savedrawDown.save();
  }

  try {
    res.json({
      success: true,
      data: savedDrawDown,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

router.post("/rentability", async (req, res) => {
  for (let i = 0; i < auxiliars.rentability.length; i++) {
    let saveRentability = new Rentability({
      date: auxiliars.rentability[i].Data,
      NCHMaracanaFia: parseFloat(auxiliars.rentability[i]["NCH Maracanã FIA"]),
      IBX100: parseFloat(auxiliars.rentability[i].IBX100),
    });
    let savedRentability = await saveRentability.save();
  }

  try {
    res.json({
      success: true,
      data: savedRentability,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

router.post("/resume", async (req, res) => {
  for (let i = 0; i < auxiliars.resume.length; i++) {
    let saveResume = new Resume({
      fund: auxiliars.resume[i].Fundo,
      rentabilityMonth: auxiliars.resume[i]["Rentabilidade Mês"],
      rentabilityYear: auxiliars.resume[i]["Rentabilidade Ano"],
      rentabilityITD: auxiliars.resume[i]["Rentabilidade ITD"],
      netWorth: auxiliars.resume[i]["PL"],
    });
    let savedResume = await saveResume.save();
  }

  try {
    res.json({
      success: true,
      data: savedResume,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

router.post("/wallet", async (req, res) => {
  for (let i = 0; i < auxiliars.wallet.length; i++) {
    let saveWallet = new Wallet({
      ticker: auxiliars.wallet[i].Data,
      sector: auxiliars.wallet[i].Setor,
      nav: parseFloat(auxiliars.wallet[i]["% NAV"]),
    });
    let savedWallet = await saveWallet.save();
  }

  try {
    res.json({
      success: true,
      data: savedWallet,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

module.exports = router;
