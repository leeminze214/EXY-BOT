module.exports = {
    name: 'contacts',
    description: 'list of contact information',
    async execute(message, MessageEmbed) {
        const title = 'EXY Contacts';
        
        const embed = new MessageEmbed()
        .setColor('#e42643')
        .setTitle(title)
        .addFields(
            {
                name:'🌐 Website',
                value:'https://exysociety.org/',
                inline:false
                },
            {
                name:'📷 Instagram',
                value:'https://www.instagram.com/exysociety/',
                inline:false
                },
            {
                name:'🇱 Linkedin',
                value:'https://www.linkedin.com/company/exysociety/mycompany/',
                inline:false
                },
            {
                name:'🇫 Facebook',
                value:'https://www.facebook.com/expandyouthsociety/',
                inline:false
                },
            {
                name:'📧 Email',
                value:'expandyouthsociety@gmail.com',
                inline:false
            },
        );
        await message.channel.send({ embeds: [embed] });
     
    },
};