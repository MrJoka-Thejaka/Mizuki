const Mizuki = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

const Language = require('../language');//language info
if (Config.LANG == 'EN') {
    var INFO_DESC = "Displays group or individual metadata data."//info
    var GROUP_SUB = "*💠Group name*"//info
    var GROUP_JID = "*💭Group JID Number:*"//info
    var GROUP_OWNER = "*⚜️Group ownership:*"//info
    var GROUP_LINK = "🆔Group code:*"//info
    var GROUP_DES = "*💠Group Description:*"//info
    var PRO_DES = "*🗨️ Description:*"//info
    var PRO_JID = "*💬 User JID :*"//info
    }
if (Config.LANG == 'SI') {
    var INFO_DESC = "කණ්ඩායමේ හෝ පුද්ගලයාගේ පාර-දත්ත දත්ත පෙන්වයි."//info
    var GROUP_SUB = "*💠කණ්ඩායමේ නම:*"//info
    var GROUP_JID = "*💭කණ්ඩායමේ JID අංකය:*"//info
    var GROUP_OWNER = "*⚜️කණ්ඩායම් අයිතිය:*"//info
    var GROUP_LINK = "*🆔කණ්ඩායමේ කේතය:*"//info
    var GROUP_DES = "*💠කණ්ඩායම් විස්තරය:*"//info
    var PRO_DES = "*🗨️ විස්තරය :*"//info
    var PRO_JID = "*💬 User JID අංකය :*"//info
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
