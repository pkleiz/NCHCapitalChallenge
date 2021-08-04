const router = require("express").Router();
const techs = require("./techs");
const Resume = require("../../models/Resume");

router.get("/", (req, res) => {
  res.json({
    success: false,
    message: "Please, dont call /api, its our server",
  });
});

router.get("/test", async (req, res) => {
  try {
    const resume = await Resume.find();

    res.json({
      success: true,
      data: resume,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

router.post("/test", (req, res) => {
  const resume = new Resume({
    found: req.body.found,
    rentabilityMonth: req.body.rentabilityMonth,
    rentabilityYear: req.body.rentabilityYear,
    rentabilityITD: req.body.rentabilityITD,
    netWorth: req.body.netWorth,
  });

  resume
    .save()
    .then((data) => {
      res.json({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        sucess: false,
        message: err,
      });
    });
});

router.post("/", (req, res) => {});

router.use("/techs", techs);

module.exports = router;
