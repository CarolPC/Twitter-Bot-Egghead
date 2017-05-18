const botOptions = require('../bot');

const bot = botOptions.new;

const getTimeline = () => {

    return bot.get('/statuses/home_timeline', { count: 5 })
    .then((result) => {

        return result.data.forEach((tweet) => {
            console.log(tweet.text);
            console.log(tweet.user.screen_name);
            console.log(tweet.id_str);
        });
    });
};

module.exports = { getTimeline };
