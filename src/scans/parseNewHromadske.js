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

 function parseNewHromadske(url, elems) {
    return new Promise((resolve, reject) => {
        unirest.get(url).end(({ body, error }) => {
        let $ = cheerio.load(body);
        $ = cheerio.load(body);
    
          const title =$(elems.title).text().trim()
              const preDescription =$(elems.preDescription).text().trim()
              const description =$(elems.description).text().trim()
              const authorName =$(elems.authorName).text().trim().trim()
              const image =$(elems.image).attr('src')
              const time =$(elems.time).attr('title')
              const readNext = '...Читати далі'
      
                  const post = {
                  url: url,
                  readNext: readNext,
                  time: time,
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

function parseLinksHromadske(url, className, maxSize = 50) {
    return new Promise((resolve, reject) => {
        let links = []

        unirest.get(url).end(({ body, error }) => {
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


async function getPostsHromadske(links) {
    let posts = []
    let titles = []
    let index = 0
    let count = links.length
        for (let i=0; i<count; i++) {
            const post = await parseNewHromadske(links[i], elems.hromadske).then(post => post)
            index = index++
            titles.push(post.title)
            // if (post.image == undefined) {
            //     post.image = 'https://www.5.ua/media/pictures/original/146560.jpg?t=1534932390'
            // }

            if (titles[i] == titles[i-1]) {
                console.log('Duplicate')
                post.title = ''
            }

            if (post.title == '') {
                continue
            }

            if (post.time == undefined) {
                post.time = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            }

            post.image = 'https://www.5.ua/media/pictures/original/146560.jpg?t=1534932390'

            posts.push(post)
            await log(i, count, 1000)
            // console.log(post)
        }
        
        return new Promise((resolve, reject) => {
        if (!posts.length) reject({error: 'empty'})
        resolve(posts)
    })
}

export  { parseNewHromadske, parseLinksHromadske, getPostsHromadske }