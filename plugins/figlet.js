
/*
const Mizuki = require('../events');
const figlet = require('figlet');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Language = require('../language');
const FONT_NEED = "please enter word"

//language support
const FIGLET_DESC = "ඉරිකෑලි එහෙමෙහෙ කර වචන සාදයි."
const FIGLET_NEED = "Makes fancy text with lines."
//end language

if (Config.WORKTYPE == 'private') {
   
  Mizuki.addCommand({ pattern: 'figlet ?(.*)', fromMe: true, desc: FIGLET_DESC,  deleteCommand: false}, async (message, match) => {
        if (!match[1]) return await message.client.sendMessage(message.jid,FONT_NEED,MessageType.text)
        figlet(match[1], function(err, data) {
    if (err) {
              
                await message.client.sendMessage(message.jid,'err' ,MessageType.text) 
        return;
    }
   else if (data) { 
          await message.client.sendMessage(message.jid,data ,MessageType.text)   
              })
            }
         )
       };

if (Config.WORKTYPE == 'public') {

  Mizuki.addCommand({ pattern: 'figlet ?(.*)', fromMe: false, desc: FIGLET_DESC,  deleteCommand: false}, async (message, match) => {
        if (!match[1]) return await message.client.sendMessage(message.jid,FONT_NEED,MessageType.text)
        figlet(match[1], function(err, data) {
    if (err) {
              
                await message.client.sendMessage(message.jid,'err' ,MessageType.text) 
        return;
    }
   else if (data) { 
          await message.client.sendMessage(message.jid,data ,MessageType.text)   
              })
            }
         )
       };
*/
