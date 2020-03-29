const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretkey);
const requireLogin=require('../middleware/requirementLogin')
module.exports = app => {
  app.post("/api/stripe",requireLogin, async (req, res) => {
    const customer = await stripe.customers.create({
      name: "sudhir yadav",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US"
      },
      description: "user created",
      source: req.body.id,
    });

    const charge=await stripe.charges.create(
      {
        customer: customer.id,
        amount: 500,
        currency: "usd",
        description: "5credits for 5 dollar"
      });

      req.user.credits+=5
      const user=await req.user.save()
      res.send(user)
  });
};
