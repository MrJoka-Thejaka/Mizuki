
/*
const Mizuki = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const Axios = require('axios');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const { execFile } = require('child_process');
const CON = require('../config');
const Language = require('../language');
const Lang = Language.getString('info'); // Language Support
var ADMİN_USER = ''
var USER_USER = ''
var TR_USER = ''
var Hİ_USER = ''
var AZ_USER = ''
var SRİ_USER = ''
var RU_USER = ''
var USA_USER = ''
var OTHER = ''
if (CON.LANG == 'SI') ADMİN_USER = '*Admin Count:*', USER_USER = '*Member Count:*', TR_USER = '*Turkish Member Count:*', Hİ_USER = '*Indian Member Count:*', AZ_USER = '*Azerbayjan Member Count:*', SRİ_USER = '*Sri Lanka Member Count:*', RU_USER = '*Russian Member Count:*', USA_USER = '*USA Member Count:*', OTHER = '*Other Member Count:*'
if (CON.LANG == 'EN') ADMİN_USER = '*Admin Count:*', USER_USER = '*Member Count:*', TR_USER = '*Turkish Member Count:*', Hİ_USER = '*Indian Member Count:*', AZ_USER = '*Azerbayjan Member Count:*', SRİ_USER = '*Sri Lanka Member Count:*', RU_USER = '*Russian Member Count:*', USA_USER = '*USA Member Count:*', OTHER = '*Other Member Count:*'

if (CON.WORKTYPE == 'private') {
    Mizuki.addCommand({ pattern: 'info$', fromMe: true, desc: Lang.PL_DESC }, async (message, match) => {
        if (message.jid.includes('-')) {
            var json = await message.client.groupMetadataMinimal(message.jid)
            var code = await message.client.groupInviteCode(message.jid)
            var nwjson = await message.client.groupMetadata(message.jid)
            let region = await message.client.groupMetadata(message.jid);
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            var users1 = [];
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
                users1.push(uye.id.replace('c.us', 's.whatsapp.net'));
            });
            var admin_count = ' ' + jids.length + '\n'
            var user_count = ' ' + users1.length + '\n'
            var tr_user = [];
            var hi_user = [];
            var az_user = [];
            var sri_user = [];
            var ru_user = [];
            var usa_user = [];
            var other_user = [];
            region['participants'].map(async (reg) => {
                if (reg.jid.startsWith('90')) {
                    tr_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('994')) {
                    az_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('91')) {
                    hi_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('94')) {
                    sri_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('7')) {
                    ru_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('1')) {
                    usa_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            var trus = ' ' + tr_user.length + '\n'
            var hius = ' ' + hi_user.length + '\n'
            var azus = ' ' + az_user.length + '\n'
            var srius = ' ' + sri_user.length + '\n'
            var ruus = ' ' + ru_user.length + '\n'
            var usaus = ' ' + usa_user.length + '\n'
            var oth = user_count - trus - hius - azus - srius - ruus - usaus
            const user_count_msg = *👑 ADMİN_USER* + admin_count + *🙋‍♂️ USER_USER * + user_count + *🙋🏼‍♂️ SRİ_USER * + srius + *🙋🏽‍♂️ Hİ_USER * + hius + *🙋🏻‍♂️ AZ_USER * + azus + *🙋‍♂️ TR_USER * + trus + *🙋🏼‍♂️ RU_USER * + ruus + *🙋🏻‍♂️ USA_USER * + usaus + *🙋‍♂️ OTHER* + ' ' + oth + '\n\n'
            const msg = Lang.SUB + `${nwjson.subject} \n\n` + `*Grup ID:* ${json.id} \n\n` + Lang.OWN + `${json.owner} \n\n` + Lang.COD + `${code} \n\n` + user_count_msg + Lang.DES + `\n\n${nwjson.desc}`
            var ppUrl = await message.client.getProfilePicture(message.jid)
            const resim = await Axios.get(ppUrl, { responseType: 'arraybuffer' })
            await message.sendMessage(
                Buffer.from(resim.data),
                MessageType.image,
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid)
            var usppUrl = await message.client.getProfilePicture(message.jid)
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = Lang.JİD + `${usexists.jid} \n` + Lang.ST + `${status.status}`
            const resimnw = await Axios.get(usppUrl, { responseType: 'arraybuffer' })
            await message.sendMessage(
                Buffer.from(resimnw.data),
                MessageType.image,
                { caption: nwmsg }
            );
        }
    });
}
else if (CON.WORKTYPE == 'public') {
    Mizuki.addCommand({ pattern: 'info$', fromMe: false, desc: Lang.PL_DESC }, async (message, match) => {
        if (message.jid.includes('-')) {
            var json = await message.client.groupMetadataMinimal(message.jid)
            var code = await message.client.groupInviteCode(message.jid)
            var nwjson = await message.client.groupMetadata(message.jid)
            let region = await message.client.groupMetadata(message.jid);
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            var users1 = [];
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
                users1.push(uye.id.replace('c.us', 's.whatsapp.net'));
            });
            var admin_count = ' ' + jids.length + '\n'
            var user_count = ' ' + users1.length + '\n'
            var tr_user = [];
            var hi_user = [];
            var az_user = [];
            var sri_user = [];
            var ru_user = [];
            var usa_user = [];
            var other_user = [];
            region['participants'].map(async (reg) => {
                if (reg.jid.startsWith('90')) {
                    tr_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('994')) {
                    az_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('91')) {
                    hi_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('94')) {
                    sri_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('7')) {
                    ru_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('1')) {
                    usa_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            var trus = ' ' + tr_user.length + '\n'
            var hius = ' ' + hi_user.length + '\n'
            var azus = ' ' + az_user.length + '\n'
            var srius = ' ' + sri_user.length + '\n'
            var ruus = ' ' + ru_user.length + '\n'
            var usaus = ' ' + usa_user.length + '\n'
            var oth = user_count - trus - hius - azus - srius - ruus - usaus
            const user_count_msg = *👑 ADMİN_USER* + admin_count + *🙋‍♂️ USER_USER * + user_count + *🙋🏼‍♂️ SRİ_USER * + srius + *🙋🏽‍♂️ Hİ_USER * + hius + *🙋🏻‍♂️ AZ_USER * + azus + *🙋‍♂️ TR_USER * + trus + *🙋🏼‍♂️ RU_USER * + ruus + *🙋🏻‍♂️ USA_USER * + usaus + *🙋‍♂️ OTHER * + ' ' + oth + '\n\n'
            const msg = Lang.SUB + `${nwjson.subject} \n\n` + `*Grup ID:* ${json.id} \n\n` + Lang.OWN + `${json.owner} \n\n` + Lang.COD + `${code} \n\n` + user_count_msg + Lang.DES + `\n\n${nwjson.desc}`
            var ppUrl = await message.client.getProfilePicture(message.jid)
            const resim = await Axios.get(ppUrl, { responseType: 'arraybuffer' })
            await message.sendMessage(
                Buffer.from(resim.data),
                MessageType.image,
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid)
            var usppUrl = await message.client.getProfilePicture(message.jid)
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = Lang.JİD + `${usexists.jid} \n` + Lang.ST + `${status.status}`
            const resimnw = await Axios.get(usppUrl, { responseType: 'arraybuffer' })
            await message.sendMessage(
                Buffer.from(resimnw.data),
                MessageType.image,
                { caption: nwmsg }
            );
        }
    });
}

*/
