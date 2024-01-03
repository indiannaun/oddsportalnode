const axios = require('axios');
const { notify } = require('./notify');
const headers = {
	authority: 'www.oddsportal.com',
	accept: 'application/json, text/plain, */*',
	'accept-language': 'pl,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
	cookie:
		'op_cookie-test=ok; op_user_hash=75ba5897aa11d93a792f912c2eb93152; op_user_time_zone=1; op_user_full_time_zone=37; eupubconsent-v2=CP2DZhgP2DZhgAcABBENAcEsAP_gAAAAAChQg1NX_H__bW9r8Xr3aft0eY1P99j77uQxBhfJE-4FyLvW_JwXx2EwNA26tqIKmRIEuzZBIQFlHJHURVigSogVryHsYkGchTNKJ6BkgFMRI2dYCF5vmYtjeQKY5_p_d3fx2D-t_dv83dzzz8lHn3f5P2ckcKCdQ58tDfn9bRKb-5IO9-78v4v09l_rk2_eTVm_pcvr7B-ufs87_XU-9_fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAgSAEADQBeY6AIADQAMwAygF5koAIC8ykAQAGgAZgBlALz.f_wAAAAAAAAA; _ga=GA1.1.632382217.1701332848; OptanonAlertBoxClosed=2023-11-30T08:28:31.927Z; _sg_b_n=1701356057392; XSRF-TOKEN=eyJpdiI6IkJpSHZheFQveVQyaFdpS0JtNjU4L2c9PSIsInZhbHVlIjoiU0l2RFA4Q1FEc0Z6SVUrdzZVeVE3blV1cXQ1bWJiaHZYN01SdG5jNTVjb0dTVVpNNVkyMWF4ZFBtYUsrdkJKc08rMXBCdXVSenB3R0JCZWY4MmpTZmFjek5HZXJ0d0VKVEN0a3VjU3JKRk9ieTlyVC9LYUdzUGFycml4cGtZbDYiLCJtYWMiOiI0YmU3MjE4YWI0YWJjYjkwNjQ2MzVlOWUzZDU1YmJlNTUwNTcyZmUxYWJkNmQwMzdmMmM4ZWFkMjcyMGRjZGEyIiwidGFnIjoiIn0%3D; oddsportalcom_session=eyJpdiI6IlhKVlNrOGFIcWZkcS9vOTIwWnFqdnc9PSIsInZhbHVlIjoiWFFGdmxqdnVzTnpHMHRYdXF3RGU5Q0dFSWZ3MlREQXlESkgvU1R6TlJrcEdNdnFTTDE1K1RsTmNUcEVsYTY5aldEN0hlSC80K3ZOZ3lEVzhkT1hsQjRuc1F4NGFhZG5KZDNpSmsvMm5kalZIUWgxV2hPYmxBZERQUDZFcmd4ejkiLCJtYWMiOiIyNmM1MGQ5YjlmYThlMWYyMDkwYWY1OTdlYmY5MjU1NTQyYWJhZDdmODRlY2Q2MmRhODU1YWQyZDZhZmZjMDc5IiwidGFnIjoiIn0%3D; OptanonConsent=isGpcEnabled=0&datestamp=Mon+Dec+18+2023+12%3A16%3A59+GMT%2B0100+(czas+%C5%9Brodkowoeuropejski+standardowy)&version=202310.2.0&browserGpcFlag=0&isIABGlobal=false&consentId=4b91ff42-66b1-42b7-a2a0-bff12bb236c1&interactionCount=3&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0004%3A1%2CV2STACK42%3A1&hosts=H194%3A1%2CH302%3A1%2CH236%3A1%2CH198%3A1%2CH203%3A1%2CH190%3A1%2CH301%3A1%2CH303%3A1%2CH304%3A1%2CH230%3A1%2CH305%3A1&genVendors=V2%3A1%2C&AwaitingReconsent=false&geolocation=PL%3B18; _ga_5YY4JY41P1=GS1.1.1702898219.22.0.1702898219.60.0.0; _sg_b_v=19%3B61793%3B1702898219; _sg_b_p=%2Ffootball%2Fwales%2Fcymru-south%2Fcarmarthen-town-abergavenny-town-hGGeiC4g%2F',
	referer: 'https://www.oddsportal.com',
	'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"',
	'sec-ch-ua-mobile': '?0',
	'sec-ch-ua-platform': '"Windows"',
	'sec-fetch-dest': 'empty',
	'sec-fetch-mode': 'cors',
	'sec-fetch-site': 'same-origin',
	'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
	'x-requested-with': 'XMLHttpRequest',
	'x-xsrf-token':
		'eyJpdiI6IkJpSHZheFQveVQyaFdpS0JtNjU4L2c9PSIsInZhbHVlIjoiU0l2RFA4Q1FEc0Z6SVUrdzZVeVE3blV1cXQ1bWJiaHZYN01SdG5jNTVjb0dTVVpNNVkyMWF4ZFBtYUsrdkJKc08rMXBCdXVSenB3R0JCZWY4MmpTZmFjek5HZXJ0d0VKVEN0a3VjU3JKRk9ieTlyVC9LYUdzUGFycml4cGtZbDYiLCJtYWMiOiI0YmU3MjE4YWI0YWJjYjkwNjQ2MzVlOWUzZDU1YmJlNTUwNTcyZmUxYWJkNmQwMzdmMmM4ZWFkMjcyMGRjZGEyIiwidGFnIjoiIn0='
};

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const todayString = today.toISOString().split('T')[0].replaceAll('-', '');
const tomorrowString = tomorrow.toISOString().split('T')[0].replaceAll('-', '');

