require('dotenv').config();
const Discord = require('discord.js');
const steam = require('steam-provider');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

const provider = new steam.SteamProvider();

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if(msg.content.startsWith('!price')) {
    const arg = msg.content.slice(5).trim();
    const numRes = arg.includes("--") ? parseInt(arg.substring(arg.indexOf("--")+2)) : 1;
    if (isNaN(numRes)) {
      msg.reply("Must use a numerical argument!");
    } else {
      provider.search(arg, numRes, "en", "cad").then(result => {
        msg.reply(result.map(x => x.name+", Price: "+(x.price.length > 0 ? x.price : x.priceWithDiscount)));
        console.log(result);
      });
    }
  } else if (msg.content.startsWith('!score')) {
    const arg = msg.content.slice(5).trim();
    provider.search(arg, 1, "en", "cad").then(result => {
      msg.reply(result.map(x => x.name+", Score: "+x.score));
    });
  }
});