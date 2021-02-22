const unirest = require('unirest')
const cheerio = require('cheerio')

let newUrl = ''

function findNew (url) {
    unirest.get(url).end( function (response) {
            const body = response.body
            const $ = cheerio.load(body)
            
            const qurl = $('.MainBlock-mainPosts a').attr('data-vr-contentbox-url')
            newUrl = ('hromadske.ua' + url)

            
            
        })
        return newUrl
    }

newUrl = findNew('https://hromadske.ua/nauka')
console.log(newUrl)
