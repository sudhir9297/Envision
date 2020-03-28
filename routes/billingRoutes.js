const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretkey);

module.exports = app => {
  app.post("/api/stripe",(req, res) => {
    stripe.charges.create(
        {
          amount: 500,
          currency: 'usd',
          source: req.body.id,
          description:"5credits for 5 dollar"

        },
        function(err, charge) {
            // asynchronously called
            console.log(err);
            

            console.log(charge);
          },
  );
})};
