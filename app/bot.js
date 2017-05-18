const timeout_ms = 60*1000;
const Twit = require('twit-promise');

const botData = {
    options: ({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
        timeout_ms
    })
};

const bot = {
    new: new Twit(botData.options)
};

module.exports = bot;
