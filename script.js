function celebrate() {
    alert("🎉 Let the celebration begin! 🎉");
}

function showGiftMessage() {
    // Create a new window for the gift message
    const giftWindow = window.open("", "GiftWindow", "width=600,height=400");

    // Add content to the new window
    giftWindow.document.write(`
        <html>
            <head>
                <title>Gift for Emse</title>
                <style>
                    body {
                        background-color: #ffe4e1;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #ff69b4;
                        font-size: 2.5em;
                    }
                    p {
                        color: #8b008b;
                        font-size: 1.5em;
                        margin: 20px 0;
                    }
                    .romantic-message {
                        font-size: 1.4em;
                        color: #8b008b;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <h1>I Love You, Emse! ❤️</h1>
                <p class="romantic-message">You are the reason for my happiness, and every moment with you feels like a beautiful dream. 💫</p>
                <p class="romantic-message">I can't imagine my life without you, and I will cherish you forever. 💕</p>
                <p class="romantic-message">You are my everything, and I love you more than words can express. 😘</p>
            </body>
        </html>
    `);

    // Focus the window
    giftWindow.focus();
}
