const Mizuki = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const PB_DESC = 'Sends Random Anime.' 



Mizuki.addCommand({ pattern: 'anime ?(.*)', fromMe: workt,dontAddCommandList: false}, (async (message, match) => {
 
  var anime = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })
    
   await message.sendMessage(Buffer.from(anime.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '©|ɪ ᴀᴍ Qᴜᴇᴇɴ ᴍɪᴢᴜᴋɪ'})
    
    
 
}));                                                                                               
  
  
  
