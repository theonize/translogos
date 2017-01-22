const fs = require('fs')
let data = fs.readFileSync('txt/NET.parsed.txt')
let result = {}
let coloned = []
let spaced = []
let text = ''
let chapter = 0
let verse = 0
let book = ''

data = data.toString().split('\n')


for (let line of data){
	coloned = line.split(':')
	spaced = line.split(/\s/)

	if (isNaN(coloned[0]) && (coloned.length === 1) && (spaced.length === 1)) {
		book = coloned[0]

		result[book] = []
	}
}

for (let line of data){
	coloned = line.split(':')
	spaced = line.split(/\s/)

	if (isNaN(coloned[0]) && (coloned.length === 1) && (spaced.length === 1)) {
		book = coloned[0]
	} else if ((coloned.length = 2) && !isNaN(coloned[0]) && !isNaN(coloned[1])) {
		chapter = +coloned[0] - 1

		result[book][chapter] = []
		result[book][chapter][verse] = ''
	}
}

for (let line of data){
	coloned = line.split(':')
	spaced = line.split(/\s/)

	if (isNaN(coloned[0]) && (coloned.length === 1) && (spaced.length === 1)) {
		book = coloned[0]
	} else if ((coloned.length = 2) && !isNaN(coloned[0]) && !isNaN(coloned[1])) {
		chapter = +coloned[0] - 1

		verse = +coloned[1] - 1
	} else {
// console.log(book, chapter, verse)
		result[book][chapter][verse] += line
	}
}


console.log(JSON.stringify(result))
