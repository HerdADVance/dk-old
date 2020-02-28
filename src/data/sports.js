let Sports = {

	CFB: {
		roster: [
	 		{position: 'QB', player: false},
	 		{position: 'RB', player: false},
	 		{position: 'RB', player: false},
	 		{position: 'WR', player: false},
	 		{position: 'WR', player: false},
	 		{position: 'WR', player: false},
	 		{position: 'FX', player: false, accepts: ['RB', 'WR'] },
	 		{position: 'SF', player: false, accepts: ['QB', 'RB', 'WR'] },

	 	],
	 	//slates: collegeSlates,
	 	needToFilterPlayers: false,
	 	csvHeader: 'QB,RB,RB,WR,WR,WR,FLEX,S-FLEX\n'

	},
	NFL: {
		roster: [
	 		['QB', 1],
			['RB', 1],
			['WR', 2],
			['FX', 2],
			['DST', 1]
	 	],
	 	//slates: proSlates,
	 	spots: 7,
	 	needToFilterPlayers: false,
	 	csvHeader: 'QB,RB,WR,WR,FLEX,FLEX,DST\n'

	},
	showdown: {
		roster: [
	 		['CPT', 1],
			['FX', 6]
	 	],
	 	//slates: showdownSlates,
	 	spots: 6,
	 	needToFilterPlayers: true
	}
};