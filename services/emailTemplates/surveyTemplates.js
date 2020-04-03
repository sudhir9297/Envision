const keys = require("../../config/keys");
module.exports = (survey, userName) => {
  return `
    <html>
        <body>
        <div style="width:100%;">
            <h4>Hi ${userName}</h4>
            <p>To help us serve you better in future . we'd love to hear about your experience with our Support Team.</p>
            <p>Lets us know by giving simple Answer Below </p>
            <p>${survey.body}</p>
            <div style="display:flex;">
                <div  style="margin-right:30px;">
                    <a href="${keys.redirectDomain}">yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}">No</a>
                </div>
            </div>
            <p>We appreciate your time and we value your Feedback.</p>
            <h4>Kind Regards</h4>
            <p>Survey.io</p>
        </div>
        </body>
    </html>
    `;
};
