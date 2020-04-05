const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");

const mongoose = require("mongoose");
const requireLogin = require("../middleware/requirementLogin");
const requireCredits = require("../middleware/requirementCredits");
const Mailer = require("../services/mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplates");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({recipients:false})
    res.send(surveys)
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("thanks for voting");
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");

    const events = _.chain(req.body)
      .map(({ email, url }) => {
        const pathname = new URL(url).pathname;
        const match = p.test(pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject: subject,
      body,
      recipients: recipients.split(",").map((email) => ({ email })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // Great place to send an email!
    const mailer = new Mailer(
      survey,
      surveyTemplate(survey, req.user.UserName)
    );

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
