require('dotenv').config();
const Twit = require('Twit');
const timeout_ms = 60*1000;

const bot = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms
});

bot.post('statuses/update', { status: 'I am Batman' })
.then((result) => console.log(`${result.data.text} was tweeted`))
.catch((error) => console.log(`${JSON.stringify(error)}`));
