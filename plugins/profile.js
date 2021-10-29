/* Copyright (C) 2020 Yusuf Usta. - 2021 Mr.joka

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Mizuki - Mr.joka
*/

const Mizuki = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const {uploadByBuffer} = require('cobrabot-patch')
const fs = require('fs');
const Language = require('../language');
const Lang = Language.getString('profile');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

Mizuki.addCommand({pattern: 'kickme$', fromMe: true, desc: Lang.KICKME_DESC, onlyGroup: true}, (async (message, match) => {
    if (Config.KICKMEMSG == 'default') { 
        await message.client.sendMessage(message.jid,Lang.KICKME,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
    else {
        await message.client.sendMessage(message.jid,Config.KICKMEMSG,MessageType.text);
        await message.client.groupLeave(message.jid);
    }
}));

Mizuki.addCommand({pattern: 'pp$', fromMe: true, desc: Lang.PP_DESC}, (async (message, match) => {
    if (!message.reply_message || !message.reply_message.image) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO, MessageType.text);
    
    var load = await message.client.sendMessage(message.jid,Lang.PPING,MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    await message.client.updateProfilePicture(message.client.user.jid, fs.readFileSync(location));
    await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
}));


Mizuki.addCommand({pattern: 'block ?(.*)', fromMe: true, desc: Lang.BLOCK_DESC}, (async (message, match) => {
    if (Config.BLOCKMSG == 'default') {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.BLOCKED + '!```', MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('-')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
    else {  
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + Config.BLOCKMSG, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
            await message.client.blockUser(message.reply_message.jid, "add");
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + Config.BLOCKMSG, MessageType.text, {
                    previewType: 0, contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });
                await message.client.blockUser(user, "add");
            });
        } else if (!message.jid.includes('-')) {
            await message.client.sendMessage(message.jid, '*' + Lang.BLOCKED_UPPER + '*', MessageType.text);
            await message.client.blockUser(message.jid, "add");
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text);
        }
    }
}));

Mizuki.addCommand({pattern: 'unblock ?(.*)', fromMe: true, desc: Lang.UNBLOCK_DESC}, (async (message, match) => {
    if (Config.UNBLOCKMSG == 'default') { 
   
        if (message.reply_message !== false) {
            await message.client.blockUser(message.reply_message.jid, "remove");
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.blockUser(user, "remove");
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + '```, ' + Lang.UNBLOCKED + '!```', MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else if (!message.jid.includes('-')) {
            await message.client.blockUser(message.jid, "remove");
            await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
        }
    }
    else {
        if (message.reply_message !== false) {
            await message.client.blockUser(message.reply_message.jid, "remove");
            await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + Config.UNBLOCKMSG, MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.blockUser(user, "remove");
                await message.client.sendMessage(message.jid, '@' + user.split('@')[0] + Config.UNBLOCKMSG, MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else if (!message.jid.includes('-')) {
            await message.client.blockUser(message.jid, "remove");
            await message.client.sendMessage(message.jid, '*' + Lang.UNBLOCKED_UPPER + '*', MessageType.text,);
        } else {
            await message.client.sendMessage(message.jid, '*' + Lang.NEED_USER + '*', MessageType.text,);
        }
    }
}));
var SUCC_SETWELCOME = ''
if (Config.LANG == 'SI') SUCC_SETWELCOME = '✅ පිළිගැනීමේ Gif සාර්ථකව සකසා ඇත'
if (Config.LANG == 'EN') SUCC_SETWELCOME = '✅ Successfully Setted Welcome Gif'
var SUCC_BYE = ''
if (Config.LANG == 'SI') SUCC_BYE = '✅ සමුගැනීමෙ Gif සාර්ථකව සකසා ඇත'
if (Config.LANG == 'EN') SUCC_BYE = '✅ Successfully Setted Goodbye Gif'
var SUCC_ALIVE = ''
if (Config.LANG == 'SI') SUCC_ALIVE = '✅ ALIVE LOGO සාර්ථකව සකසා ඇත'
if (Config.LANG == 'EN') SUCC_ALIVE = '✅ Successfully Setted Alive Logo'
var SUCC_LGOPK = ''
if (Config.LANG == 'SI') SUCC_LGOPK = '✅ LOGO PACK IMG සාර්ථකව සකසා ඇත'
if (Config.LANG == 'EN') SUCC_LGOPK = '✅ Successfully Setted Logo Pack Img'
var NEED_PHOTO = ''
if (Config.LANG == 'SI') NEED_PHOTO = '*❌ කරුණාකර වීඩියෝවකට හෝ පින්තූරයකට mention දෙන්න*'
if (Config.LANG == 'EN') NEED_PHOTO = '*❌ Pleace Mention Video or Image*'
var SETUP = ''
if (Config.LANG == 'SI') SETUP = '*♻️ සකස් කරමින්...මඳක් රැඳී සිටින්න*'
if (Config.LANG == 'EN') SETUP = '*♻️ Preparing...Please Wait*'
const PP_DESC = ""

Mizuki.addCommand({pattern: 'setalive$', fromMe: true, desc: PP_DESC, dontAddCommandList: true}, (async (message, match) => {    
    if (!message.reply_message || !message.reply_message.image) return await message.client.sendMessage(message.jid,NEED_PHOTO, MessageType.text);
    
    var load = await message.client.sendMessage(message.jid,SETUP,MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
    await uploadByBuffer(fs.readFileSync(location), 'image/png')
    .then(async(result) => {
                const {
              link,
              path,              
        } = result   
await heroku.patch(baseURI + '/config-vars', { 
    body: {
        ['ALIVE_LOGO']: link
    }      
      })
    await message.client.sendMessage(message.jid, '*' + SUCC_ALIVE + '*', MessageType.text)
    })
}));





if (Config.WORKTYPE == 'private') {

    Mizuki.addCommand({pattern: 'jid ?(.*)', fromMe: true, desc: Lang.JID_DESC}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.JID.format(message.reply_message.jid.split('@')[0], message.reply_message.jid), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.JID.format(user.split('@')[0], user), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {

    Mizuki.addCommand({pattern: 'jid ?(.*)', fromMe: false, desc: Lang.JID_DESC}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.JID.format(message.reply_message.jid.split('@')[0], message.reply_message.jid), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.JID.format(user.split('@')[0], user), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                });    
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.JID_CHAT.format(message.jid), MessageType.text);
        }
    }));
}

