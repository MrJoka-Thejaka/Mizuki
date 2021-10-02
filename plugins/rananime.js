const Mizuki = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const menu = '🌺 _*Queen Mizuki Anime List*_ 🌺\n\n|- .anime\n\n|- .foxanime\n\n|- .kemonime\n\n_*Thanks for using Queen Mizuki*_'
const ANI_DESC = 'Shows a list of all the anime commands.'



Mizuki.addCommand({ pattern: 'listanime ?(.*)', fromMe: workt, deleteCommand: false, desc: ANI_DESC, dontAddCommandList: false }, (async (message, match) => {
     
       await message.client.sendMessage(
        message.jid, menu, MessageType.text, {quoted: message.data});    


}));



Mizuki.addCommand({ pattern: 'anime ?(.*)', fromMe: workt,dontAddCommandList: true}, (async (message, match) => {
 
  var anime = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })
    
   await message.sendMessage(Buffer.from(anime.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '© ɪ ᴀᴍ Qᴜᴇᴇɴ ᴍɪᴢᴜᴋɪ'})
    
    
 
}));       


Mizuki.addCommand({ pattern: 'foxanime ?(.*)', fromMe: workt,dontAddCommandList: true}, (async (message, match) => {
 
  var anime = await axios.get(`https://zenzapi.xyz/api/anime/sfw/fox_girl?apikey=bd1d878624f7`, { responseType: 'arraybuffer' })
    
   await message.sendMessage(Buffer.from(anime.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '© ɪ ᴀᴍ Qᴜᴇᴇɴ ᴍɪᴢᴜᴋɪ'})
    
    
                    
}));                           

Mizuki.addCommand({ pattern: 'kemonime ?(.*)', fromMe: workt,dontAddCommandList: true}, (async (message, match) => {
 
  var anime = await axios.get(`https://zenzapi.xyz/api/anime/sfw/kemonomimi?apikey=bd1d878624f7`, { responseType: 'arraybuffer' })
    
   await message.sendMessage(Buffer.from(anime.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '© ɪ ᴀᴍ Qᴜᴇᴇɴ ᴍɪᴢᴜᴋɪ'})
    
    
 
}));                           
  
  
  
