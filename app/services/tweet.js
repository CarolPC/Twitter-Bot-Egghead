const botOptions = require('../bot');

const bot = botOptions.new;

const postTweet = (status) => {

    return bot.post('statuses/update', { status })
    .then((result) => console.log(`${result.data.text} was tweeted`))
    .catch((error) => console.log(`${JSON.stringify(error)}`));
};

const sendDm = (user, message) => {

    return bot.post('direct_messages/new', { screen_name: user, text: message })
    .then((result) => console.log(result.data));
};

module.exports = { postTweet, sendDm };
