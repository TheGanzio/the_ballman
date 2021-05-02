// import unirest from 'unirest'
// import cheerio from 'cheerio'

// let newUrl = ''

// function findNew (url) {
//     unirest.get(url).end( function (response) {
//             const body = response.body
//             const $ = cheerio.load(body)
            
//             const url = $('.MainBlock-mainPosts a').attr('data-vr-contentbox-url')
//             newUrl = ('hromadske.ua' + url)
            
//         })
//         return newUrl
//     }

// newUrl = findNew('https://hromadske.ua/nauka')
// console.log(newUrl)


// function parseLinks(url, className, maxSize = 5) {
//     return new Promise((resolve, reject) => {

//         let links = []

//         unirest.get(url).end(({ body, error }) => {
//             if (error) reject(error)

//             const $ = cheerio.load(body)
    
//             $(className).each((i, e) => {
//                 if (i +1 <= maxSize) links.push('https://hromadske.ua/polityka' +$(e).attr('href'))
//             })
    
//             resolve(links)
//             if (!links.length) reject({error: 'empty'})
//         })
        
//     })
// }

// async function fetchLinks(links) {
//     parseNew().then(q => console.log(q))
//         for (let i = 0; i < links.lenght; i++) {
//             consolelog(links[i])
//             const post = await parseNew(links[i], elems.hromadske).then(post => post)
//             console.log(post)
//     }
// }

