//telegraf package
const { Telegraf } = require('telegraf');
const dotenv = require('dotenv')
dotenv.config();
const bot = new Telegraf(process.env.APIKEY);
bot.start((ctx) => ctx.reply('Welcome!'));
bot.command('kle', (ctx) => ctx.reply('Send /start to start the bot.'));
bot.command('link', (ctx) => ctx.reply('http://www.klescpdds.edu.in/'));
bot.command('location',(ctx)=>{ctx.replyWithLocation(16.386,75.114)});
 bot.command('meme' , async (ctx) => {
    await ctx.replyWithAnimation('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKE_I5jNynae7v5bHCRiObmk9s5smD5wyCuw&s')
    });
bot.launch();   








