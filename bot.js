const Discord = require('discord.js')
const client = new Discord.Client();
const {owner,token,prefix} = require('./config.json')
client.on('ready',()=>{
    console.log('ready')
    const activities_list = [
        " Welcome to MOREX STORE", 
        "/-help",
        "open ticket to buy anything", 
        "dont ping owner"
        ];
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
            client.user.setActivity(activities_list[index]); 
        }, 10000);
})
client.on('message',message =>{
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
client.login(token)