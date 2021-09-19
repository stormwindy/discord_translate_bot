const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const spawn = require("child_process").spawn;
const prefix = "t!";
const playPrefix = "!p";

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix)  || !message.content.startsWith(playPrefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(' ');
    if (!args.length) {
		return messageChannel.send(`You didn't provide any arguments, ${message.author}!`);
    }

    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
                const args = message.content.slice(prefix.length).split(' ');
                const command = args.shift().toLowerCase();
                console.log(args[0]);
                var clArguments = dir.concat(args);
                if (message.content.startsWith(playPrefix)) {
                    const allToMp3Process = spawn('alltomp3', clArguments);
                    allToMp3Process.on('exit', function() {
                        const dispatcher = connection.playFile('./currentAudioFile')
                    });
                } else {
                    var dir = ["./t2s.py"]
                    const pythonProcess = spawn('python3', clArguments);
                    pythonProcess.on('exit', function() {
                        const dispatcher = connection.playFile('/Users/egeelgun/Desktop/discord_translate_bot/output.mp3');
                        // dispatcher.destroy();
                    });
                }
            })
            .catch(console.log);
    } else {
        message.reply('You need to join a voice channel first!');
    }
});

client.login(config.token);