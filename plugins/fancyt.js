const Mizuki = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const FANCY_DESC = 'Generates fancy texts with your text.'



Mizuki.addCommand({ pattern: 'fancyt ?(.*)', desc: FANCY_DESC, fromMe: workt }, async (message, match) => {

const ntext = match[1]
if (!ntext) return await message.sendMessage(" *Please Input Some text* ")

await message.sendMessage('```Text converting...```')

await axios
      .get(`https://bx-hunter.herokuapp.com/api/fancytext?text=${ntext}&apikey=Ikyy69`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const gent = `🎀 𝑸𝒖𝒆𝒆𝒏 𝑴𝒊𝒛𝒖𝒌𝒊 𝑭𝒂𝒏𝒄𝒚 𝑻𝒆𝒙𝒕 🎀\n\n ${result} \n\n 𝚃𝚑𝚊𝚗𝚔 𝚢𝚘𝚞 𝚏𝚘𝚛 𝚞𝚜𝚒𝚗𝚐 𝚀𝚞𝚎𝚎𝚗 𝙼𝚒𝚣𝚞𝚔𝚒`
	
	 await message.client.sendMessage(message.jid, gent , MessageType.text, {
          quoted: message.data,
        })
	})    

})
  




















