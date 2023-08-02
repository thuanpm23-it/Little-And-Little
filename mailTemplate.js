const mailTemplate = (text) => {
  return `
      <html>
        <head>
          <style>
            /* CSS cho layout email */
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f9f9f9;
              text-align: center;
            }
  
            .email-content {
              width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #fff;
              border: 1px solid #ccc;
            }
          </style>
        </head>
        <body>
          <div class="email-content">
            <img src="https://firebasestorage.googleapis.com/v0/b/little-and-little-6a2f9.appspot.com/o/logo.png?alt=media&token=9e39a51d-5e3a-42be-a866-a87464bf6531">
            <h1>Cảm ơn bạn đã mua vé của chúng tôi.</h1>
            <h3>${text}</h3>
          </div>
        </body>
      </html>
    `;
};

module.exports = { mailTemplate };
