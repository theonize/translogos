const fs = require('fs')
let data = fs.readFileSync('GNT.NA27.txt')
let result = {}

data = data.toString().split('\n')


for (let line of data){
	let stuff
	let text
	let verse = 0
	let volume = 0
	let chapter = 0
	let book = ''

	stuff = line.split(':')	// split off the verse number

	if (stuff.length < 2) continue

	text = stuff[1].split(/\d/)

	stuff = stuff[0].split('|')

	if (stuff.length > 1) {
		chapter = stuff[1]

		stuff = stuff[0].split(' ')

		book = stuff[0]
 		volume = stuff[1]
	} else {
		stuff = stuff[0].split(' ')

		book = stuff[0]
		volume = 0
		chapter = stuff[1]
	}

	if (!result[book]) result[book] = []

	if (!result[book][chapter]) result[book][chapter] = []

	if (volume) {
		if (!result[book][chapter][volume])
			result[book][chapter][volume] = []
		
		if (!result[book][chapter][volume][chapter])
			result[book][chapter][volume][chapter] = []

		result[book][chapter][volume][chapter][verse] = text
	} else{
		if (!result[book][chapter][chapter])
			result[book][chapter][chapter] = []

		result[book][chapter][verse] = text
	}
}

console.log(JSON.stringify(result))
