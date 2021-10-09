const Mizuki = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const PB_DESC = '.'
const msg = '```🗝️ Please don\'t use``` *.bot* ```to chat with me\n🎗️ Just mention me to chat with me.```'

Mizuki.addCommand({pattern: 'bot ?(.*)', fromMe: workt, desc: PB_DESC, dontAddCommandList: true}, (async (message, match) => {  
  
    await message.client.sendMessage(message.jid,msg,MessageType.text, {quoted: message.data});


}))
