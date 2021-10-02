const Mizuki = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const FANCY_DESC = 'Generates fancy texts with your text.'



Mizuki.addCommand({ pattern: 'fancyt ?(.*)', desc: FANCY_DESC, fromMe: workt }, async (message, match) => {

const ntext = match[1]
if (!ntext) return await message.sendMessage(" *Please Input Some text* ")

await message.sendMessage('🤹‍♀️ *Text Converting* 🔄')

await axios
      .get(`https://bx-hunter.herokuapp.com/api/fancytext?text=${ntext}&apikey=Ikyy69`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const gent = `🎀  𝒬𝓊𝑒𝑒𝓃 𝑀𝒾𝓏𝓊𝓀𝒾 𝐹𝒶𝓃𝒸𝓎 𝒯𝑒𝓍𝓉  🎀 \n\n ${result} \n\n                 𝗧𝗵𝗮𝗻𝗸 𝘆𝗼𝘂 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗤𝘂𝗲𝗲𝗻 𝗠𝗶𝘇𝘂𝗸𝗶`
	
	 await message.client.sendMessage(message.jid, gent , MessageType.text, {
          quoted: message.data,
        })
	})    

})
  




















