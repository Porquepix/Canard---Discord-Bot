const Discord = require('discord.js');
const bot = new Discord.Client();

const playSound = (channel, soundFile) => {
    if (!channel || !soundFile) {
        console.error('Channel and soudFile must be defined!');
        return;
    }

    channel.join()
    .then((connection) => {
        const dispatcher = connection.playFile(soundFile);
        dispatcher.on('error', console.error);
        dispatcher.on('end', _ => {
            connection.disconnect();
        });
    })
    .catch(console.error);
};

bot.on('ready', () => {
    bot.user.setAvatar('./assets/canard.jpg').catch(console.error);
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
    else if (message.content === '!coin') {
        message.reply(`Coin ?`);
        playSound(message.member.voiceChannel, './assets/canard.mp3');
    }
});

bot.login(process.env.TOKEN);
