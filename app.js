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
    switch (m.channelId) {
        case '<channelID>':
            //Tbot.sendMessage(chatid, m.embeds[0].url); This is to send embeds if there's embeds attached to it
            //Tbot.sendPhoto(chatid, m.embeds[0].image.url); This is to send photo if there's a image attached to the message
            Tbot.sendMessage(chatid, `-- Channel 1 -- \n\n" ${username}#${discriminator}: ` + m.content);
            break;
        case '<channelID2>':
            //Tbot.sendMessage(chatid, m.embeds[0].url); This is to send embeds if there's embeds attached to it
            //Tbot.sendPhoto(chatid, m.embeds[0].image.url); This is to send photo if there's a image attached to the message
            Tbot.sendMessage(chatid, `-- Channel 2 -- \n\n"+ ${username}#${discriminator}: ` + m.content);
            break;
    }
});
client.login(token);