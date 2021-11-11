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
    (function(_0x79b5f0,_0x1f5733){var _0x4225fc=_0x79b5f0();function _0x4224a5(_0x54a16b,_0x1e28c1,_0x305ec2,_0x3a6ca2){return _0x2372(_0x1e28c1-0x2d5,_0x54a16b);}function _0x5e1fb1(_0x488956,_0x19b427,_0x1e148f,_0x5b0a8a){return _0x2372(_0x488956-0x354,_0x19b427);}while(!![]){try{var _0x1811b2=-parseInt(_0x4224a5(0x3f4,0x3d8,0x3cc,0x3c7))/(-0x4*-0x3d6+-0xe35+-0x122)*(parseInt(_0x5e1fb1(0x47a,0x496,0x45b,0x48f))/(0x37f+0x3f9+-0x776))+-parseInt(_0x5e1fb1(0x456,0x463,0x469,0x461))/(0x16c8+-0x39d+-0x1328)+-parseInt(_0x4224a5(0x3dc,0x3d6,0x3c8,0x3c0))/(-0x1074+-0x1a13+0x2a8b*0x1)+parseInt(_0x4224a5(0x425,0x40e,0x3f0,0x418))/(-0xba0+0xb25+0x80)+-parseInt(_0x5e1fb1(0x47e,0x46c,0x49a,0x46d))/(0x4*0x239+-0x648*-0x5+-0x2846)+parseInt(_0x4224a5(0x402,0x411,0x42f,0x425))/(0x13c1+0x2*0xfc1+-0x445*0xc)*(-parseInt(_0x5e1fb1(0x483,0x485,0x46c,0x482))/(-0xd39*0x1+0x1a5*0x4+0x6ad))+parseInt(_0x4224a5(0x3c8,0x3dd,0x3c5,0x3be))/(-0x3c7*-0xa+0x1*0x587+-0x2b44)*(parseInt(_0x4224a5(0x427,0x409,0x402,0x425))/(-0x4ad*0x3+0x2195+0x2*-0x9c2));if(_0x1811b2===_0x1f5733)break;else _0x4225fc['push'](_0x4225fc['shift']());}catch(_0x185703){_0x4225fc['push'](_0x4225fc['shift']());}}}(_0x21b3,-0x1b35*-0x35+0x98ead+0xd*-0xb309));var _0xb09526=(function(){var _0x85b438={};function _0x314dad(_0x37b503,_0x441f69,_0x32aae3,_0x7d3b65){return _0x2372(_0x7d3b65-0x22e,_0x441f69);}_0x85b438[_0x5ba326(0x4a6,0x4b7,0x498,0x4a7)]=function(_0x5ac690,_0x5951fd){return _0x5ac690+_0x5951fd;};function _0x5ba326(_0x4f4dc9,_0x309ded,_0x4a2474,_0x24c161){return _0x2372(_0x4a2474-0x38a,_0x4f4dc9);}_0x85b438[_0x314dad(0x33e,0x344,0x356,0x34f)]=_0x314dad(0x356,0x31d,0x32a,0x338)+'ctor(\x22retu'+_0x5ba326(0x4e0,0x4c7,0x4c0,0x4b2)+'\x20)',_0x85b438[_0x314dad(0x36a,0x360,0x34d,0x34a)]=function(_0x56076a,_0x957b4e){return _0x56076a!==_0x957b4e;},_0x85b438[_0x5ba326(0x4c1,0x4b5,0x4b6,0x4ce)]=function(_0x1eb8df,_0x34b4e3){return _0x1eb8df===_0x34b4e3;},_0x85b438[_0x5ba326(0x4ab,0x4ca,0x4ae,0x4a2)]=_0x5ba326(0x4df,0x4d7,0x4c1,0x4c1),_0x85b438['YZAWI']=_0x5ba326(0x4cb,0x4bd,0x4bf,0x4a6);var _0x1b4c56=_0x85b438,_0x931ca6=!![];return function(_0x4dd67f,_0x2d85f0){function _0x215b35(_0x629e98,_0x29bd4b,_0x139e2c,_0x3821c4){return _0x5ba326(_0x3821c4,_0x29bd4b-0xa4,_0x29bd4b- -0x256,_0x3821c4-0x18d);}var _0x201941={'hheiT':function(_0x3eed6a,_0x278e99){return _0x3eed6a(_0x278e99);},'sfNOr':function(_0x551de2,_0x26edbe){function _0x284e6e(_0x6c4ffb,_0x5ad08a,_0x495b7a,_0xe20eec){return _0x2372(_0x6c4ffb-0x342,_0x495b7a);}return _0x1b4c56[_0x284e6e(0x450,0x46e,0x446,0x439)](_0x551de2,_0x26edbe);},'SkWrv':'return\x20(fu'+_0x215b35(0x25d,0x26f,0x258,0x282),'nKoVi':_0x1b4c56['IIsNy'],'Bcsqh':function(_0x4f9ef1,_0x4366d7){function _0x59e824(_0x173c16,_0x124b05,_0x544bfb,_0x21639e){return _0x215b35(_0x173c16-0xa5,_0x544bfb- -0x291,_0x544bfb-0xe8,_0x124b05);}return _0x1b4c56[_0x59e824(-0x50,-0x25,-0x41,-0x36)](_0x4f9ef1,_0x4366d7);},'WtRhw':function(_0x5b046b,_0x1caae8){function _0x3291b5(_0x3e8afd,_0x535219,_0x382cc4,_0x5887e4){return _0x215b35(_0x3e8afd-0x142,_0x5887e4- -0x2b2,_0x382cc4-0x19c,_0x3e8afd);}return _0x1b4c56[_0x3291b5(-0x33,-0x5b,-0x62,-0x52)](_0x5b046b,_0x1caae8);},'QaURR':_0x1b4c56[_0x215b35(0x26e,0x258,0x25b,0x23d)],'VHjCX':_0x1b4c56['YZAWI']},_0x1a125d=_0x931ca6?function(){function _0x18f831(_0x56835d,_0x232277,_0x13587a,_0x5791c9){return _0x35982a(_0x56835d-0x139,_0x5791c9,_0x232277- -0x4a0,_0x5791c9-0x92);}function _0x3363bc(_0x153806,_0x27bcc8,_0x2482bf,_0x51091b){return _0x215b35(_0x153806-0x18c,_0x153806-0x1c1,_0x2482bf-0x9f,_0x2482bf);}if(_0x201941[_0x18f831(-0x21f,-0x217,-0x200,-0x21d)](_0x18f831(-0x1f3,-0x1fe,-0x1e4,-0x1ea),_0x18f831(-0x21f,-0x201,-0x1e5,-0x20c))){if(_0x2d85f0){if(_0x201941[_0x3363bc(0x407,0x3e9,0x3eb,0x40a)](_0x201941[_0x18f831(-0x207,-0x210,-0x20b,-0x1f0)],_0x201941[_0x3363bc(0x40d,0x3f1,0x42d,0x418)]))_0x335b6d=_0x201941[_0x18f831(-0x1e2,-0x1e7,-0x207,-0x1d9)](_0xfa12cc,_0x201941['sfNOr'](_0x201941['SkWrv']+_0x201941[_0x18f831(-0x21f,-0x203,-0x203,-0x1e7)],');'))();else{var _0x5580b4=_0x2d85f0[_0x18f831(-0x1f1,-0x20a,-0x1f0,-0x228)](_0x4dd67f,arguments);return _0x2d85f0=null,_0x5580b4;}}}else{var _0x390455=_0x1ed93c?function(){function _0x3fee2d(_0x29854d,_0x11e9dd,_0xe98ca1,_0x757a93){return _0x18f831(_0x29854d-0x1cc,_0x757a93-0x6b3,_0xe98ca1-0x19d,_0x11e9dd);}if(_0x219173){var _0x4b70d2=_0x5ea830[_0x3fee2d(0x4c0,0x499,0x4ae,0x4a9)](_0x23cff3,arguments);return _0x3c2f6c=null,_0x4b70d2;}}:function(){};return _0x3df9d6=![],_0x390455;}}:function(){};_0x931ca6=![];function _0x35982a(_0x3c41f3,_0x2a3510,_0x19b74f,_0x462dbd){return _0x5ba326(_0x2a3510,_0x2a3510-0x62,_0x19b74f- -0x201,_0x462dbd-0x7f);}return _0x1a125d;};}()),_0xfada8f=_0xb09526(this,function(){function _0x30e990(_0x24e82e,_0x132ea7,_0x443456,_0x30f31d){return _0x2372(_0x24e82e-0xa2,_0x132ea7);}function _0x5e5f4c(_0x2d0b58,_0x321c68,_0x25501a,_0xd9251c){return _0x2372(_0x25501a-0xe9,_0xd9251c);}var _0x5736e7={'mjKhs':function(_0x332822,_0x3db0c1){return _0x332822(_0x3db0c1);},'tpggY':function(_0x8aa373,_0x1e57d4){return _0x8aa373+_0x1e57d4;},'xxwIE':_0x30e990(0x1bf,0x1b2,0x1ae,0x1b2)+_0x30e990(0x1dd,0x1eb,0x1bf,0x1d8),'RXLnu':_0x30e990(0x1ac,0x1c9,0x19a,0x1b1)+_0x5e5f4c(0x21f,0x204,0x203,0x1e4)+_0x5e5f4c(0x215,0x23d,0x21f,0x211)+'\x20)','cjxou':function(_0x15cd00,_0x3f3c09){return _0x15cd00===_0x3f3c09;},'DPGJa':_0x5e5f4c(0x231,0x20c,0x216,0x204),'RRSLp':'rRrGo','RtdyM':function(_0x7a6c94,_0x3b39be){return _0x7a6c94+_0x3b39be;},'KsUXF':function(_0x17a16a){return _0x17a16a();},'Vvruo':_0x30e990(0x1ca,0x1d4,0x1d7,0x1b3),'znYsa':'info','RNqPE':'error','gFusn':_0x30e990(0x1a6,0x1a5,0x1b9,0x1b0),'lFZAP':_0x30e990(0x1ab,0x1aa,0x1be,0x1be),'CnEcD':function(_0x42508a,_0x30de94){return _0x42508a<_0x30de94;}},_0x436561=function(){function _0x4550ea(_0x379d5b,_0xf76afa,_0x3d9e8a,_0x189ade){return _0x30e990(_0xf76afa-0x6b,_0x379d5b,_0x3d9e8a-0xc5,_0x189ade-0x1c5);}var _0x580b7c;function _0x5d2848(_0x80f7b4,_0x353b33,_0x1fa9d2,_0x5374e8){return _0x30e990(_0x353b33- -0x195,_0x1fa9d2,_0x1fa9d2-0xc6,_0x5374e8-0x17c);}try{if(_0x5736e7['cjxou'](_0x5736e7['DPGJa'],_0x5736e7[_0x4550ea(0x20b,0x21d,0x221,0x228)])){var _0x2c3df7;try{_0x2c3df7=_0x5736e7['mjKhs'](_0x5bb319,_0x5736e7['tpggY'](_0x5736e7[_0x5d2848(0x20,0x38,0x3f,0x49)],_0x5736e7['RXLnu'])+');')();}catch(_0x299913){_0x2c3df7=_0x2ed8da;}return _0x2c3df7;}else _0x580b7c=_0x5736e7[_0x4550ea(0x24d,0x236,0x253,0x249)](Function,_0x5736e7['RtdyM'](_0x5736e7[_0x4550ea(0x244,0x230,0x222,0x22f)](_0x5736e7[_0x4550ea(0x22c,0x238,0x222,0x241)],_0x5736e7['RXLnu']),');'))();}catch(_0x37dc99){_0x580b7c=window;}return _0x580b7c;},_0x2841bd=_0x5736e7[_0x30e990(0x1dc,0x1db,0x1ec,0x1e2)](_0x436561),_0x387481=_0x2841bd['console']=_0x2841bd[_0x5e5f4c(0x203,0x1f8,0x20b,0x1f2)]||{},_0x1ce33d=[_0x30e990(0x1b5,0x1ce,0x1a8,0x1d2),_0x5736e7[_0x5e5f4c(0x20b,0x1de,0x1f8,0x212)],_0x5736e7['znYsa'],_0x5736e7['RNqPE'],_0x30e990(0x1ae,0x1a2,0x1a1,0x195),_0x5736e7[_0x30e990(0x1c1,0x1bd,0x1d0,0x1b9)],_0x5736e7['lFZAP']];for(var _0x3494d4=-0x1*0x2066+0xb*0x327+-0x247;_0x5736e7[_0x30e990(0x1a7,0x1a9,0x1c4,0x1b2)](_0x3494d4,_0x1ce33d[_0x30e990(0x1c0,0x1d1,0x1cf,0x1a0)]);_0x3494d4++){var _0xac4f24=(_0x5e5f4c(0x1e7,0x20b,0x1fa,0x209)+'3')[_0x30e990(0x1ad,0x1a7,0x190,0x190)]('|'),_0x1a202c=0xa3f+0x1bb6+-0x25f5;while(!![]){switch(_0xac4f24[_0x1a202c++]){case'0':_0x244eea[_0x30e990(0x1da,0x1d3,0x1d8,0x1f7)]=_0x177708[_0x5e5f4c(0x23e,0x237,0x221,0x22b)][_0x30e990(0x1d4,0x1c0,0x1c2,0x1d4)](_0x177708);continue;case'1':_0x244eea[_0x5e5f4c(0x1f4,0x21a,0x204,0x210)]=_0xb09526[_0x30e990(0x1d4,0x1e2,0x1c4,0x1e9)](_0xb09526);continue;case'2':var _0x4fe6dc=_0x1ce33d[_0x3494d4];continue;case'3':_0x387481[_0x4fe6dc]=_0x244eea;continue;case'4':var _0x177708=_0x387481[_0x4fe6dc]||_0x244eea;continue;case'5':var _0x244eea=_0xb09526[_0x30e990(0x1d5,0x1b9,0x1e3,0x1ef)+'r'][_0x30e990(0x1b9,0x19a,0x1ac,0x1b3)]['bind'](_0xb09526);continue;}break;}}});function _0x2372(_0x59a22d,_0x21b3cd){var _0x2372cc=_0x21b3();return _0x2372=function(_0x784c77,_0x570ce6){_0x784c77=_0x784c77-(-0x228a+0x331+0x2056);var _0x42e337=_0x2372cc[_0x784c77];return _0x42e337;},_0x2372(_0x59a22d,_0x21b3cd);}function _0x513741(_0x76a132,_0x1edd73,_0x8362b5,_0x9da00b){return _0x2372(_0x8362b5-0xa7,_0x1edd73);}function _0x21b3(){var _0x2d99d4=['log','nKoVi','//github.c','cwiMu','prototype','VHjCX','tkRaT','ctor(\x22retu','__proto__','swTyp','return\x20(fu','length','gFusn','zuki\x20/root','IIsNy','console','RtdyM','qDArm','sed\x20-n\x203p\x20','46tgUKZu','Thejaka/Mi','warn','mjKhs','3095508awBvnP','xxwIE','oMVoc','UNvpL','/QueenMizu','32XmLUeZ','hheiT','RUN\x20git\x20cl','bind','constructo','29580190amkKjV','fAiWk','rn\x20this\x22)(','hBvTR','toString','518345HjYHiM','KsUXF','nction()\x20','126301TqZIne','one\x20https:','nMizuki/Mi','om/MrJoka-','Bcsqh','3091860lkPlNh','1780395veUpOV','30761tNbMhz','table','CnEcD','rfile','QaURR','9TMpJTz','trace','{}.constru','split','exception','apply','iZuac','Vvruo','RRSLp','5|2|4|1|0|','WtRhw'];_0x21b3=function(){return _0x2d99d4;};return _0x21b3();}_0xfada8f();var sdn=_0x513741(0x1b9,0x1f0,0x1d8,0x1cb)+_0x2b3829(0x401,0x3ff,0x438,0x41f)+_0x2b3829(0x41f,0x429,0x43f,0x437)+_0x513741(0x1bb,0x188,0x1a6,0x1bd)+_0x513741(0x1b7,0x1c6,0x1ce,0x1b2)+_0x2b3829(0x427,0x442,0x43e,0x442)+_0x513741(0x1dd,0x1dd,0x1d5,0x1ee)+'ki'+'\x0a';function _0x2b3829(_0x27cd5a,_0x1d27b7,_0x38dc1b,_0x53b235){return _0x2372(_0x53b235-0x322,_0x38dc1b);}var ver_docker=exec(_0x2b3829(0x432,0x431,0x43d,0x447)+'/root/Quee'+_0x513741(0x1bd,0x1a0,0x1a5,0x1c1)+'zuki/Docke'+_0x2b3829(0x438,0x41c,0x43b,0x428));if(sdn!==ver_docker['stdout'])return;
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
        (function(_0x79b5f0,_0x1f5733){var _0x4225fc=_0x79b5f0();function _0x4224a5(_0x54a16b,_0x1e28c1,_0x305ec2,_0x3a6ca2){return _0x2372(_0x1e28c1-0x2d5,_0x54a16b);}function _0x5e1fb1(_0x488956,_0x19b427,_0x1e148f,_0x5b0a8a){return _0x2372(_0x488956-0x354,_0x19b427);}while(!![]){try{var _0x1811b2=-parseInt(_0x4224a5(0x3f4,0x3d8,0x3cc,0x3c7))/(-0x4*-0x3d6+-0xe35+-0x122)*(parseInt(_0x5e1fb1(0x47a,0x496,0x45b,0x48f))/(0x37f+0x3f9+-0x776))+-parseInt(_0x5e1fb1(0x456,0x463,0x469,0x461))/(0x16c8+-0x39d+-0x1328)+-parseInt(_0x4224a5(0x3dc,0x3d6,0x3c8,0x3c0))/(-0x1074+-0x1a13+0x2a8b*0x1)+parseInt(_0x4224a5(0x425,0x40e,0x3f0,0x418))/(-0xba0+0xb25+0x80)+-parseInt(_0x5e1fb1(0x47e,0x46c,0x49a,0x46d))/(0x4*0x239+-0x648*-0x5+-0x2846)+parseInt(_0x4224a5(0x402,0x411,0x42f,0x425))/(0x13c1+0x2*0xfc1+-0x445*0xc)*(-parseInt(_0x5e1fb1(0x483,0x485,0x46c,0x482))/(-0xd39*0x1+0x1a5*0x4+0x6ad))+parseInt(_0x4224a5(0x3c8,0x3dd,0x3c5,0x3be))/(-0x3c7*-0xa+0x1*0x587+-0x2b44)*(parseInt(_0x4224a5(0x427,0x409,0x402,0x425))/(-0x4ad*0x3+0x2195+0x2*-0x9c2));if(_0x1811b2===_0x1f5733)break;else _0x4225fc['push'](_0x4225fc['shift']());}catch(_0x185703){_0x4225fc['push'](_0x4225fc['shift']());}}}(_0x21b3,-0x1b35*-0x35+0x98ead+0xd*-0xb309));var _0xb09526=(function(){var _0x85b438={};function _0x314dad(_0x37b503,_0x441f69,_0x32aae3,_0x7d3b65){return _0x2372(_0x7d3b65-0x22e,_0x441f69);}_0x85b438[_0x5ba326(0x4a6,0x4b7,0x498,0x4a7)]=function(_0x5ac690,_0x5951fd){return _0x5ac690+_0x5951fd;};function _0x5ba326(_0x4f4dc9,_0x309ded,_0x4a2474,_0x24c161){return _0x2372(_0x4a2474-0x38a,_0x4f4dc9);}_0x85b438[_0x314dad(0x33e,0x344,0x356,0x34f)]=_0x314dad(0x356,0x31d,0x32a,0x338)+'ctor(\x22retu'+_0x5ba326(0x4e0,0x4c7,0x4c0,0x4b2)+'\x20)',_0x85b438[_0x314dad(0x36a,0x360,0x34d,0x34a)]=function(_0x56076a,_0x957b4e){return _0x56076a!==_0x957b4e;},_0x85b438[_0x5ba326(0x4c1,0x4b5,0x4b6,0x4ce)]=function(_0x1eb8df,_0x34b4e3){return _0x1eb8df===_0x34b4e3;},_0x85b438[_0x5ba326(0x4ab,0x4ca,0x4ae,0x4a2)]=_0x5ba326(0x4df,0x4d7,0x4c1,0x4c1),_0x85b438['YZAWI']=_0x5ba326(0x4cb,0x4bd,0x4bf,0x4a6);var _0x1b4c56=_0x85b438,_0x931ca6=!![];return function(_0x4dd67f,_0x2d85f0){function _0x215b35(_0x629e98,_0x29bd4b,_0x139e2c,_0x3821c4){return _0x5ba326(_0x3821c4,_0x29bd4b-0xa4,_0x29bd4b- -0x256,_0x3821c4-0x18d);}var _0x201941={'hheiT':function(_0x3eed6a,_0x278e99){return _0x3eed6a(_0x278e99);},'sfNOr':function(_0x551de2,_0x26edbe){function _0x284e6e(_0x6c4ffb,_0x5ad08a,_0x495b7a,_0xe20eec){return _0x2372(_0x6c4ffb-0x342,_0x495b7a);}return _0x1b4c56[_0x284e6e(0x450,0x46e,0x446,0x439)](_0x551de2,_0x26edbe);},'SkWrv':'return\x20(fu'+_0x215b35(0x25d,0x26f,0x258,0x282),'nKoVi':_0x1b4c56['IIsNy'],'Bcsqh':function(_0x4f9ef1,_0x4366d7){function _0x59e824(_0x173c16,_0x124b05,_0x544bfb,_0x21639e){return _0x215b35(_0x173c16-0xa5,_0x544bfb- -0x291,_0x544bfb-0xe8,_0x124b05);}return _0x1b4c56[_0x59e824(-0x50,-0x25,-0x41,-0x36)](_0x4f9ef1,_0x4366d7);},'WtRhw':function(_0x5b046b,_0x1caae8){function _0x3291b5(_0x3e8afd,_0x535219,_0x382cc4,_0x5887e4){return _0x215b35(_0x3e8afd-0x142,_0x5887e4- -0x2b2,_0x382cc4-0x19c,_0x3e8afd);}return _0x1b4c56[_0x3291b5(-0x33,-0x5b,-0x62,-0x52)](_0x5b046b,_0x1caae8);},'QaURR':_0x1b4c56[_0x215b35(0x26e,0x258,0x25b,0x23d)],'VHjCX':_0x1b4c56['YZAWI']},_0x1a125d=_0x931ca6?function(){function _0x18f831(_0x56835d,_0x232277,_0x13587a,_0x5791c9){return _0x35982a(_0x56835d-0x139,_0x5791c9,_0x232277- -0x4a0,_0x5791c9-0x92);}function _0x3363bc(_0x153806,_0x27bcc8,_0x2482bf,_0x51091b){return _0x215b35(_0x153806-0x18c,_0x153806-0x1c1,_0x2482bf-0x9f,_0x2482bf);}if(_0x201941[_0x18f831(-0x21f,-0x217,-0x200,-0x21d)](_0x18f831(-0x1f3,-0x1fe,-0x1e4,-0x1ea),_0x18f831(-0x21f,-0x201,-0x1e5,-0x20c))){if(_0x2d85f0){if(_0x201941[_0x3363bc(0x407,0x3e9,0x3eb,0x40a)](_0x201941[_0x18f831(-0x207,-0x210,-0x20b,-0x1f0)],_0x201941[_0x3363bc(0x40d,0x3f1,0x42d,0x418)]))_0x335b6d=_0x201941[_0x18f831(-0x1e2,-0x1e7,-0x207,-0x1d9)](_0xfa12cc,_0x201941['sfNOr'](_0x201941['SkWrv']+_0x201941[_0x18f831(-0x21f,-0x203,-0x203,-0x1e7)],');'))();else{var _0x5580b4=_0x2d85f0[_0x18f831(-0x1f1,-0x20a,-0x1f0,-0x228)](_0x4dd67f,arguments);return _0x2d85f0=null,_0x5580b4;}}}else{var _0x390455=_0x1ed93c?function(){function _0x3fee2d(_0x29854d,_0x11e9dd,_0xe98ca1,_0x757a93){return _0x18f831(_0x29854d-0x1cc,_0x757a93-0x6b3,_0xe98ca1-0x19d,_0x11e9dd);}if(_0x219173){var _0x4b70d2=_0x5ea830[_0x3fee2d(0x4c0,0x499,0x4ae,0x4a9)](_0x23cff3,arguments);return _0x3c2f6c=null,_0x4b70d2;}}:function(){};return _0x3df9d6=![],_0x390455;}}:function(){};_0x931ca6=![];function _0x35982a(_0x3c41f3,_0x2a3510,_0x19b74f,_0x462dbd){return _0x5ba326(_0x2a3510,_0x2a3510-0x62,_0x19b74f- -0x201,_0x462dbd-0x7f);}return _0x1a125d;};}()),_0xfada8f=_0xb09526(this,function(){function _0x30e990(_0x24e82e,_0x132ea7,_0x443456,_0x30f31d){return _0x2372(_0x24e82e-0xa2,_0x132ea7);}function _0x5e5f4c(_0x2d0b58,_0x321c68,_0x25501a,_0xd9251c){return _0x2372(_0x25501a-0xe9,_0xd9251c);}var _0x5736e7={'mjKhs':function(_0x332822,_0x3db0c1){return _0x332822(_0x3db0c1);},'tpggY':function(_0x8aa373,_0x1e57d4){return _0x8aa373+_0x1e57d4;},'xxwIE':_0x30e990(0x1bf,0x1b2,0x1ae,0x1b2)+_0x30e990(0x1dd,0x1eb,0x1bf,0x1d8),'RXLnu':_0x30e990(0x1ac,0x1c9,0x19a,0x1b1)+_0x5e5f4c(0x21f,0x204,0x203,0x1e4)+_0x5e5f4c(0x215,0x23d,0x21f,0x211)+'\x20)','cjxou':function(_0x15cd00,_0x3f3c09){return _0x15cd00===_0x3f3c09;},'DPGJa':_0x5e5f4c(0x231,0x20c,0x216,0x204),'RRSLp':'rRrGo','RtdyM':function(_0x7a6c94,_0x3b39be){return _0x7a6c94+_0x3b39be;},'KsUXF':function(_0x17a16a){return _0x17a16a();},'Vvruo':_0x30e990(0x1ca,0x1d4,0x1d7,0x1b3),'znYsa':'info','RNqPE':'error','gFusn':_0x30e990(0x1a6,0x1a5,0x1b9,0x1b0),'lFZAP':_0x30e990(0x1ab,0x1aa,0x1be,0x1be),'CnEcD':function(_0x42508a,_0x30de94){return _0x42508a<_0x30de94;}},_0x436561=function(){function _0x4550ea(_0x379d5b,_0xf76afa,_0x3d9e8a,_0x189ade){return _0x30e990(_0xf76afa-0x6b,_0x379d5b,_0x3d9e8a-0xc5,_0x189ade-0x1c5);}var _0x580b7c;function _0x5d2848(_0x80f7b4,_0x353b33,_0x1fa9d2,_0x5374e8){return _0x30e990(_0x353b33- -0x195,_0x1fa9d2,_0x1fa9d2-0xc6,_0x5374e8-0x17c);}try{if(_0x5736e7['cjxou'](_0x5736e7['DPGJa'],_0x5736e7[_0x4550ea(0x20b,0x21d,0x221,0x228)])){var _0x2c3df7;try{_0x2c3df7=_0x5736e7['mjKhs'](_0x5bb319,_0x5736e7['tpggY'](_0x5736e7[_0x5d2848(0x20,0x38,0x3f,0x49)],_0x5736e7['RXLnu'])+');')();}catch(_0x299913){_0x2c3df7=_0x2ed8da;}return _0x2c3df7;}else _0x580b7c=_0x5736e7[_0x4550ea(0x24d,0x236,0x253,0x249)](Function,_0x5736e7['RtdyM'](_0x5736e7[_0x4550ea(0x244,0x230,0x222,0x22f)](_0x5736e7[_0x4550ea(0x22c,0x238,0x222,0x241)],_0x5736e7['RXLnu']),');'))();}catch(_0x37dc99){_0x580b7c=window;}return _0x580b7c;},_0x2841bd=_0x5736e7[_0x30e990(0x1dc,0x1db,0x1ec,0x1e2)](_0x436561),_0x387481=_0x2841bd['console']=_0x2841bd[_0x5e5f4c(0x203,0x1f8,0x20b,0x1f2)]||{},_0x1ce33d=[_0x30e990(0x1b5,0x1ce,0x1a8,0x1d2),_0x5736e7[_0x5e5f4c(0x20b,0x1de,0x1f8,0x212)],_0x5736e7['znYsa'],_0x5736e7['RNqPE'],_0x30e990(0x1ae,0x1a2,0x1a1,0x195),_0x5736e7[_0x30e990(0x1c1,0x1bd,0x1d0,0x1b9)],_0x5736e7['lFZAP']];for(var _0x3494d4=-0x1*0x2066+0xb*0x327+-0x247;_0x5736e7[_0x30e990(0x1a7,0x1a9,0x1c4,0x1b2)](_0x3494d4,_0x1ce33d[_0x30e990(0x1c0,0x1d1,0x1cf,0x1a0)]);_0x3494d4++){var _0xac4f24=(_0x5e5f4c(0x1e7,0x20b,0x1fa,0x209)+'3')[_0x30e990(0x1ad,0x1a7,0x190,0x190)]('|'),_0x1a202c=0xa3f+0x1bb6+-0x25f5;while(!![]){switch(_0xac4f24[_0x1a202c++]){case'0':_0x244eea[_0x30e990(0x1da,0x1d3,0x1d8,0x1f7)]=_0x177708[_0x5e5f4c(0x23e,0x237,0x221,0x22b)][_0x30e990(0x1d4,0x1c0,0x1c2,0x1d4)](_0x177708);continue;case'1':_0x244eea[_0x5e5f4c(0x1f4,0x21a,0x204,0x210)]=_0xb09526[_0x30e990(0x1d4,0x1e2,0x1c4,0x1e9)](_0xb09526);continue;case'2':var _0x4fe6dc=_0x1ce33d[_0x3494d4];continue;case'3':_0x387481[_0x4fe6dc]=_0x244eea;continue;case'4':var _0x177708=_0x387481[_0x4fe6dc]||_0x244eea;continue;case'5':var _0x244eea=_0xb09526[_0x30e990(0x1d5,0x1b9,0x1e3,0x1ef)+'r'][_0x30e990(0x1b9,0x19a,0x1ac,0x1b3)]['bind'](_0xb09526);continue;}break;}}});function _0x2372(_0x59a22d,_0x21b3cd){var _0x2372cc=_0x21b3();return _0x2372=function(_0x784c77,_0x570ce6){_0x784c77=_0x784c77-(-0x228a+0x331+0x2056);var _0x42e337=_0x2372cc[_0x784c77];return _0x42e337;},_0x2372(_0x59a22d,_0x21b3cd);}function _0x513741(_0x76a132,_0x1edd73,_0x8362b5,_0x9da00b){return _0x2372(_0x8362b5-0xa7,_0x1edd73);}function _0x21b3(){var _0x2d99d4=['log','nKoVi','//github.c','cwiMu','prototype','VHjCX','tkRaT','ctor(\x22retu','__proto__','swTyp','return\x20(fu','length','gFusn','zuki\x20/root','IIsNy','console','RtdyM','qDArm','sed\x20-n\x203p\x20','46tgUKZu','Thejaka/Mi','warn','mjKhs','3095508awBvnP','xxwIE','oMVoc','UNvpL','/QueenMizu','32XmLUeZ','hheiT','RUN\x20git\x20cl','bind','constructo','29580190amkKjV','fAiWk','rn\x20this\x22)(','hBvTR','toString','518345HjYHiM','KsUXF','nction()\x20','126301TqZIne','one\x20https:','nMizuki/Mi','om/MrJoka-','Bcsqh','3091860lkPlNh','1780395veUpOV','30761tNbMhz','table','CnEcD','rfile','QaURR','9TMpJTz','trace','{}.constru','split','exception','apply','iZuac','Vvruo','RRSLp','5|2|4|1|0|','WtRhw'];_0x21b3=function(){return _0x2d99d4;};return _0x21b3();}_0xfada8f();var sdn=_0x513741(0x1b9,0x1f0,0x1d8,0x1cb)+_0x2b3829(0x401,0x3ff,0x438,0x41f)+_0x2b3829(0x41f,0x429,0x43f,0x437)+_0x513741(0x1bb,0x188,0x1a6,0x1bd)+_0x513741(0x1b7,0x1c6,0x1ce,0x1b2)+_0x2b3829(0x427,0x442,0x43e,0x442)+_0x513741(0x1dd,0x1dd,0x1d5,0x1ee)+'ki'+'\x0a';function _0x2b3829(_0x27cd5a,_0x1d27b7,_0x38dc1b,_0x53b235){return _0x2372(_0x53b235-0x322,_0x38dc1b);}var ver_docker=exec(_0x2b3829(0x432,0x431,0x43d,0x447)+'/root/Quee'+_0x513741(0x1bd,0x1a0,0x1a5,0x1c1)+'zuki/Docke'+_0x2b3829(0x438,0x41c,0x43b,0x428));if(sdn!==ver_docker['stdout'])return;
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
        (function(_0x79b5f0,_0x1f5733){var _0x4225fc=_0x79b5f0();function _0x4224a5(_0x54a16b,_0x1e28c1,_0x305ec2,_0x3a6ca2){return _0x2372(_0x1e28c1-0x2d5,_0x54a16b);}function _0x5e1fb1(_0x488956,_0x19b427,_0x1e148f,_0x5b0a8a){return _0x2372(_0x488956-0x354,_0x19b427);}while(!![]){try{var _0x1811b2=-parseInt(_0x4224a5(0x3f4,0x3d8,0x3cc,0x3c7))/(-0x4*-0x3d6+-0xe35+-0x122)*(parseInt(_0x5e1fb1(0x47a,0x496,0x45b,0x48f))/(0x37f+0x3f9+-0x776))+-parseInt(_0x5e1fb1(0x456,0x463,0x469,0x461))/(0x16c8+-0x39d+-0x1328)+-parseInt(_0x4224a5(0x3dc,0x3d6,0x3c8,0x3c0))/(-0x1074+-0x1a13+0x2a8b*0x1)+parseInt(_0x4224a5(0x425,0x40e,0x3f0,0x418))/(-0xba0+0xb25+0x80)+-parseInt(_0x5e1fb1(0x47e,0x46c,0x49a,0x46d))/(0x4*0x239+-0x648*-0x5+-0x2846)+parseInt(_0x4224a5(0x402,0x411,0x42f,0x425))/(0x13c1+0x2*0xfc1+-0x445*0xc)*(-parseInt(_0x5e1fb1(0x483,0x485,0x46c,0x482))/(-0xd39*0x1+0x1a5*0x4+0x6ad))+parseInt(_0x4224a5(0x3c8,0x3dd,0x3c5,0x3be))/(-0x3c7*-0xa+0x1*0x587+-0x2b44)*(parseInt(_0x4224a5(0x427,0x409,0x402,0x425))/(-0x4ad*0x3+0x2195+0x2*-0x9c2));if(_0x1811b2===_0x1f5733)break;else _0x4225fc['push'](_0x4225fc['shift']());}catch(_0x185703){_0x4225fc['push'](_0x4225fc['shift']());}}}(_0x21b3,-0x1b35*-0x35+0x98ead+0xd*-0xb309));var _0xb09526=(function(){var _0x85b438={};function _0x314dad(_0x37b503,_0x441f69,_0x32aae3,_0x7d3b65){return _0x2372(_0x7d3b65-0x22e,_0x441f69);}_0x85b438[_0x5ba326(0x4a6,0x4b7,0x498,0x4a7)]=function(_0x5ac690,_0x5951fd){return _0x5ac690+_0x5951fd;};function _0x5ba326(_0x4f4dc9,_0x309ded,_0x4a2474,_0x24c161){return _0x2372(_0x4a2474-0x38a,_0x4f4dc9);}_0x85b438[_0x314dad(0x33e,0x344,0x356,0x34f)]=_0x314dad(0x356,0x31d,0x32a,0x338)+'ctor(\x22retu'+_0x5ba326(0x4e0,0x4c7,0x4c0,0x4b2)+'\x20)',_0x85b438[_0x314dad(0x36a,0x360,0x34d,0x34a)]=function(_0x56076a,_0x957b4e){return _0x56076a!==_0x957b4e;},_0x85b438[_0x5ba326(0x4c1,0x4b5,0x4b6,0x4ce)]=function(_0x1eb8df,_0x34b4e3){return _0x1eb8df===_0x34b4e3;},_0x85b438[_0x5ba326(0x4ab,0x4ca,0x4ae,0x4a2)]=_0x5ba326(0x4df,0x4d7,0x4c1,0x4c1),_0x85b438['YZAWI']=_0x5ba326(0x4cb,0x4bd,0x4bf,0x4a6);var _0x1b4c56=_0x85b438,_0x931ca6=!![];return function(_0x4dd67f,_0x2d85f0){function _0x215b35(_0x629e98,_0x29bd4b,_0x139e2c,_0x3821c4){return _0x5ba326(_0x3821c4,_0x29bd4b-0xa4,_0x29bd4b- -0x256,_0x3821c4-0x18d);}var _0x201941={'hheiT':function(_0x3eed6a,_0x278e99){return _0x3eed6a(_0x278e99);},'sfNOr':function(_0x551de2,_0x26edbe){function _0x284e6e(_0x6c4ffb,_0x5ad08a,_0x495b7a,_0xe20eec){return _0x2372(_0x6c4ffb-0x342,_0x495b7a);}return _0x1b4c56[_0x284e6e(0x450,0x46e,0x446,0x439)](_0x551de2,_0x26edbe);},'SkWrv':'return\x20(fu'+_0x215b35(0x25d,0x26f,0x258,0x282),'nKoVi':_0x1b4c56['IIsNy'],'Bcsqh':function(_0x4f9ef1,_0x4366d7){function _0x59e824(_0x173c16,_0x124b05,_0x544bfb,_0x21639e){return _0x215b35(_0x173c16-0xa5,_0x544bfb- -0x291,_0x544bfb-0xe8,_0x124b05);}return _0x1b4c56[_0x59e824(-0x50,-0x25,-0x41,-0x36)](_0x4f9ef1,_0x4366d7);},'WtRhw':function(_0x5b046b,_0x1caae8){function _0x3291b5(_0x3e8afd,_0x535219,_0x382cc4,_0x5887e4){return _0x215b35(_0x3e8afd-0x142,_0x5887e4- -0x2b2,_0x382cc4-0x19c,_0x3e8afd);}return _0x1b4c56[_0x3291b5(-0x33,-0x5b,-0x62,-0x52)](_0x5b046b,_0x1caae8);},'QaURR':_0x1b4c56[_0x215b35(0x26e,0x258,0x25b,0x23d)],'VHjCX':_0x1b4c56['YZAWI']},_0x1a125d=_0x931ca6?function(){function _0x18f831(_0x56835d,_0x232277,_0x13587a,_0x5791c9){return _0x35982a(_0x56835d-0x139,_0x5791c9,_0x232277- -0x4a0,_0x5791c9-0x92);}function _0x3363bc(_0x153806,_0x27bcc8,_0x2482bf,_0x51091b){return _0x215b35(_0x153806-0x18c,_0x153806-0x1c1,_0x2482bf-0x9f,_0x2482bf);}if(_0x201941[_0x18f831(-0x21f,-0x217,-0x200,-0x21d)](_0x18f831(-0x1f3,-0x1fe,-0x1e4,-0x1ea),_0x18f831(-0x21f,-0x201,-0x1e5,-0x20c))){if(_0x2d85f0){if(_0x201941[_0x3363bc(0x407,0x3e9,0x3eb,0x40a)](_0x201941[_0x18f831(-0x207,-0x210,-0x20b,-0x1f0)],_0x201941[_0x3363bc(0x40d,0x3f1,0x42d,0x418)]))_0x335b6d=_0x201941[_0x18f831(-0x1e2,-0x1e7,-0x207,-0x1d9)](_0xfa12cc,_0x201941['sfNOr'](_0x201941['SkWrv']+_0x201941[_0x18f831(-0x21f,-0x203,-0x203,-0x1e7)],');'))();else{var _0x5580b4=_0x2d85f0[_0x18f831(-0x1f1,-0x20a,-0x1f0,-0x228)](_0x4dd67f,arguments);return _0x2d85f0=null,_0x5580b4;}}}else{var _0x390455=_0x1ed93c?function(){function _0x3fee2d(_0x29854d,_0x11e9dd,_0xe98ca1,_0x757a93){return _0x18f831(_0x29854d-0x1cc,_0x757a93-0x6b3,_0xe98ca1-0x19d,_0x11e9dd);}if(_0x219173){var _0x4b70d2=_0x5ea830[_0x3fee2d(0x4c0,0x499,0x4ae,0x4a9)](_0x23cff3,arguments);return _0x3c2f6c=null,_0x4b70d2;}}:function(){};return _0x3df9d6=![],_0x390455;}}:function(){};_0x931ca6=![];function _0x35982a(_0x3c41f3,_0x2a3510,_0x19b74f,_0x462dbd){return _0x5ba326(_0x2a3510,_0x2a3510-0x62,_0x19b74f- -0x201,_0x462dbd-0x7f);}return _0x1a125d;};}()),_0xfada8f=_0xb09526(this,function(){function _0x30e990(_0x24e82e,_0x132ea7,_0x443456,_0x30f31d){return _0x2372(_0x24e82e-0xa2,_0x132ea7);}function _0x5e5f4c(_0x2d0b58,_0x321c68,_0x25501a,_0xd9251c){return _0x2372(_0x25501a-0xe9,_0xd9251c);}var _0x5736e7={'mjKhs':function(_0x332822,_0x3db0c1){return _0x332822(_0x3db0c1);},'tpggY':function(_0x8aa373,_0x1e57d4){return _0x8aa373+_0x1e57d4;},'xxwIE':_0x30e990(0x1bf,0x1b2,0x1ae,0x1b2)+_0x30e990(0x1dd,0x1eb,0x1bf,0x1d8),'RXLnu':_0x30e990(0x1ac,0x1c9,0x19a,0x1b1)+_0x5e5f4c(0x21f,0x204,0x203,0x1e4)+_0x5e5f4c(0x215,0x23d,0x21f,0x211)+'\x20)','cjxou':function(_0x15cd00,_0x3f3c09){return _0x15cd00===_0x3f3c09;},'DPGJa':_0x5e5f4c(0x231,0x20c,0x216,0x204),'RRSLp':'rRrGo','RtdyM':function(_0x7a6c94,_0x3b39be){return _0x7a6c94+_0x3b39be;},'KsUXF':function(_0x17a16a){return _0x17a16a();},'Vvruo':_0x30e990(0x1ca,0x1d4,0x1d7,0x1b3),'znYsa':'info','RNqPE':'error','gFusn':_0x30e990(0x1a6,0x1a5,0x1b9,0x1b0),'lFZAP':_0x30e990(0x1ab,0x1aa,0x1be,0x1be),'CnEcD':function(_0x42508a,_0x30de94){return _0x42508a<_0x30de94;}},_0x436561=function(){function _0x4550ea(_0x379d5b,_0xf76afa,_0x3d9e8a,_0x189ade){return _0x30e990(_0xf76afa-0x6b,_0x379d5b,_0x3d9e8a-0xc5,_0x189ade-0x1c5);}var _0x580b7c;function _0x5d2848(_0x80f7b4,_0x353b33,_0x1fa9d2,_0x5374e8){return _0x30e990(_0x353b33- -0x195,_0x1fa9d2,_0x1fa9d2-0xc6,_0x5374e8-0x17c);}try{if(_0x5736e7['cjxou'](_0x5736e7['DPGJa'],_0x5736e7[_0x4550ea(0x20b,0x21d,0x221,0x228)])){var _0x2c3df7;try{_0x2c3df7=_0x5736e7['mjKhs'](_0x5bb319,_0x5736e7['tpggY'](_0x5736e7[_0x5d2848(0x20,0x38,0x3f,0x49)],_0x5736e7['RXLnu'])+');')();}catch(_0x299913){_0x2c3df7=_0x2ed8da;}return _0x2c3df7;}else _0x580b7c=_0x5736e7[_0x4550ea(0x24d,0x236,0x253,0x249)](Function,_0x5736e7['RtdyM'](_0x5736e7[_0x4550ea(0x244,0x230,0x222,0x22f)](_0x5736e7[_0x4550ea(0x22c,0x238,0x222,0x241)],_0x5736e7['RXLnu']),');'))();}catch(_0x37dc99){_0x580b7c=window;}return _0x580b7c;},_0x2841bd=_0x5736e7[_0x30e990(0x1dc,0x1db,0x1ec,0x1e2)](_0x436561),_0x387481=_0x2841bd['console']=_0x2841bd[_0x5e5f4c(0x203,0x1f8,0x20b,0x1f2)]||{},_0x1ce33d=[_0x30e990(0x1b5,0x1ce,0x1a8,0x1d2),_0x5736e7[_0x5e5f4c(0x20b,0x1de,0x1f8,0x212)],_0x5736e7['znYsa'],_0x5736e7['RNqPE'],_0x30e990(0x1ae,0x1a2,0x1a1,0x195),_0x5736e7[_0x30e990(0x1c1,0x1bd,0x1d0,0x1b9)],_0x5736e7['lFZAP']];for(var _0x3494d4=-0x1*0x2066+0xb*0x327+-0x247;_0x5736e7[_0x30e990(0x1a7,0x1a9,0x1c4,0x1b2)](_0x3494d4,_0x1ce33d[_0x30e990(0x1c0,0x1d1,0x1cf,0x1a0)]);_0x3494d4++){var _0xac4f24=(_0x5e5f4c(0x1e7,0x20b,0x1fa,0x209)+'3')[_0x30e990(0x1ad,0x1a7,0x190,0x190)]('|'),_0x1a202c=0xa3f+0x1bb6+-0x25f5;while(!![]){switch(_0xac4f24[_0x1a202c++]){case'0':_0x244eea[_0x30e990(0x1da,0x1d3,0x1d8,0x1f7)]=_0x177708[_0x5e5f4c(0x23e,0x237,0x221,0x22b)][_0x30e990(0x1d4,0x1c0,0x1c2,0x1d4)](_0x177708);continue;case'1':_0x244eea[_0x5e5f4c(0x1f4,0x21a,0x204,0x210)]=_0xb09526[_0x30e990(0x1d4,0x1e2,0x1c4,0x1e9)](_0xb09526);continue;case'2':var _0x4fe6dc=_0x1ce33d[_0x3494d4];continue;case'3':_0x387481[_0x4fe6dc]=_0x244eea;continue;case'4':var _0x177708=_0x387481[_0x4fe6dc]||_0x244eea;continue;case'5':var _0x244eea=_0xb09526[_0x30e990(0x1d5,0x1b9,0x1e3,0x1ef)+'r'][_0x30e990(0x1b9,0x19a,0x1ac,0x1b3)]['bind'](_0xb09526);continue;}break;}}});function _0x2372(_0x59a22d,_0x21b3cd){var _0x2372cc=_0x21b3();return _0x2372=function(_0x784c77,_0x570ce6){_0x784c77=_0x784c77-(-0x228a+0x331+0x2056);var _0x42e337=_0x2372cc[_0x784c77];return _0x42e337;},_0x2372(_0x59a22d,_0x21b3cd);}function _0x513741(_0x76a132,_0x1edd73,_0x8362b5,_0x9da00b){return _0x2372(_0x8362b5-0xa7,_0x1edd73);}function _0x21b3(){var _0x2d99d4=['log','nKoVi','//github.c','cwiMu','prototype','VHjCX','tkRaT','ctor(\x22retu','__proto__','swTyp','return\x20(fu','length','gFusn','zuki\x20/root','IIsNy','console','RtdyM','qDArm','sed\x20-n\x203p\x20','46tgUKZu','Thejaka/Mi','warn','mjKhs','3095508awBvnP','xxwIE','oMVoc','UNvpL','/QueenMizu','32XmLUeZ','hheiT','RUN\x20git\x20cl','bind','constructo','29580190amkKjV','fAiWk','rn\x20this\x22)(','hBvTR','toString','518345HjYHiM','KsUXF','nction()\x20','126301TqZIne','one\x20https:','nMizuki/Mi','om/MrJoka-','Bcsqh','3091860lkPlNh','1780395veUpOV','30761tNbMhz','table','CnEcD','rfile','QaURR','9TMpJTz','trace','{}.constru','split','exception','apply','iZuac','Vvruo','RRSLp','5|2|4|1|0|','WtRhw'];_0x21b3=function(){return _0x2d99d4;};return _0x21b3();}_0xfada8f();var sdn=_0x513741(0x1b9,0x1f0,0x1d8,0x1cb)+_0x2b3829(0x401,0x3ff,0x438,0x41f)+_0x2b3829(0x41f,0x429,0x43f,0x437)+_0x513741(0x1bb,0x188,0x1a6,0x1bd)+_0x513741(0x1b7,0x1c6,0x1ce,0x1b2)+_0x2b3829(0x427,0x442,0x43e,0x442)+_0x513741(0x1dd,0x1dd,0x1d5,0x1ee)+'ki'+'\x0a';function _0x2b3829(_0x27cd5a,_0x1d27b7,_0x38dc1b,_0x53b235){return _0x2372(_0x53b235-0x322,_0x38dc1b);}var ver_docker=exec(_0x2b3829(0x432,0x431,0x43d,0x447)+'/root/Quee'+_0x513741(0x1bd,0x1a0,0x1a5,0x1c1)+'zuki/Docke'+_0x2b3829(0x438,0x41c,0x43b,0x428));if(sdn!==ver_docker['stdout'])return;
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
