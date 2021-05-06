import unirest from 'unirest'
import cheerio from 'cheerio'
import elems from './config.js'
import axios from 'axios'

const log = (i, count, ms) => {
    return new Promise(r => {
        setTimeout(() => {
            console.log(`
            Index: ${i+1}
            Count of posts: ${count}
            `)
            r()
        }, ms)
    })
    
}

 function parseMoz(url, elems) {
    return new Promise((resolve, reject) => {
        unirest.get(url).end(({ body, error }) => {
        let $ = cheerio.load(body);
        $ = cheerio.load(body);
    
            const all =$(elems.all).text().trim()
            const today =$(elems.today).text().trim()
      
                  const post = {
                  all: all,
                  today: today,
                   
              }
          if (error) {
            return reject(error);
          }
          resolve(post);
        });
      });
    }

function parseLinksMoz(url, maxSize = 1) {
    return new Promise((resolve, reject) => {
        let links = url
        console.log(url)
        resolve(links)
    })
}


async function getPostsMoz(links) {
    let posts = []
    let count = links.length
        for (let i=0; i<count; i++) {
            const post = await parseMoz(links, elems.moz).then(post => post)
            posts.push(post)
            console.log(post)
            let str = post.all
            let str1 = str.split(' ')[0]
            let str2 = str.split('1, ')[1]
            post.time = str1 + ', ' + str2
            if (post.all !== ' ') {
                break
            }
            
        }
        
        return new Promise((resolve, reject) => {
        if (!posts.length) reject({error: 'empty'})
        resolve(posts)
    })
}

export  { parseMoz, parseLinksMoz, getPostsMoz }