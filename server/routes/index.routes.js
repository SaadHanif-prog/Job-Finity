const express = require("express");
const router = express.Router();

const twilioRouter = require("./twilio.route");

// Routes

router.use("/twilio", twilioRouter);

module.exports = router;
