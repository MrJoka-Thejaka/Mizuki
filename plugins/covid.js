/* Copyright (C) sisula welgamage.
coded by sisula welgamge/mrjoka thejaka
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DEVELOPER - MR-JOKA / SISULA WELGAMAGE
*/
const Mizuki = require('../events');
const covidinfo = require('queen-mizuki');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
//language support____
const FONT_DESC = "රටවල දෛනික සහ සමස්ත කොවිඩ් වගුව පෙන්වයි."
const FONT_NEED = "කරුණාකර රටක් ඇතුළත් කරන්න"
const UP_BAR = "╔══════════════════"
const DOWN_BAR = "╠══════════════════"
const DOWN_DOWN = "╚════════════════"
const CVD_COUN = "║🌎 COUNTRY -:"
const CVD_CASE = "║😷 CASES -:"
const CVD_TCASE = "║🥵 TODAY CASES -:"
const CVD_DEATHS = "║🏳️ DEATHS -:"
const CVD_TDEATHS = "║⚰️TODAY DEATHS -:"
const CVD_RECO = "║🏡 RECOVERED -:"
const CVD_ACTIVE = "║🤒 ACTIVE -:"
const CVD_CIRT = "║😑 CRITICAL -:"
const CVD_TTEST = "║🧑‍🔬TOTAL TEST -:"
const NO_RESULT = "*මට මෙම නම සහිත රටක් සොයාගත නොහැකි විය.😔*"
//end language

if (Config.WORKTYPE == 'private') {

    Mizuki.addCommand({ pattern: 'covid ?(.*)', fromMe: true, desc: FONT_DESC,  deleteCommand: false}, async (message, match) => {
        if (!match[1]) return await message.client.sendMessage(message.jid,FONT_NEED,MessageType.text)
        var r_text = new Array ();
                  r_text[0] = "*😷Stay Safe*";
                  r_text[1] = "*🧼🖐Wash Hands*";
                  r_text[2] = "*🧍↔️🧍Keep a 1m Away*";
                  r_text[3] = "*🚫🤦Don't Touch Your Face*";
                  r_text[4] = "*🤧💪 Do Sneeze Into Your Elbow*";
                  r_text[5] = "*😷Wearing a Mask In Public*";
                  r_text[6] = "*😷Stay Safe*";
                  r_text[7] = "*🧼🖐Wash Hands*";
                  r_text[8] = "*🧍↔️🧍Keep a 1m Away*";
                  r_text[9] = "*🚫🤦Don't Touch Your Face*";
                  r_text[10] = "*🤧💪 Do Sneeze Into Your Elbow*";
                  r_text[11] = "*😷Wearing a Mask In Public*";
        var i = Math.floor(12*Math.random())
        var payload = await covidinfo.covid_info(match[1])  

            const msg =`${UP_BAR}` + `\n` + `*${CVD_COUN}* ${payload.c_country}` + `\n` +
                  `${DOWN_BAR}` + `\n\n` +
                  `*${CVD_CASE}* ${payload.c_case}` + `\n` +                   
                  `*${CVD_TCASE}* ${payload.c_tocase}` + `\n` +
                  `*${CVD_DEATHS}* ${payload.c_deaths}` + `\n` +
                  `*${CVD_TDEATHS}* ${payload.c_todeaths}` + `\n` +
                  `*${CVD_RECO}* ${payload.c_recoverd}` + `\n` +
                  `*${CVD_ACTIVE}* ${payload.c_active}` + `\n` +
                  `*${CVD_CIRT}* ${payload.c_ctcal}` + `\n` +
                  `*${CVD_TTEST}* ${payload.c_totests}` + `\n` +
                  `${DOWN_DOWN}` + `\n`
                                                    
            await message.client.sendMessage(message.jid,msg ,MessageType.text)
            await message.client.sendMessage(message.jid,`${r_text[i]}`,MessageType.text)        
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}

if (Config.WORKTYPE == 'public') {

    Mizuki.addCommand({ pattern: 'covid ?(.*)', fromMe: false, desc: FONT_DESC,  deleteCommand: false}, async (message, match) => {
    if (!match[1]) return await message.client.sendMessage(message.jid,FONT_NEED,MessageType.text)
    var r_text = new Array ();
              r_text[0] = "*😷Stay Safe*";
              r_text[1] = "*🧼🖐Wash Hands*";
              r_text[2] = "*🧍↔️🧍Keep a 1m Away*";
              r_text[3] = "*🚫🤦Don't Touch Your Face*";
              r_text[4] = "*🤧💪 Do Sneeze Into Your Elbow*";
              r_text[5] = "*😷Wearing a Mask In Public*";
              r_text[6] = "*😷Stay Safe*";
              r_text[7] = "*🧼🖐Wash Hands*";
              r_text[8] = "*🧍↔️🧍Keep a 1m Away*";
              r_text[9] = "*🚫🤦Don't Touch Your Face*";
              r_text[10] = "*🤧💪 Do Sneeze Into Your Elbow*";
              r_text[11] = "*😷Wearing a Mask In Public*";
    var i = Math.floor(12*Math.random())
    var payload = await covidinfo.covid_info(match[1])  

        const msg =`${UP_BAR}` + `\n` + `*${CVD_COUN}* ${payload.c_country}` + `\n` +
              `${DOWN_BAR}` + `\n\n` +
              `*${CVD_CASE}* ${payload.c_case}` + `\n` +                   
              `*${CVD_TCASE}* ${payload.c_tocase}` + `\n` +
              `*${CVD_DEATHS}* ${payload.c_deaths}` + `\n` +
              `*${CVD_TDEATHS}* ${payload.c_todeaths}` + `\n` +
              `*${CVD_RECO}* ${payload.c_recoverd}` + `\n` +
              `*${CVD_ACTIVE}* ${payload.c_active}` + `\n` +
              `*${CVD_CIRT}* ${payload.c_ctcal}` + `\n` +
              `*${CVD_TTEST}* ${payload.c_totests}` + `\n` +
              `${DOWN_DOWN}` + `\n`
                                                
        await message.client.sendMessage(message.jid,msg ,MessageType.text)
        await message.client.sendMessage(message.jid,`${r_text[i]}`,MessageType.text)        
    .catch(
      async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
    )
  },
)
}