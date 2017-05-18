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

const retweet = (id) => {

    return bot.post('statuses/retweet/:id', { id })
    .then((result) => console.log(`${result.data} was retweeted`));
};

const unretweet = (id) => {

    return bot.post('statuses/unretweet/:id', { id })
    .then((result) => console.log(`${result.data.text} was unretweeted`));
};

const favorite = (id) => {

    return bot.post('favorites/create/:id', { id })
    .then((result) => console.log(result.data));
};

const reply = (id) => {

    return bot.post('statuses/update', { status: '@ahandvanish hi!', in_reply_to_statys_id: id })
    .then((result) => console.log(result.data));
};

module.exports = { postTweet, sendDm, retweet, unretweet, favorite, reply };
