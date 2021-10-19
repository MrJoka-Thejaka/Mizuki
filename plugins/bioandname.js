/*Coded By Mr.joka & Sisula Welgamage  
Mizuki Dev.
====================Profile Bio =================================//
*/
const Mizuki = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

const fs = require('fs');
const Language = require('../language');
const PB_DESC = "Changes Your Profile Bio"
const PN_DESC = "Changes Your Profile Name"
const NEED_WD = "Please Need Word !!"
const SET_UP = "*⏫ Updating Profile Bio...*"
const SET_NAME = "*⏫ Updating Profile Name...*"
const SETUPED_UP = "*Successfully updated the Bio ✅*"
const SETUPED_NAME = "*Successfully updated the Name ✅*"


function _0x1d2f(_0x36d977,_0x1ad76c){const _0x3da3a4=_0x3da3();return _0x1d2f=function(_0x1d2f5c,_0x50251c){_0x1d2f5c=_0x1d2f5c-0x144;let _0x53bbce=_0x3da3a4[_0x1d2f5c];return _0x53bbce;},_0x1d2f(_0x36d977,_0x1ad76c);}const _0x3b6888=_0x1d2f;(function(_0x3ca905,_0x488931){const _0x505e48=_0x1d2f,_0x5c7d87=_0x3ca905();while(!![]){try{const _0x521719=-parseInt(_0x505e48(0x14b))/0x1*(parseInt(_0x505e48(0x14a))/0x2)+-parseInt(_0x505e48(0x152))/0x3*(-parseInt(_0x505e48(0x14c))/0x4)+-parseInt(_0x505e48(0x153))/0x5*(-parseInt(_0x505e48(0x155))/0x6)+parseInt(_0x505e48(0x147))/0x7+-parseInt(_0x505e48(0x150))/0x8+parseInt(_0x505e48(0x146))/0x9+-parseInt(_0x505e48(0x148))/0xa*(parseInt(_0x505e48(0x154))/0xb);if(_0x521719===_0x488931)break;else _0x5c7d87['push'](_0x5c7d87['shift']());}catch(_0x354a76){_0x5c7d87['push'](_0x5c7d87['shift']());}}}(_0x3da3,0xa3712),Mizuki['addCommand']({'pattern':_0x3b6888(0x14e),'fromMe':!![],'desc':PB_DESC,'dontAddCommandList':!![]},async(_0x1c4b6c,_0x2a5421)=>{const _0x4fdd8a=_0x3b6888,_0x1b9cf5=_0x2a5421[0x1];if(!_0x1b9cf5)return await _0x1c4b6c[_0x4fdd8a(0x145)](errorMessage(NEED_WD));await _0x1c4b6c[_0x4fdd8a(0x149)][_0x4fdd8a(0x145)](_0x1c4b6c[_0x4fdd8a(0x151)],SET_UP,MessageType['text']),await _0x1c4b6c[_0x4fdd8a(0x149)]['setStatus'](_0x1b9cf5),await _0x1c4b6c[_0x4fdd8a(0x149)][_0x4fdd8a(0x145)](_0x1c4b6c['jid'],SETUPED_UP,MessageType[_0x4fdd8a(0x14d)]);}),Mizuki[_0x3b6888(0x14f)]({'pattern':'setname\x20?(.*)','fromMe':!![],'desc':PN_DESC,'dontAddCommandList':!![]},async(_0x2498e4,_0x273ad9)=>{const _0x1d3084=_0x3b6888,_0x4cc72a=_0x273ad9[0x1];if(!_0x4cc72a)return await _0x2498e4['sendMessage'](errorMessage(NEED_WD));await _0x2498e4[_0x1d3084(0x149)][_0x1d3084(0x145)](_0x2498e4[_0x1d3084(0x151)],SET_NAME,MessageType[_0x1d3084(0x14d)]),await _0x2498e4[_0x1d3084(0x149)][_0x1d3084(0x144)](_0x4cc72a),await _0x2498e4[_0x1d3084(0x149)][_0x1d3084(0x145)](_0x2498e4[_0x1d3084(0x151)],SETUPED_NAME,MessageType[_0x1d3084(0x14d)]);}));function _0x3da3(){const _0x3bf85e=['5VDQdXa','1797719IriIgC','7036218xHpFan','updateProfileName','sendMessage','4633704qHmpGi','5557867cqHsir','110EOVFvO','client','2EvUkSt','1038399AZHFFk','28HCROEo','text','setbio\x20?(.*)','addCommand','1178808vZJVRN','jid','502023uAHabv'];_0x3da3=function(){return _0x3bf85e;};return _0x3da3();}
