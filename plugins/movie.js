const Mizuki = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
let config = require('../config');
let workt = config.WORKTYPE == 'public' ? false : true
const MOVIE_DESC = 'Get details of your movie.'


Mizuki.addCommand({ pattern: 'movie ?(.*)', fromMe: workt, desc: MOVIE_DESC }, (async (message, match) => {
  if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name of a movie.```', MessageType.text, { quoted: message.data });
  let url = `http://www.omdbapi.com/?apikey=27c75324&t=${match[1]}&plot=full`
  const response = await got(url);
  const json = JSON.parse(response.body);
  if (json.Response != 'True') return await message.client.sendMessage(message.jid, '```I can\'t find your movie 🥲```', MessageType.text, { quoted: message.data });
  
  let minfo = '```';
	minfo += '🎬  Title      : ' + json.Title + '\n\n';
	minfo += '📅  Year       : ' + json.Year + '\n\n';
	minfo += '👥  Rated      : ' + json.Rated + '\n\n';
	minfo += '🔓  Released   : ' + json.Released + '\n\n';
	minfo += '🕰️  Runtime    : ' + json.Runtime + '\n\n';
	minfo += '👽  Genre      : ' + json.Genre + '\n\n';
	minfo += '🤵🏻‍♂️  Director   : ' + json.Director + '\n\n';
	minfo += '👨‍🦳  Writer     : ' + json.Writer + '\n\n';
	minfo += '🎭  Actors     : ' + json.Actors + '\n\n';
	minfo += '📖  Plot       : ' + json.Plot + '\n\n';
	minfo += '🙆‍♂️  Language   : ' + json.Language + '\n\n';
	minfo += '🌎  Country    : ' + json.Country + '\n\n';
	minfo += '🏅  Awards     : ' + json.Awards + '\n\n';
	minfo += '🎖️  BoxOffice  : ' + json.BoxOffice + '\n\n';
	minfo += '📽️  Production : ' + json.Production + '\n\n';
	minfo += '👥  imdbRating : ' + json.imdbRating + '\n\n';
	minfo += '🏅  imdbVotes  : ' + json.imdbVotes + '```';
	
  
  const poster = json.Poster
	
  await message.client.sendMessage(message.jid, poster, MessageType.image, {
          caption: minfo +'\n\n'+'*© ɪ ᴀᴍ Qᴜᴇᴇɴ ᴍɪᴢᴜᴋɪ*',quoted: message.data});
}));

  
  
  
  
  
  
  
  
  





