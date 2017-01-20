const fs = require('fs')
let data = fs.readFileSync('BHS.vs.txt')
let result = {}
let stuff = []
let text = ''
let chapter = 0
let verse = 0
let book = ''

data = data.toString().split('\n')


for (let line of data){
	stuff = line.split(/[:]/)

	if (stuff.length = 2) {
		book = stuff[0]

		result[book] = []
	}
}

for (let line of data){
	stuff = line.split(/[:]/)

	if (stuff.length < 2) {
		book = stuff[0]
	} else {
		chapter = stuff[0] - 1
		result[book][chapter] = []
	}
}

for (let line of data){
	stuff = line.split(/[:]/)

	if (stuff.length < 2) {
		book = stuff[0]
	} else {
		chapter = stuff[0] - 1

		verse = stuff[1] - 1

		result[book][chapter][verse] = stuff[2]
	}
}


console.log(JSON.stringify(result))
