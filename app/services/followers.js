const botOptions = require('../bot');

const bot = botOptions.new;

const getFollowersIds = () => {

    return bot.get('followers/ids', { screen_name: 'bots_with_han'})
    .then((result) => console.log(result.data));
};

const getFollowersList = () => {

    return bot.get('followers/list', { screen_name: 'bots_with_han'})
    .then((result) => console.log(result.data));
};

module.exports = { getFollowersIds, getFollowersList };
