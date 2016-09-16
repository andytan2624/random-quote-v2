/**
 * quotes global variable
 */
var quotes = [
    {
        'quote' : 'BLOOD, SWEAT AND RESPECT. The first two you give, the last you earn.',
        'source': 'Dwayne Johnson',
        'citation': 'The Internet',
        'year': 2007,
        'tags': ['inspirational', 'sport']
    },
    {
        'quote' : 'If you\'ve never failed, you have never tried anything new.',
        'source': 'Steven Spielberg',
        'citation': 'The Internet',
        'year': 1993,
        'tags': ['inspirational', 'film']
    },
    {
        'quote' : 'Success only comes with great ambition.',
        'source': 'Jackie Chan',
        'tags': ['inspirational', 'film']
    },
    {
        'quote' : 'The greatest education in the world is watching the masters at work.',
        'source': 'Michael Jackson',
        'citation': 'Black or White Magazine',
        'tags': ['inspirational', 'music']
    },
    {
        'quote' : 'I never lose. I either win or learn.',
        'source': 'A traditional limerick',
        'year': 1934,
        'tags': ['inspirational', 'anonymous']
    },
    {
        'quote' : 'Do or do not. There is no try.',
        'source': 'Yoda',
        'citation': 'The Empire Strikes Back',
        'year': 1980,
        'tags': ['inspirational', 'starwars']
    }
];

/**
 * Global variable to house
 */
var usedQuotes = [];

/**
 * event listener to respond to "Show another quote" button clicks
 * when user clicks anywhere on the button, the "printQuote" function is called
 */
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/**
 * Pick a random quote object from the array
 * @returns {{quote, source, citation, year, tags}*}
 */
function getRandomQuote() {

    // Check if quotes is empty. if so, make quotes equal to usedQuotes and empty then empty usedQuotes
    if (quotes.length < 1) {
        quotes = usedQuotes;
        usedQuotes = [];
    }

    var quote;

    // Pick a random number from 0 to the length of the array
    var random_index = Math.floor((Math.random() * quotes.length));
    quote = quotes[random_index];

    // Remove the quote from the array
    quotes.splice(random_index, 1);

    // Push the quote to the used quotes array
    usedQuotes.push(quote);

    return quote;
}

/**
 * Function to get a quote from the array and print out, Change the background colour as well
 * @returns none
 */
function printQuote() {
    var quoteObject = getRandomQuote();
    var quoteText = '<p class="quote">' + quoteObject.quote + '</p><p class="source">' + quoteObject.source;
    if ('citation' in quoteObject) {
        quoteText += '<span class="citation">' + quoteObject.citation + '</span>';
    }
    if ('year' in quoteObject) {
        quoteText += '<span class="year">' + quoteObject.year + '</span>';
    }
    quoteText += '</p>';

    // Randomly get a colour for the background
    var body_colour = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

    document.getElementById('quote-box').innerHTML = quoteText;
    document.body.style.backgroundColor = body_colour;

    clearInterval();
}
