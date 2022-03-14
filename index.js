// The libraries we need for this
const Discord = require('discord.js');
const fs = require('fs');

const token = fs.readFileSync('./tok.txt','utf8').trim()

const client = new Discord.Client({ intents: []});

client.login(token).then(() => {
    console.log("Successfully logged in!");
}).catch((error) => {
    console.log(`Invalid TOKEN!\n${error}`);
});