require('dotenv').config();
const { postTweet, sendDm } = require('./app/services/tweet');
const { follow, getFriends, getConnections } = require('./app/services/follow');
const { getFollowersIds, getFollowersList } = require('./app/services/followers');

const Actions = {
    tweet: (message) => postTweet(message),
    dm: (user, message) => sendDm(user, message),
    followersIds: getFollowersIds(),
    followersList: getFollowersList(),
    followUser: (user) => follow(user),
    friends: getFriends(),
    connections: getConnections()
};

Actions.tweet('hello');
Actions.followUser('ahandvanish');
Actions.followersIds;
Actions.followersList;
Actions.friends;
Actions.connections;
Actions.dm('anyone', 'batman');
