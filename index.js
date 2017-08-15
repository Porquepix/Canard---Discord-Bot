const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setAvatar('./canard.jpg').catch(console.error);
    bot.user.setGame('Game of life').catch(console.error);
});

bot.on('message', (message) => {
    if (message.content === '!ping') {
        message.reply('pong');
    }

    if (message.content === '!uptime') {
        message.reply(`I am online for ${bot.uptime / 1000} seconds now !`);
    }
});

bot.login(process.env.TOKEN);
