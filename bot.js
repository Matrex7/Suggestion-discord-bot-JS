const Discord = require('discord.js')
const matrex = new Discord.Client();
const {owner,token,prefix} = require('./config.json')
matrex.on('message',message =>{
    if(message.author.bot || message.channel.type === 'dm') return;
    const sugchan = message.guild.channels.cache.get('822808062649696287')
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd === `suggest`) { 
     if(!args.length){
        message.reply('im not dump to send empty suggestion')
         return;
    }
    const sugEmbed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(`Welcome`).setTimestamp().setTitle(`Maded by ${message.author.tag}`).setDescription(args.join(" "))
    sugchan.send(sugEmbed)
}})
morex.login(token)
