/*Coded By Mr.joka & Sisula Welgamage  
Mizuki Dev.
====================Profile Bio =================================//
*/
const Mizuki = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

const fs = require('fs');
const Language = require('../language');
const PB_DESC = "Changes Your Profile Bio"
const PN_DESC = "Changes Your Profile Name"
const NEED_WD = "Please Need Word !!"
const SET_UP = "*⚙️ Setting Up Profile Bio...*"
const SET_NAME = "*⚙️ Setting Up Profile Name...*"


Mizuki.addCommand({pattern: 'setbio ?(.*)', fromMe: true, desc: PB_DESC, dontAddCommandList: true}, (async (message, match) => {    
    const pname = match[1]

    if (!pname) return await message.sendMessage(errorMessage(NEED_WD))
    await message.client.sendMessage(message.jid,SET_UP,MessageType.text)
    await message.client.setStatus(pname);
    
}));

Mizuki.addCommand({pattern: 'setname ?(.*)', fromMe: true, desc: PN_DESC, dontAddCommandList: true}, (async (message, match) => {    
    const pname = match[1]

    if (!pname) return await message.sendMessage(errorMessage(NEED_WD))
    await message.client.sendMessage(message.jid,SET_NAME,MessageType.text);
    await message.client.updateProfileName(pname);
    
}));
