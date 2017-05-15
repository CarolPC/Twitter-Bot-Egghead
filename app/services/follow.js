const botOptions = require('../bot');

const bot = botOptions.new;

const follow = (screen_name) => {

    return bot.post('friendships/create', { screen_name })
    .then((result) => console.log(result.data));
};

const getFriends = () => {

    return bot.get('friends/list', { screen_name: 'bots_with_han' })
    .then((result) => console.log(result.data));
};

const getConnections = () => {

    return bot.get('friendship/lookup', { screen_name: 'ahandvanish' })
    .then((result) => console.log(result.data));
};

module.exports = { follow, getFriends, getConnections };
