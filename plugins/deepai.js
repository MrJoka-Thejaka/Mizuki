/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Mizuki = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); // For Creating File
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios'); // Resp Checker
const Config = require('../config'); // GAN STYLE Support

const got = require("got"); // Responses Catcher
const deepai = require('deepai'); // In local, you can create deepmain.js and use it in a customizable way. Doesn't Work on Web Servers!!
deepai.setApiKey('da119ff3-51d1-4b5e-aa04-b0c9fae2f396'); // Quickstart API Key

const Language = require('../language'); 
const Lang = Language.getString('deepai'); // Language Support

if (Config.WORKTYPE == 'private') {
    Mizuki.addCommand({pattern: 'deepai$', fromMe: true, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
        await message.sendMessage('💻 Usage: *.moodai <text>*\nℹ️ Desc: 🇱🇰 ඔබ ලියන ලිපියෙන් එය ඔබගේ මනෝභාවය සොයා ගනී.\n🇬🇧 It finds your mood from the article you wrote.\n\n💻 Usage: *.colorai*\nℹ️ Desc: 🇱🇰 කළු සහ සුදු ඡායාරූප වර්ණවත් කරයි.\n🇬🇧 It colorize bw photos.\n\n💻 Usage: *.faceai*\nℹ️ Desc: 🇱🇰 එය කෘතීම බුද්ධියෙන් කිසි දිනෙක නොතිබූ මිනිස් මුහුණු නිපදවයි.\n🇬🇧 Generates human faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.animai*\nℹ️ Desc: 🇱🇰 කෘතීම බුද්ධිය සමඟ කිසි දිනෙක නොතිබූ සජීවිකරණ මුහුණු ජනනය කරයි.\n🇬🇧 Generates anime faces with artificial intelligence, that never existed before.\n\n💻 Usage: *.superai*\nℹ️ Desc: 🇱🇰 එය කෘතීම බුද්ධිය සමඟ ඡායාරූපයේ ගුණාත්මක භාවය වැඩි කරයි.\n🇬🇧 Improves the quality of photos with Neural AI.\n\n💻 Usage: *.waifuai*\nℹ️ Desc: 🇱🇰 එය කෘතිම බුද්ධිය සමඟ ඡායාරූප වල වර්ණ තල ඒකාබද්ධ කරයි.\n🇬🇧 Combines the color palettes of photos with artificial intelligence.\n\n💻 Usage: *.dreamai*\nℹ️ Desc: 🇱🇰 ඡායාරූපයට ගැඹුරු සිහින බලපෑමක් යොදයි.\n🇬🇧 Applies deepdream effect to the photo.\n\n💻 Usage: *.neuraltalkai*\nℹ️ Desc: 🇱🇰 ඡායාරූපය කෘතීම බුද්ධියෙන් සිදු වන දේ පැහැදිලි කරයි.\n🇬🇧 Explain the phenomenon in the photo with artificial intelligence.\n\n💻 Usage: *.ttiai <text>*\nℹ️ Desc: 🇱🇰 පෙළ රූපයට පරිවර්තනය කරයි.\n🇬🇧 Converts text to a picture. (Text-to-Image)\n\n💻 Usage: *.toonai*\nℹ️ Desc: 🇱🇰 ඡායාරූපයෙහි ඇති මුහුණ කාටූන් චරිතයක් බවට පත් කරයි.\n🇬🇧 Turns the face in the photo into a cartoon character.\n\n💻 Usage: *.textai <text>*\nℹ️ Desc: 🇱🇰 ඔබ ලියන වාක්‍යයෙන් එය ඔබට කෘතිම කතාවක් නිර්මාණය කරයි.\n🇬🇧 It creates an artificial story for you from your sentence.\n\n💻 Usage: *.nudityai*\nℹ️ Desc: 🇱🇰 1 සහ 0 අතර ඡායාරූපයෙහි NSFW අගය පෙන්වයි. \n🇬🇧 It shows the NSFW value between 1 and 0 in the photo.\n\n💻 Usage: *.ganstyle*\nℹ️ Desc: 🇱🇰 ඔබ පිළිතුරු දුන් ඡායාරූපය දැනට තෝරාගත් රූපය සමඟ ඒකාබද්ධ කරයි.\n🇬🇧 Combines the photo you answered with the selected picture.\n\n⚠️ 🇱🇰 *මේ සියලු කෘතීම බුද්ධි මෙවලම් වැඩ කරන්නේ ගැඹුරු ඉගෙනීමෙනි. ඔබ එය වැඩි වැඩියෙන් භාවිතා කරන තරමට එය වැඩි වැඩියෙන් තොරතුරු ගබඩා කරයි.* ```ඉංග්‍රිසි අක්ෂර පමණක් භාවිතා කරන්න!```\n\n⚠️ 🇬🇧 *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```_*I am Mizuki*_ 👸' );
    }));
    Mizuki.addCommand({pattern: 'faceai$', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
    }));
    Mizuki.addCommand({pattern: 'animai', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var min = 10000; 
        var max = 50000;  
        var asenasrandomgen = Math.floor(Math.random() * (+max - +min) + +min); 
        var IMGWADATA = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/example-' + asenasrandomgen + '.jpg&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })
        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'}
        )
    }));
    Mizuki.addCommand({pattern: 'colorai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'waifuai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { thumbnail: base64str, mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'superai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'moodai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,
        });
        await message.reply(`*Mood:* ${resp.output}`);
    }));
    Mizuki.addCommand({pattern: 'dreamai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'neuraltalkai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.reply(`*Output:* ${resp.output}`);
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'ttiai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
    }));
    Mizuki.addCommand({pattern: 'toonai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'nudityai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔞',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.client.sendMessage(message.jid, `*Output:* ${resp.output.nsfw_score}`, MessageType.text, { quoted: message.data });
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'textai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,
        });
        await message.client.sendMessage(message.jid, `*Article:*\n ${resp.output}`, MessageType.text, { quoted: message.data });
    }));
    Mizuki.addCommand({pattern: 'ganstyle$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("fast-style-transfer", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {
    Mizuki.addCommand({pattern: 'deepai$', fromMe: false, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
        await message.sendMessage('💻 Usage: .moodai <text>\nℹ️ Desc: 🇱🇰 ඔබ ලියන ලිපියෙන් එය ඔබගේ මනෝභාවය සොයා ගනී.\n🇬🇧 It finds your mood from the article you wrote.\n\n💻 Usage: .colorai\nℹ️ Desc: 🇱🇰 කළු සහ සුදු ඡායාරූප වර්ණවත් කරයි.\n🇬🇧 It colorize bw photos.\n\n💻 Usage: .faceai\nℹ️ Desc: 🇱🇰 එය කෘතීම බුද්ධියෙන් කිසි දිනෙක නොතිබූ මිනිස් මුහුණු නිපදවයි.\n🇬🇧 Generates human faces with artificial intelligence, that never existed before.\n\n💻 Usage: .animai\nℹ️ Desc: 🇱🇰 කෘතීම බුද්ධිය සමඟ කිසි දිනෙක නොතිබූ සජීවිකරණ මුහුණු ජනනය කරයි.\n🇬🇧 Generates anime faces with artificial intelligence, that never existed before.\n\n💻 Usage: .superai\nℹ️ Desc: 🇱🇰 එය කෘතීම බුද්ධිය සමඟ ඡායාරූපයේ ගුණාත්මක භාවය වැඩි කරයි.\n🇬🇧 Improves the quality of photos with Neural AI.\n\n💻 Usage: .waifuai\nℹ️ Desc: 🇱🇰 එය කෘතිම බුද්ධිය සමඟ ඡායාරූප වල වර්ණ තල ඒකාබද්ධ කරයි.\n🇬🇧 Combines the color palettes of photos with artificial intelligence.\n\n💻 Usage: .dreamai\nℹ️ Desc: 🇱🇰 ඡායාරූපයට ගැඹුරු සිහින බලපෑමක් යොදයි.\n🇬🇧 Applies deepdream effect to the photo.\n\n💻 Usage: .neuraltalkai\nℹ️ Desc: 🇱🇰 ඡායාරූපය කෘතීම බුද්ධියෙන් සිදු වන දේ පැහැදිලි කරයි.\n🇬🇧 Explain the phenomenon in the photo with artificial intelligence.\n\n💻 Usage: .ttiai <text>\nℹ️ Desc: 🇱🇰 පෙළ රූපයට පරිවර්තනය කරයි.\n🇬🇧 Converts text to a picture. (Text-to-Image)\n\n💻 Usage: .toonai\nℹ️ Desc: 🇱🇰 ඡායාරූපයෙහි ඇති මුහුණ කාටූන් චරිතයක් බවට පත් කරයි.\n🇬🇧 Turns the face in the photo into a cartoon character.\n\n💻 Usage: .textai <text>\nℹ️ Desc: 🇱🇰 ඔබ ලියන වාක්‍යයෙන් එය ඔබට කෘතිම කතාවක් නිර්මාණය කරයි.\n🇬🇧 It creates an artificial story for you from your sentence.\n\n💻 Usage: .nudityai\nℹ️ Desc: 🇱🇰 1 සහ 0 අතර ඡායාරූපයෙහි NSFW අගය පෙන්වයි. \n🇬🇧 It shows the NSFW value between 1 and 0 in the photo.\n\n💻 Usage: .ganstyle\nℹ️ Desc: 🇱🇰 ඔබ පිළිතුරු දුන් ඡායාරූපය දැනට තෝරාගත් රූපය සමඟ ඒකාබද්ධ කරයි.\n🇬🇧 Combines the photo you answered with the selected picture.\n\n⚠️ 🇱🇰 මේ සියලු කෘතීම බුද්ධි මෙවලම් වැඩ කරන්නේ ගැඹුරු ඉගෙනීමෙනි. ඔබ එය වැඩි වැඩියෙන් භාවිතා කරන තරමට එය වැඩි වැඩියෙන් තොරතුරු ගබඩා කරයි. ඉංග්‍රිසි අක්ෂර පමණක් භාවිතා කරන්න!\n\n⚠️ 🇬🇧 All the tools here work with deep learning. The more you use it, the more information it stores. Use only english characters!I am Mizuki 👸```');
    }));
    Mizuki.addCommand({pattern: 'faceai$', fromMe: false, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
    }));
    Mizuki.addCommand({pattern: 'animai$', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var min = 10000; 
        var max = 50000;  
        var asenasrandomgen = Math.floor(Math.random() * (+max - +min) + +min); 
        var IMGWADATA = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/example-' + asenasrandomgen + '.jpg&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })
        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'}
        )
    }));
    Mizuki.addCommand({pattern: 'colorai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'waifuai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'superai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'moodai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: `${match[1]}`,
        });
        await message.reply(`*Mood:* ${resp.output}`);
    }));
    Mizuki.addCommand({pattern: 'dreamai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'neuraltalkai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.reply(`*Output:* ${resp.output}`);
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'ttiai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("text2img", {
            text: `${match[1]}`,
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
    }));
    Mizuki.addCommand({pattern: 'toonai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'nudityai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔞',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.client.sendMessage(message.jid, `*Output:* ${resp.output.nsfw_score}`, MessageType.text, { quoted: message.data });
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Mizuki.addCommand({pattern: 'textai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var resp = await deepai.callStandardApi("text-generator", {
            text: `${match[1]}`,
        });
        await message.client.sendMessage(message.jid, `*Article:*\n ${resp.output}`, MessageType.text, { quoted: message.data });
    }));
    Mizuki.addCommand({pattern: 'ganstyle$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');
        var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("fast-style-transfer", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍɪᴢᴜᴋɪ*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
