const mongoose = require("mongoose");
const requireLogin = require("../middleware/requirementLogin");
const requireCredits = require("../middleware/requirementCredits");
const Mailer = require("../services/mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplates");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    
    
    const survey = new Survey({
      title,
      subject:subject,
      body,
      recipients: recipients.split(",").map(email => ({ email })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Great place to send an email!
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch {
      res.status(422).send(err);
    }
  });
};