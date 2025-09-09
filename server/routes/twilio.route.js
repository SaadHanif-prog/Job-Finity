const express = require("express")
const router = express.Router();

// Controllers
const { inbound, outbound, voiceResponse } = require("../controllers/twilio.controller") 

router.post("/inbound", inbound )
router.post("/outbound", outbound )
router.post("/voice-response", voiceResponse)
