/* Copyright (C) 2020 Yusuf Usta. - Copyright (C) 2021 Mr.joka.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Mizuki -  Mr.joka
*/

const Mizuki = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Mizuki.addCommand({pattern: 'online', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
   if (Config.ALIVE == 'pp') {        
        let pp
        try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: Config.ALIVEMSG }); });
        
    }
    else if (Config.ALIVE == 'LOGO') {
        var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})        
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption:  Config.ALIVEMSG})
        }
    }));
};
if (Config.WORKTYPE == 'public') {

    Mizuki.addCommand({pattern: 'online', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
   if (Config.ALIVE == 'pp') {        
        let pp
        try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: Config.ALIVEMSG }); });
        
    }
    else if (Config.ALIVE == 'LOGO') {
        var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})        
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption:  Config.ALIVEMSG})
        }
    }));
};
