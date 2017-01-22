const fs = require('fs')
let data = fs.readFileSync('GNT.NA27.txt')
let result = {}
let stuff = []
let text = ''
let chapter = 0
let book = ''

data = data.toString().split('\n')


for (let line of data){
	stuff = line.split(/[:]/)

	if (stuff.length < 2) continue	// ignore header lines

	book = stuff[0]

	result[book] = []
}

for (let line of data){
	stuff = line.split(/[:]/)

	if (stuff.length < 2) continue	// ignore header lines

	book = stuff[0]
	chapter = stuff[1] - 1
	text = stuff[2]
	.split(/\d/)
	.filter(function(curr){
		if (curr.length > 1) return true
		else return false
	})

	result[book][chapter] = text
}


console.log(JSON.stringify(result))
