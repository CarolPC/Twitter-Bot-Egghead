require('dotenv').config();
const { postTweet, sendDm, retweet, unretweet, favorite, reply } = require('./app/services/tweet');
const { follow, getFriends, getConnections } = require('./app/services/follow');
const { getFollowersIds, getFollowersList } = require('./app/services/followers');
const { getTimeline } = require('./app/services/timeline');

const Actions = {
    // tweet: (message) => postTweet(message),
    // dm: (user, message) => sendDm(user, message),
    // followersIds: getFollowersIds(),
    // followersList: getFollowersList(),
    // followUser: (user) => follow(user),
    // friends: getFriends(),
    // connections: getConnections(),
    timeline: getTimeline(),
    retweet: (id) => retweet(id),
    unretweet: (id) => unretweet(id),
    reply: (id) => reply(id),
    favorite: (id) => favorite(id)
};

// Actions.tweet('hello');
// Actions.followUser('ahandvanish');
// Actions.followersIds;
// Actions.followersList;
// Actions.friends;
// Actions.connections;
// Actions.dm('anyone', 'batman');
//Actions.timeline;
// Actions.retweet('827636974852923392');
// Actions.unretweet('827636974852923392');
// Actions.favorite('827636974852923392');
Actions.reply('827636974852923392');