const time_now_ms = Date.now();
const hashLink = 'https://www.oddsportal.com/matches/';

const days = [todayString, tomorrowString];

const sports = ['football', 'basketball', 'hockey', 'tennis', 'handball', 'volleyball'];
const sports_id = {
	football: 1,
	basketball: 3,
	hockey: 4,
	tennis: 2,

	handball: 7,
	volleyball: 12,
	esports: 36
};

const bookies = {
	Fortuna: 163,
	STS: 165,
	Unibet: 5,
	'1xbet': 417
};

async function getHash(sport, day, headers) {
	const response = await axios.get(`https://www.oddsportal.com/matches/${sport}/${day}/`, {
		headers: headers
	});
	const hash = await response.data.match(/(?<=hash&quot;:&quot;)(.*?)(?=&quot)/g)[0];
	return hash;
}

async function main() {
	for (let i = 0; i < days.length; i++) {
		for (let j = 0; j < sports.length; j++) {
			const hash = await getHash(sports[j], days[i], headers);
			const all_games = await scrape_upcoming_games(sports_id[sports[j]], days[i], hash, time_now_ms, headers);
			for (let k = 0; k < all_games.length; k++) {
				const response = await axios.get(all_games[k].url, {
					headers
				});
				const hash = decodeURI(response.data.match(/(?<=hash&quot;:&quot;)(.*?)(?=&quot)/g)[0]);

				const data = await scrape1x2(all_games[k], hash, headers);
			}
		}
	}
}
main();

function countmargin(arr) {
	let margin = 0;
	for (let i = 0; i < arr.length; i++) {
		margin += 1 / arr[i] * 100;
		margin = margin;
	}

	return margin - 100;
}

