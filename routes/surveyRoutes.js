const requireLogin = require("../middleware/requirementLogin");
const requireCredits = require("../middleware/requirementCredits");
const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      dateSent: Date.now()
    });
  });
};
