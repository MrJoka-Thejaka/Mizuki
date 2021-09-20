/* Copyright (C) sisula welgamage.
coded by sisula welgamge
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DEVELOPER - MR-JOKA / SISULA WELGAMAGE
OWNER - MR-JOKA
*/
const Mizuki = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

const Language = require('../language');//language 
if (Config.LANG == 'EN') {
    var INFO_DESC = "Displays group or individual metadata data."
    var GROUP_SUB = "*💠Group name*"
    var GROUP_JID = "*💭Group JID Number:*"
    var GROUP_OWNER = "*⚜️Group ownership:*"
    var GROUP_LINK = "🆔Group code:*"
    var GROUP_DES = "*🗨️Group Description:*"
    var PRO_DES = "*🗨️ Description:*"
    var PRO_JID = "*💬 User JID :*"
    }
if (Config.LANG == 'SI') {
    var INFO_DESC = "කණ්ඩායමේ හෝ පුද්ගලයාගේ පාර-දත්ත දත්ත පෙන්වයි."
    var GROUP_SUB = "*💠කණ්ඩායමේ නම:*"
    var GROUP_JID = "*💭කණ්ඩායමේ JID අංකය:*"
    var GROUP_OWNER = "*⚜️කණ්ඩායම් අයිතිය:*"
    var GROUP_LINK = "*🆔කණ්ඩායමේ කේතය:*"
    var GROUP_DES = "*🗨️කණ්ඩායම් විස්තරය:*"
    var PRO_DES = "*🗨️ විස්තරය :*"
    var PRO_JID = "*💬 User JID අංකය :*"
    }

if (Config.WORKTYPE == 'private') {
    Mizuki.addCommand({ pattern: 'info', fromMe: true,  deleteCommand: false,  desc: INFO_DESC}, async (message, match) => { 

        if (message.jid.includes('-')) {

            var json = await message.client.groupMetadataMinimal(message.jid) 

            var code = await message.client.groupInviteCode(message.jid)

            var nwjson = await message.client.groupMetadata(message.jid) 

            const msg = GROUP_SUB + `\n ${nwjson.subject} \n\n` + GROUP_JID + `\n ${json.id} \n\n` + GROUP_OWNER + `\n ${json.owner} \n\n` + GROUP_LINK + `\n https://chat.whatsapp.com/${code} \n\n` + GROUP_DES + `\n ${nwjson.desc}`

            var ppUrl = await message.client.getProfilePicture(message.jid) 

            const infodata = await axios.get(ppUrl, {responseType: 'arraybuffer'})

            await message.sendMessage(
                Buffer.from(infodata.data), 
                MessageType.image, 
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const pgmsg = PRO_JID + `\n ${usexists.jid} \n\n` + PRO_DES + `\n ${status.status}`
            const prodata = await axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(prodata.data), 
                MessageType.image, 
                { caption: pgmsg }
            );
        }
    });
}

else if (Config.WORKTYPE == 'public') {
    Mizuki.addCommand({ pattern: 'info', fromMe: false, desc: INFO_DESC}, async (message, match) => { 
        
        if (message.jid.includes('-')) {

            var json = await message.client.groupMetadataMinimal(message.jid) 

            var code = await message.client.groupInviteCode(message.jid)

            var nwjson = await message.client.groupMetadata(message.jid) 

            const msg = GROUP_SUB + `\n ${nwjson.subject} \n\n` + GROUP_JID + `\n ${json.id} \n\n` + GROUP_OWNER + `\n ${json.owner} \n\n` + GROUP_LINK + `\n https://chat.whatsapp.com/${code} \n\n` + GROUP_DES + `\n ${nwjson.desc}`
            
            var ppUrl = await message.client.getProfilePicture(message.jid) 

            const infodata = await axios.get(ppUrl, {responseType: 'arraybuffer'})

            await message.sendMessage(
                Buffer.from(infodata.data), 
                MessageType.image, 
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const pgmsg = PRO_JID + `\n ${usexists.jid} \n\n` + PRO_DES + `\n ${status.status}`
            const prodata = await axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer.from(prodata.data), 
                MessageType.image, 
                { caption: pgmsg }
            );
        }
    });
}
