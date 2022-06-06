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
    const inputs = message.content.split(' ');
    const command = inputs[0].substring(prefix.length, inputs[0].length).toLowerCase();
	console.log(command);
	let args = null;
	if (inputs.length >= 2) {
		args = inputs[1];

	}
    if (command === 'reactionrole' && message.member.roles.cache.has(adminRole)) {
        console.log('calling');
		console.log(args);
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