async function scrape_handicap_or_over(bookmaker, game, url, handicap_or_over) {
	try {
		const response = await axios.get(url, { headers });
		console.log(`Response status: ${response.status} ${url}`);
		const data = response.data;
		const handicap = Object.keys(data['d']['oddsdata']['back']);

		for (handi of handicap) {
			for (bookmaker in bookies) {
				// const a = data['d']['oddsdata']['back'][handi]['act'][bookies[bookmaker]];
				// const b = data['d']['oddsdata']['back'][handi]['act']['18'];

				if (data['d']['oddsdata']['back'][handi]['act'][bookies[bookmaker]] && data['d']['oddsdata']['back'][handi]['act']['18']) {
					game['bookmaker'] = bookmaker;

					const pinnacle_odds = data['d']['oddsdata']['back'][handi]['odds']['18'];
					const odds = data['d']['oddsdata']['back'][handi]['odds'][bookies[bookmaker]];
					const handicap_type = data['d']['oddsdata']['back'][handi]['handicapTypeId'];

					const handicap_value = data['d']['oddsdata']['back'][handi]['handicapValue'];
					game['margin'] = countmargin(Object.values(odds));

					const value_home = (odds[0] / pinnacle_odds[0] * 100 - 100 - game['margin']).toFixed(2);
					const value_away = (odds[1] / pinnacle_odds[1] * 100 - 100 - game['margin']).toFixed(2);

					if (pinnacle_odds[0] < 3 && value_home > 7) {
						game['value'] = value_home;
						game['odds'] = odds[0];
						game['pinnacle_odds'] = pinnacle_odds[0];
						game['bet_type'] = handicap_or_over;

						handicap_or_over == 'O/U' ? (game['bet'] = `Over ${handicap_value}`) : (game['bet'] = `Home ${handicap_value}`);
						await notify(
							`Home: ${game['home']}\nAway: ${game['away']}\nSport: ${game['sport_name']}\nCountry: ${game['country']}\nLeauge: ${game['leauge']}\nDate: ${game['date']}\nValue: ${game[
								'value'
							]}\nBookmaker: ${bookmaker}\nOdds: ${game['odds']}\nPinnacle odds: ${game['pinnacle_odds']}\nBet type: ${game['bet_type']}\nBet: ${game['bet']}\nUrl: ${game['url']}`,
							bookmaker
						);
					}

					if (pinnacle_odds[1] < 3 && value_away > 7) {
						game['value'] = value_away;
						game['odds'] = odds[1];
						game['pinnacle_odds'] = pinnacle_odds[1];
						game['bet_type'] = handicap_or_over;
						handicap_or_over == 'O/U' ? (game['bet'] = `Under ${handicap_value}`) : (game['bet'] = `Away ${handicap_value}`);
						console.log(game);
						await notify(
							`Home: ${game['home']}\nAway: ${game['away']}\nSport: ${game['sport_name']}\nCountry: ${game['country']}\nLeauge: ${game['leauge']}\nDate: ${game['date']}\nValue: ${game[
								'value'
							]}\nBookmaker: ${bookmaker}\nOdds: ${game['odds']}\nPinnacle odds: ${game['pinnacle_odds']}\nBet type: ${game['bet_type']}\nBet: ${game['bet']}\nUrl: ${game['url']}`,
							bookmaker
						);
					}
				}
			}
		}
	} catch (error) {
		console.log(error);
	}
}
async function scrape1x2(game, hash, headers) {
	try {
		const ids = {
			football: '1-2',
			basketball: '3-1',
			hockey: '1-2',
			tennis: '3-2',
			handball: '1-2',
			volleyball: '3-2'
		};

		const response = await axios.get(`https://www.oddsportal.com/feed/match-event/1-${game['sport_id']}-${game['encodedid']}-${ids[game['sport_name']]}-${hash}.dat`, {
			headers
		});
		const url = `https://www.oddsportal.com/feed/match-event/1-${game['sport_id']}-${game['encodedid']}-${ids[game['sport_name']]}-${hash}.dat`;
		console.log(`Response status: ${response.status}  ${url}`);

		const data = response.data;
		const handicap = Object.keys(data['d']['oddsdata']['back']);

		for (handi of handicap) {
			for (bookmaker in bookies) {
				// const a = data['d']['oddsdata']['back'][handi]['act'][bookies[bookmaker]];
				// const b = data['d']['oddsdata']['back'][handi]['act']['18'];
				if (data['d']['oddsdata']['back'][handi]['act'][bookies[bookmaker]] && data['d']['oddsdata']['back'][handi]['act']['18']) {
					game['bookmaker'] = bookmaker;

					const pinnacle_odds = data['d']['oddsdata']['back'][handi]['odds']['18'];
					const odds = data['d']['oddsdata']['back'][handi]['odds'][bookies[bookmaker]];
					game['margin'] = countmargin(Object.values(odds));

					if (game['sport_name'] == 'football' || game['sport_name'] == 'handball' || game['sport_name'] == 'hockey') {
						const value_home = (odds[0] / pinnacle_odds[0] * 100 - 100 - game['margin']).toFixed(2);

						const value_draw = (odds[1] / pinnacle_odds[1] * 100 - 100 - game['margin']).toFixed(2);
						const value_away = (odds[2] / pinnacle_odds[2] * 100 - 100 - game['margin']).toFixed(2);

						if (pinnacle_odds[0] < 3 && value_home > 7) {
							game['value'] = value_home;
							game['odds'] = odds[0];
							game['pinnacle_odds'] = pinnacle_odds[0];
							game['bet_type'] = '1x2';
							game['bet'] = 'home';

							console.log(game);
							await notify(
								`Home: ${game['home']}\nAway: ${game['away']}\nSport: ${game['sport_name']}\nCountry: ${game['country']}\nLeauge: ${game['leauge']}\nDate: ${game['date']}\nValue: ${game[
									'value'
								]}\nBookmaker: ${bookmaker}\nOdds: ${game['odds']}\nPinnacle odds: ${game['pinnacle_odds']}\nBet type: ${game['bet_type']}\nBet: ${game['bet']}\nUrl: ${game['url']}`,
								bookmaker
							);
						}

						if (pinnacle_odds[1] < 3.5 && value_draw > 7) {
							game['value'] = value_draw;
							game['odds'] = odds[1];
							game['pinnacle_odds'] = pinnacle_odds[1];
							game['bet_type'] = '1x2';
							game['bet'] = 'draw';

							console.log(game);
							await notify(
								`Home: ${game['home']}\nAway: ${game['away']}\nSport: ${game['sport_name']}\nCountry: ${game['country']}\nLeauge: ${game['leauge']}\nDate: ${game['date']}\nValue: ${game[
									'value'
								]}\nBookmaker: ${bookmaker}\nOdds: ${game['odds']}\nPinnacle odds: ${game['pinnacle_odds']}\nBet type: ${game['bet_type']}\nBet: ${game['bet']}\nUrl: ${game['url']}`,
								bookmaker
							);
						}

						if (pinnacle_odds[2] < 3 && value_away > 7) {
							game['value'] = value_away;
							game['odds'] = odds[2];
							game['pinnacle_odds'] = pinnacle_odds[2];
							game['bet_type'] = '1x2';
							game['bet'] = 'away';

							console.log(game);
							await notify(
								`Home: ${game['home']}\nAway: ${game['away']}\nSport: ${game['sport_name']}\nCountry: ${game['country']}\nLeauge: ${game['leauge']}\nDate: ${game['date']}\nValue: ${game[
									'value'
								]}\nBookmaker: ${bookmaker}\nOdds: ${game['odds']}\nPinnacle odds: ${game['pinnacle_odds']}\nBet type: ${game['bet_type']}\nBet: ${game['bet']}\nUrl: ${game['url']}`,
								bookmaker
							);
						}
					}

					if (game['sport_name'] == 'basketball' || game['sport_name'] == 'tennis' || game['sport_name'] == 'volleyball') {
						const value_home = (odds[0] / pinnacle_odds[0] * 100 - 100 - game['margin']).toFixed(2);
						const value_away = (odds[1] / pinnacle_odds[1] * 100 - 100 - game['margin']).toFixed(2);

						if (pinnacle_odds[0] < 3 && value_home > 7) {
							game['value'] = value_home;
							game['odds'] = odds[0];
							game['pinnacle_odds'] = pinnacle_odds[0];
							game['bet_type'] = '1or2';
							game['bet'] = 'home';

							console.log(game);
							await notify(
								`Home: ${game['home']}\nAway: ${game['away']}\nSport: ${game['sport_name']}\nCountry: ${game['country']}\nLeauge: ${game['leauge']}\nDate: ${game['date']}\nValue: ${game[
									'value'
								]}\nBookmaker: ${bookmaker}\nOdds: ${game['odds']}\nPinnacle odds: ${game['pinnacle_odds']}\nBet type: ${game['bet_type']}\nBet: ${game['bet']}\nUrl: ${game['url']}`,
								bookmaker
							);
						}

						if (pinnacle_odds[1] < 3 && value_away > 7) {
							game['value'] = value_away;
							game['odds'] = odds[1];
							game['pinnacle_odds'] = pinnacle_odds[1];
							game['bet_type'] = '1or2';
							game['bet'] = 'away';

							console.log(game);
							await notify(
								`Home: ${game['home']}\nAway: ${game['away']}\nSport: ${game['sport_name']}\nCountry: ${game['country']}\nLeauge: ${game['leauge']}\nDate: ${game['date']}\nValue: ${game[
									'value'
								]}\nBookmaker: ${bookmaker}\nOdds: ${game['odds']}\nPinnacle odds: ${game['pinnacle_odds']}\nBet type: ${game['bet_type']}\nBet: ${game['bet']}\nUrl: ${game['url']}`,
								bookmaker
							);
						}
					}
					const id = { football: 2, basketball: 1, hockey: 1, tennis: 2, darts: 2, handball: 2, volleyball: 2, esports: 2 };
					const url_over = `https://www.oddsportal.com/feed/match-event/1-${game['sport_id']}-${game['encodedid']}-2-${id[game['sport_name']]}-${hash}.dat`;
					const url_handicap = `https://www.oddsportal.com/feed/match-event/1-${game['sport_id']}-${game['encodedid']}-5-${id[game['sport_name']]}-${hash}.dat`;
					await scrape_handicap_or_over(bookmaker, game, url_handicap, 'handicap');
					await scrape_handicap_or_over(bookmaker, game, url_over, 'O/U');
				}
			}
		}
	} catch (error) {
		console.log(error);
	}
}

async function scrape_upcoming_games(sport_id, day, hash, time_now_ms, headers) {
	all_games = [];
	try {
		const url = `https://www.oddsportal.com/ajax-nextgames/${sport_id}/1/1/${day}/${hash}.dat?_=${time_now_ms}`;
		const response = await axios.get(url, {
			headers
		});

		const data = await response.data.d.rows;
		for (const x of data) {
			if (x['event-stage-name'] == 'Scheduled' && x['date-start-base'] * 1000 - Date.now() > 1800000) {
				const match = {
					sport_id: sport_id,
					sport_name: x['sport-url-name'],
					id: x['id'],
					home: x['home-name'],
					away: x['away-name'],
					country: x['country-name'],
					leauge: x['tournament-name'],
					encodedid: x['encodeEventId'],
					date: new Date(x['date-start-base'] * 1000).toLocaleString(),
					url: 'https://www.oddsportal.com' + x['url']
				};
				all_games.push(match);
			}
		}
	} catch (error) {
		console.error(error);
	}
	return all_games;
}
