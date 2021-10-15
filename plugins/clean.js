const { MessageType, GroupSettingChange, ChatModification, WAConnectionTest } = require('@adiwajshing/baileys');
const Mizuki = require('../events');
const Config = require('../config');
const CLEAR_DESC = "Clears all the messages in the commanded group"

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Mizuki.addCommand({ pattern: 'clear', fromMe: true, desc: CLEAR_DESC, dontAddCommandList: false }, (async (message, match) => {

    await message.sendMessage('```cleaning chat... 🧹```');
    await message.client.modifyChat(message.jid, ChatModification.delete);
    await message.sendMessage('```Chat cleared 🚮```');
}));
//...
