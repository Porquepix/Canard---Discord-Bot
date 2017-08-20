const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setAvatar('./canard.jpg').catch(console.error);
    bot.user.setGame('Game of life').catch(console.error);

    // bot.channels.get('346991686133743616').sendMessage('Coin Coin: I am back online!');
});

bot.on('message', (message) => {
    if (message.content === '!ping') {
        message.reply('pong');
    }
    else if (message.content === '!uptime') {
        message.reply(`I am online for ${bot.uptime / 1000} seconds now !`);
    }
});

bot.login(process.env.TOKEN);
