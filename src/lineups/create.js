function createLineups(n, lid=1){
	
	let count = 0
	
	while(count < n){
		Lineups.push(createLineup(lid))
		count ++
		lid++
	}

}

function createLineup(lid){

	let lineup = {
		id: lid,
		roster: Sports[Sport].roster
	}

	return lineup

}

function buildRoster(){
	let roster = {}
	_.forEach(gameTypes[selectedGameType].roster, function(pos){
		roster[pos[0]] = []
		for(let i=0; i < pos[1]; i++){
			roster[pos[0]].push({})
		}
	})

	return roster
}