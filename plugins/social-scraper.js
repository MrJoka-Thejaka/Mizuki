const Mizuki = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true

const PININSTA_DESC = 'Downloads posts from Instagram.'
const VININSTA_DESC = 'Downloads videos from Instagram.'
const DOWN_POST = '```👾 Downloading your post...```'
const DOWN_VIDEO = '```👾 Downloading your Video...```'
const CAPTION = '© ɪ ᴀᴍ Qᴜᴇᴇɴ ᴍɪᴢᴜᴋɪ'



Mizuki.addCommand({ pattern: 'poig ?(.*)', fromMe: workt, desc: PININSTA_DESC }, async (message, match) => {

	const iglink = match[1]

	if (!iglink) return await message.client.sendMessage(message.jid, '*Please Give a vaild Insta link that includes Photo*', MessageType.text, { quoted: message.data });

	await message.client.sendMessage(message.jid, DOWN_POST, MessageType.text, { quoted: message.data });

	await axios
		.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${iglink}&apikey=Ikyy69`)
		.then(async (response) => {
			const {
				linkdownload,
				status,
			} = response.data

			const linkdata = await axios.get(linkdownload, {
				responseType: 'arraybuffer'
			})

			await message.sendMessage(Buffer.from(linkdata.data), MessageType.image, {
				caption: CAPTION,
			})
				.catch(
					async (err) => await message.sendMessage("⛔️ *INVALID LINK OR NO PHOTO FOUND* 🥲"),
				)
		})

})

Mizuki.addCommand({ pattern: 'ig ?(.*)', fromMe: workt, desc: VININSTA_DESC }, async (message, match) => {

	const iglink = match[1]

	if (!iglink) return await message.client.sendMessage(message.jid, '*Please Give a vaild Insta link that includes Video*', MessageType.text, { quoted: message.data });

	await message.client.sendMessage(message.jid, DOWN_VIDEO, MessageType.text, { quoted: message.data });

	await axios
		.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${iglink}&apikey=Ikyy69`)
		.then(async (response) => {
			const {
				linkdownload,
				status,
			} = response.data

			const linkdata = await axios.get(linkdownload, {
				responseType: 'arraybuffer'
			})

			await message.sendMessage(Buffer.from(linkdata.data), MessageType.video, {
				caption: CAPTION,
			})
				.catch(
					async (err) => await message.sendMessage("⛔️ *INVALID LINK OR NO VIDEO FOUND*"),
				)
		})

})
