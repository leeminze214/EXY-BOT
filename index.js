// The libraries we need for this
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}
     else if (commandName === 'server') {
		await interaction.reply(`Create Date: ${interaction.guild.createdAt}\nServer name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	}
     else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

client.login(token).then(() => {
	console.log('Successfully logged in!');
}).catch((error) => {
	console.log(`Invalid TOKEN!\n${error}`);
});