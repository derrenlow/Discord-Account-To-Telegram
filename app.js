//Calling all the modules needed
require("dotenv").config();
const Discord = require('discord.js-selfbot-v13');
const TelegramBot = require('node-telegram-bot-api');
//Retrieving data form .env file
const teletoken = process.env.TELE_TOKEN;
const chatid = process.env.CHAT_ID;
const token = process.env.DISCORD_TOKEN;
//Calling modules
const Tbot = new TelegramBot(teletoken, { polling: true });
const client = new Discord.Client({ checkUpdate: false });
Tbot.on('message', (message => {
    console.log(message);
}));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`); //will be locked in to your discord account
});
client.on("message", (m) => {
    let username = m.author.username.toLowerCase();
    let discriminator = m.author.discriminator;
    let imagearray = Array.from(m.attachments); //Getting of image size
    switch (m.channelId) {
        case '<channelID>':
            //Tbot.sendMessage(chatid, m.embeds[0].url); This is to send embeds if there's embeds attached to it
            Tbot.sendMessage(chatid, `-- Channel 1 -- \n\n" ${username}#${discriminator}: ` + m.content);
            if (imagearray.length != 0) {
                m.attachments.map(image => {
                    Tbot.sendPhoto(chatid, image.url);
                });
            }
            break;
        case '<channelID2>':
            //Tbot.sendMessage(chatid, m.embeds[0].url); This is to send embeds if there's embeds attached to it
            Tbot.sendMessage(chatid, `-- Channel 2 -- \n\n"+ ${username}#${discriminator}: ` + m.content);
            if (imagearray.length != 0) {
                m.attachments.map(image => {
                    Tbot.sendPhoto(chatid, image.url);
                });
            }
            break;
    }
});
client.login(token);