

const Mizuki = require('../events');
const { MessageType, mimetype, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const TIKTOK_DESC = 'Downloads videos from TikTok.'
const DOWN_VIDEO = '```👾 Downloading your Video...```'
const CAPTION = '© ɪ ᴀᴍ Qᴜᴇᴇɴ ᴍɪᴢᴜᴋɪ'


Mizuki.addCommand({ pattern: 'tiktok ?(.*)', fromMe: workt, desc: TIKTOK_DESC }, async (message, match) => {

	const tlink = match[1]

	if (!tlink) return await message.client.sendMessage(message.jid, '*Please Give a vaild Insta link that includes TIkTok video !*', MessageType.text, { quoted: message.data });

	await message.client.sendMessage(message.jid, DOWN_VIDEO, MessageType.text, { quoted: message.data })

	await axios
		.get(`https://zenzapi.xyz/api/downloader/tiktok?url=${tlink}&apikey=bd1d878624f7`)
		.then(async (response) => {
			const {
				nowatermark
			} = response.data.result

			const tiktokvid = await axios.get(nowatermark, {
				responseType: 'arraybuffer'
			})

			await message.sendMessage(Buffer.from(tiktokvid.data), MessageType.video, {
				caption: CAPTION,
			})
				.catch(
					async (err) => await message.sendMessage("⛔️ *INVALID TIKTOK LINK*"),
				)
		})

}) 
