// emailTemplate.js

function generateEmailTemplate(name, message, offer) {
    const htmlContent = `
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        text-align: center;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #dddddd;
                    }
                    h1 {
                        color: #333333;
                    }
                    .message-section {
                        margin: 20px 0;
                    }
                    .offer-section {
                        background-color: #f9f9f9;
                        padding: 15px;
                        border-radius: 8px;
                        border: 1px solid #dddddd;
                        text-align: center;
                    }
                    .offer-title {
                        font-size: 18px;
                        color: #d9534f;
                    }
                    .footer {
                        margin-top: 20px;
                        font-size: 12px;
                        color: #999999;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Hello, ${name}!</h1>
                    </div>
                    <div class="message-section">
                        <p>${message}</p>
                    </div>
                    <div class="offer-section">
                        <p class="offer-title">Special Offer Just for You!</p>
                        <p>${offer}</p>
                    </div>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </div>
                </div>
            </body>
        </html>
    `;

    const textContent = `
        Hello, ${name}!

        ${message}

        Special Offer Just for You!
        ${offer}

        This is a sample email template.

        © ${new Date().getFullYear()} Your Company. All rights reserved.
    `;

    return {
        html: htmlContent,
        text: textContent
    };
}

module.exports = generateEmailTemplate;
