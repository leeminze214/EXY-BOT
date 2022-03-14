const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server_info')
		.setDescription('Presents Server Information!'),
	async execute(interaction) {
		await interaction.reply(`Create Date: ${interaction.guild.createdAt}\nServer name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	},
};