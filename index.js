const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
const fs = require('node:fs');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS], partials:['MESSAGE', 'CHANNEL', 'REACTION'] });
const prefix = '.';

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.login(token).then(() => {
	console.log('Successfully logged in!');
});


client.on('messageCreate', message => {
	const adminRole = '852267179164041236';
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split('---');
    const command = args[0].toLowerCase();
    if (command === 'reactionrole' && message.member.roles.cache.has(adminRole)) {
        client.commands.get('reactionrole').execute(message, args, MessageEmbed, client);
    
	} 
	if (command === 'contact') {
        client.commands.get('contacts').execute(message, MessageEmbed);
    
	} 
	// continue with other commands below
  
});

/*
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
    catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
*/
