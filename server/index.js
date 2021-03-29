import { parseNewUnian, getPostsUnian, parseLinksUnian } from './parseNewUnian.js'
import { parseNewHromadske, getPostsHromadske, parseLinksHromadske } from './parseNewHromadske.js'
import fs from 'fs'
import elems from './config.js'

const MongoClient = require('mongodb').MongoClient

const mongoClient = new MongoClient('')


const saveResultHromadske = json => {
    fs.writeFile('resultHromadske.json', json, err => {
        console.log('Saved!')
        if (err) console.log('not saved')
    })
}

const saveResultUnian = json => {
    fs.writeFile('resultUnian.json', json, err => {
        console.log('Saved!')
        if (err) console.log('not saved')
    })
}

parseLinksHromadske('https://hromadske.ua/', '.NewsBlock-container a')
.then(links => {
    getPostsHromadske(links).then(posts => saveResultHromadske(JSON.stringify(posts, 0, 4))).catch(e => console.log(e))
})
.catch(e => console.log(e))

parseLinksUnian('https://www.unian.ua/science', '.list-thumbs a')
.then(links => {
    getPostsUnian(links).then(posts => saveResultUnian(JSON.stringify(posts, 0, 4))).catch(e => console.log(e))
})
.catch(e => console.log(e))

function parseH() {
    parseLinksHromadske('https://hromadske.ua/', '.NewsBlock-container a')
.then(links => {
    getPostsHromadske(links).then(posts => saveResultHromadske(JSON.stringify(posts, 0, 4))).catch(e => console.log(e))
})
.catch(e => console.log(e))
console.log('Done!')
}

function parseU() {
    console.log('kek')
}

setInterval(parseH, 1200000)

















