// script.js

// Array of random quotes
const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { text: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
];

// Function to generate random quotes
function generateQuotes() {
    const container = document.getElementById("quotes-container");
    container.innerHTML = ""; // Clear existing quotes

    // Generate 20 random quotes
    const randomQuotes = [];
    while (randomQuotes.length < 20) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        if (!randomQuotes.includes(quotes[randomIndex])) {
            randomQuotes.push(quotes[randomIndex]);
        }
    }

    // Display quotes
    randomQuotes.forEach(quote => {
        const quoteCard = document.createElement("div");
        quoteCard.classList.add("quote-card");

        quoteCard.innerHTML = `
            <div class="quote">"${quote.text}"</div>
            <div class="author">- ${quote.author}</div>
        `;

        container.appendChild(quoteCard);
    });
}

// Event listener for the "Next Quotes" button
document.getElementById("next-quotes").addEventListener("click", generateQuotes);

// Generate initial set of quotes
generateQuotes();
