const bot = require('../bot');

const postTweet = (status) => {

    return bot.new.post('statuses/update', { status })
    .then((result) => console.log(`${result.data.text} was tweeted`))
    .catch((error) => console.log(`${JSON.stringify(error)}`));
};

module.exports = postTweet;
