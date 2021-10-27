const Mizuki = require('../events');
const {cobrauploader} = require('cobrabot-patch');
const fs = require('fs');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const TELE = 'Just a test for telegra.ph upoader'

Mizuki.addCommand({ pattern: 'telegraph ?(.*)', fromMe: workt, desc: TELE }, async (message, match) => {


var geturl = await cobrauploader(fs.readFileSync(media/gif/giphy.mp4))
console.log(geturl.link) 



await message.client.sendMessage(message.jid, geturl.link, MessageType.text)


})
