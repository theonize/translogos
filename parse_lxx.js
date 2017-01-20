const fs = require('fs')
let data = fs.readFileSync('LXX.txt')
let result = {}
let stuff = []
let text = ''
let chapter = 0
let verse = 0
let book = ''

data = data.toString().split('\n')


for (let line of data){
	stuff = line.split(/\s/)

	if ((stuff.length = 2) && (isNaN(stuff[0]))) {
		book = stuff[0]

		result[book] = []
	}
}

for (let line of data){
	stuff = line.split(/\s/)

	if ((stuff.length = 2) && (isNaN(stuff[0]))) {
		book = stuff[0]
		chapter = stuff[1] - 1

		result[book][chapter] = []
	}
}

for (let line of data){
	stuff = line.split(/\s/)

	if ((stuff.length = 2) && (isNaN(stuff[0]))) {
		book = stuff[0]
		chapter = stuff[1] - 1
	} else {
		result[book][chapter] = line
		.split(/\d/)
		.filter(function(curr){
			if (curr.length > 1) return true
			else return false
		})
	}
}


console.log(JSON.stringify(result))
