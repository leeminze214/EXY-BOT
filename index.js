// The libraries we need for this
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.login(token).then(() => {
	console.log('Successfully logged in!');
}).catch((error) => {
	console.log(`Invalid TOKEN!\n${error}`);
});