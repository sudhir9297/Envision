const keys = require("../../config/keys");
module.exports = survey => {
  return `
    <html>
        <body>
        <div style="text-align:center">
            <h3>I'd like your input</h3>
            <p>Please answer the question below</p>
            <p>${survey.body}</p>
            <div>
                <a href:"${keys.redirectDomain}">yes</a>
            </div>
            <div>
                <a href:"${keys.redirectDomain}">No</a>
            </div>
        
        </div>
        </body>
    </html>
    `;
};
