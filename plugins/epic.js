/* Copyright (C) 2021 MrJoka-Thejaka..
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Mizuki - MrJoka
*/

const Mizuki = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const E_DESC = 'Sends an Estetic Pic.'


Mizuki.addCommand({ pattern: 'esthetic ?(.*)', fromMe: workt, desc: E_DESC }, (async (message, match) => {
      
        var espic = await axios.get(`https://api.zeks.xyz/api/estetikpic?apikey=thejakamizuki`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(espic.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '© ɪ ᴀᴍ Qᴜᴇᴇɴ ᴍɪᴢᴜᴋɪ'})
    
    }));

