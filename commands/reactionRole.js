module.exports = {
    name: 'reactionrole',
    description: 'creates reaction role message!',
    async execute(message, args, MessageEmbed, client) {
        const channel = '840318892038684683';
        const roleName = 'le';
        const reactionRole = message.guild.roles.cache.find(role => role.name === roleName);
        
 
        const reactionEmoji = '✔️';
 
        const embed = new MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a team to play on!')
            .setDescription(`React to get ${roleName} role \n\n`
                + `${reactionEmoji} for the role\n`);
 
        const messageEmbed = await message.channel.send({ embeds: [embed] });
        messageEmbed.react(reactionEmoji);
        
 
        client.on('messageReactionAdd', async (reaction, user) => {
            // console.log(`${user.tag} reacted`);
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === reactionEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(reactionRole);
                }
                else {
                    return;
                }
            }
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name == reactionEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(reactionRole);
                }   
            }
             else {
                return;
            }
        });
    }
 
}