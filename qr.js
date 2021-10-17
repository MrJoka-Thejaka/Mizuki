const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./Mizuki/');
const fs = require('fs');

async function Mizuki () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2, 2126, 14]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Mizuki')}
${chalk.green.italic('ℹ️  වට්ස්ඇප් වෙත සම්බන්ධ වෙමින් පවතී කරුණාකර මඳක් රැඳී සිටින්න.')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    conn.on('open', async () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold(conn.user.jid.startsWith('94') || conn.user.jid.startsWith('994') ? 'Queen Mizuki QR Code: ' : 'Queen Mizuki QR Code: '), st
        );

        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `MIZUKI_SESSION="${st}"`);
        }
        console.log(conn.user.jid.startsWith('94') || conn.user.jid.startsWith('994') ? '*⚠️ මේක කාටවත් දෙන්න එපා !! ; I am Queen 𝐌𝐈𝐙𝐔𝐊𝐈 👸 ' + conn.user.name + '* 🛑' + '\n\n' + '*⚠️ Please Do Not Share This Code With Anyone  !! ; I am Queen 𝐌𝐈𝐙𝐔𝐊𝐈 👸 ' +conn.user.name +'* 🛑' : '*⚠️ මේක කාටවත් දෙන්න එපා !! ; I am Queen 𝐌𝐈𝐙𝐔𝐊𝐈 👸 ' + conn.user.name + '* 🛑' + '\n\n' + '*⚠️ Please Do Not Share This Code With Anyone  !! ; I am Queen 𝐌𝐈𝐙𝐔𝐊𝐈 👸 ' +conn.user.name +'* 🛑'
        process.exit(0);
    });
    await conn.connect();
}
Mizuki()
