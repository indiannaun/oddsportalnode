const TeleBot = require('node-telegram-bot-api');

const chat_id = '733935227';

const fortuna_token = '5113114999:AAFoDqvcolHUIyE72htJl8OFQ69OTurAyLs';
const sts_token = '6725401598:AAGhBLjuwJw5VVxR-H_Nsw3L8WcrEXTBoio';
const unibet_token = '6912390515:AAEAqvr28Y6OC47cpciVvFVO5mmZGz5ogj8';
const rusek_token = '6719784382:AAFfHuf-hnKvuFOJFDQeAqSlGbJcHGetdzw';

module.exports.notify = async (message, bookid) => {
	if (bookid == 'Fortuna') {
		TOKEN = fortuna_token;
	}
	if (bookid == 'STS') {
		TOKEN = sts_token;
	}
	if (bookid == 'Unibet') {
		TOKEN = unibet_token;
	}
	if (bookid == '1xbet') {
		TOKEN = rusek_token;
	}
	try {
		const bot = new TeleBot(TOKEN);
		await bot.sendMessage(chat_id, message, { parse_mode: 'HTML' });
	} catch (exception) {
		console.log(`Error`, exception);
	}
};
