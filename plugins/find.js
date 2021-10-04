
const Mizuki = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config');
let workt = Config.WORKTYPE == 'public' ? false : true
const axios = require('axios');
const FormData = require('form-data');
const ffmpeg = require('fluent-ffmpeg');
const FIND_DESC = "Finds the Song"



Mizuki.addCommand({ pattern: 'find', fromMe: workt, desc: FIND_DESC }, (async (message, match) => {

    if (message.reply_message === false) return await message.client.sendMessage(message.jid, '*Please mention an audio message.!', MessageType.text);

    var filePath = await message.client.downloadAndSaveMediaMessage({

        key: {

            remoteJid: message.reply_message.jid,

            id: message.reply_message.id

        },

        message: message.reply_message.data.quotedMessage

    });

    var form = new FormData();

    ffmpeg(filePath).format('mp3').save('music.mp3').on('end', async () => {

        form.append('api_token', '43ZHCT0cAZBISjO8DG9PnE');

        form.append('file', fs.createReadStream('./music.mp3'));

        form.append('return', 'apple_music, spotify');

        var configs = {

            headers: {

                ...form.getHeaders()

            }

        }

        await axios.post('https://api.audd.io/', form, configs).then(async (response) => {

            var res = response.data

            if (res === 'success') {

                await message.client.sendMessage(message.jid, `Title: ${res.title}\nArtist: ${res.artist}`, MessageType.text);

            } else {

                await message.client.sendMessage(message.jid, '*No results found !*', MessageType.text);


            }

        }).catch((error) => {

            console.log(error);

        });

    });

}));
