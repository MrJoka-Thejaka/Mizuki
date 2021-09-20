/*Copyright (C) 2021 Black Amda  /  Copyright (C) 2021 Mr.joka*/


const Mizuki = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');
const AS_DESC = "ගෲප් එකේ ඇති වන ඕනෑම ආකාරයක WhatsApp SPAM පිළිබඳ හදිසි අවස්ථාවකදී මෙම විධානය භාවිත කර හානිය අවම කරගත හැක."
const GUARD = "»»»»»»»»»»»»»»»»»»»»»»»»»»»»»\n*🚨Queen Mizuki Virus Shield🛡️*\n\n       🛑🛑🛑🛑\n       \n\n\n\n```❤️‍🩹 Do Not Go Up ❤️‍🩹```\n\n*❤️‍🩹 ඉහලට යෑමෙන් වලිකින්න. ❤️‍🩹*\n            *Don't go up !*\n    _🚨WARNING🚨_\n    \n    \n\n```❤️‍🩹 Do Not Go Up ❤️‍🩹```\n\n*❤️‍🩹 ඉහලට යෑමෙන් වලිකින්න. ❤️‍🩹*\n            *Don't go up !*\n    ┏━━━━━━━━━━━━┓\n _🚨WARNING🚨_\n┗━━━━━━━━━━━━┛    \n\n\n\n```❤️‍🩹 Do Not Go Up ❤️‍🩹```\n\n*❤️‍🩹 ඉහලට යෑමෙන් වලිකින්න. ❤️‍🩹*\n\n           *Don't go up !*\n    ┏━━━━━━━━━━━━┓\n _🚨WARNING🚨_\n┗━━━━━━━━━━━━┛\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n``` © ɪ ᴀᴍ ǫᴜᴇᴇɴ ᴍɪᴢᴜᴋɪ ```\n»»»»»»»»»»»»»»»»»»»»»»»»»»»»»"
const UNDERA = "EMERGENCY!!🚨  |   🛑 GROUP UNDER ATTACK 🛑  |"
const MUTE = ".mute 1h"
const MUTED = ".mute 1d"
const TAGAD = "📛ADMIN TAKE SOME ACTION!! 📛"
const SCRI = "Running Shield....001"
const ADMIN = ".wakeup EMERGENCY!!🚨  |   🛑 GROUP UNDER ATTACK 🛑  |"
const Language = require('../language');
const Lang = Language.getString('tagall');



Mizuki.addCommand({ pattern: 'wakeup ?(.*)', fromMe: true, deleteCommand: false, desc: Lang.TAGALL_DESC, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] !== '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '@' + uye.id.split('@')[0] + ' ';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid, `${match[1]}` + '\n' + mesaj, MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })
    }
    else if (match[1] == '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '▫️ @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid, mesaj, MessageType.extendedText, { contextInfo: { mentionedJid: jids }, previewType: 0 })
    }
}));



Mizuki.addCommand({ pattern: 'activate', fromMe: true, deleteCommand: false, desc: AS_DESC, }, (async (message, match) => {

    const msg = "⛨ Safe Mode Activating ⛨"

    await message.client.sendMessage(
        message.jid, msg, MessageType.text);

    await message.client.sendMessage(
        message.jid, UNDERA, MessageType.text);

    await message.client.sendMessage(
        message.jid, MUTE, MessageType.text);

    await message.client.sendMessage(
        message.jid, SCRI, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, TAGAD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, ADMIN, MessageType.text);

}));


Mizuki.addCommand({ pattern: 'off', fromMe: true, delownsewcmd: false, desc: AS_DESC, }, (async (message, match) => {

    const msg = "⛨ Group Temp Mute Activating ⛨"

    await message.client.sendMessage(
        message.jid, msg, MessageType.text);

    await message.client.sendMessage(
        message.jid, UNDERA, MessageType.text);

    await message.client.sendMessage(
        message.jid, MUTED, MessageType.text);

    await message.client.sendMessage(
        message.jid, SCRI, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, TAGAD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, GUARD, MessageType.text);

    await message.client.sendMessage(
        message.jid, ADMIN, MessageType.text);

}));
