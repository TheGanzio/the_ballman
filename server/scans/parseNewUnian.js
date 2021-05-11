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

 function parseNewUnian(url, elems) {
    return new Promise((resolve, reject) => {
      unirest.get(url).headers({'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7'}).end(({ body, error }) => {
        const $ = cheerio.load(body);
        let id = 0
  
        const title =$(elems.title).text().trim()
            const preDescription =$(elems.preDescription).text().trim()
            const description =$(elems.description).text().trim()
            const authorName =$(elems.authorName).text().trim().trim()
            const image =$(elems.image).attr('src')
            const time =$(elems.time).text().trim()
            const readNext = '...Читати далі'
    
                const post = {
                id: id,
                readNext: readNext,
                time: time,
                url: url,
                title: title,
                preDescription: preDescription,
                description: description,
                authorName: authorName,
                image: image
                
                
            }
        if (error) {
          return reject(error);
        }
        resolve(post);
      });
    });
  }

function parseLinksUnian(url, className, maxSize = 3) {
    return new Promise((resolve, reject) => {
        let links = []

        unirest.get(url).headers({'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7'}).end(({ body, error }) => {
            if (error) reject(error)

            const $ = cheerio.load(body)
    
            $(className).each((i, e) => {
                if (i +1 <= maxSize) links.push($(e).attr('href'))
            })
    
            resolve(links)
            if (!links.length) reject({error: 'empty'})
        })
    })
}

async function getPostsUnian(links) {
    let posts = []
        let count = links.length

        for (let i=0; i<count; i++) {
            const post = await parseNewUnian(links[i], elems.unian || elems.hromadske).then(post => post)
            if (post.title === '') {
                continue
            }
            if (links[i] === links[i+1]) {
                continue
            }

            if (post.time == undefined) {
                post.time = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            }
            posts.push(post)
            await log(i, count, 1000)
            // console.log(post)
        }
        
        return new Promise((resolve, reject) => {
        if (!posts.length) reject({error: 'empty'})
        resolve(posts)
    })
}

export  { parseNewUnian, parseLinksUnian, getPostsUnian }
