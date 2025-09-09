const asyncHandler = require("../utils/async-handler") ;
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Handle outbound calls
const outbound = asyncHandler(async (req, res) => {
  try {
    const { to } = req.body;

    const call = await client.calls.create({
      to,
      from: process.env.TWILIO_PHONE_NUMBER,
      url: `${process.env.BASE_URL}/api/v1/twilio/voice-response`,
    });

    res.status(200).json({ success: true, sid: call.sid });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});



// TwiML instructions for the call
const voiceResponse = asyncHandler((req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say("Hello! this is robert baratheon from kings landing.", {
    voice: "alice",
    language: "en-US",
  });

  // Example: forward to another number
  // twiml.dial("+1234567890");

  res.type("text/xml");
  res.send(twiml.toString());
});

// Handle inbound calls
const inbound = asyncHandler((req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say("Thank you for calling. Please hold while we connect you.", {
    voice: "alice",
  });
  // Dummy number
  twiml.dial("+1234567890");

  res.type("text/xml");
  res.send(twiml.toString());
});

module.exports = {
    outbound,
    voiceResponse,
    inbound
}
