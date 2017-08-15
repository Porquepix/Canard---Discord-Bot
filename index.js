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
});

bot.login(process.env.TOKEN);
