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

 function parseNewKoresp(url, elems) {
    return new Promise((resolve, reject) => {
      unirest.get(url).end(({ body, error }) => {
        let id = 0
        const $ = cheerio.load(body);
  
        const title =$(elems.title).text().trim()
            const preDescription =$(elems.preDescription).text().trim()
            const description =$(elems.description).text().trim()
            const authorName =$(elems.authorName).text().trim().trim()
            const image =$(elems.image).attr('src')
    
                const post = {
                id: id,
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

function parseLinksKoresp(url, className, maxSize = 10) {
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


async function getPostsKoresp(links) {
    let posts = []
    let count = links.length

    let currentData = '';
    let currentPost = []
    
        for (let i=0; i<count; i++) {
            const post = await parseNewKoresp(links[i], elems.koresp).then(post => post)
            if (post.image == undefined) {
                post.image = 'https://www.5.ua/media/pictures/original/146560.jpg?t=1534932390'
            }
            if(post.authorName == '') {
                post.authorName = 'korrespondent.net'
            }
            if(post.description == '') {
                post.description = post.desription_2
            }
            post.id = post.id+1
            posts.push(post)
            await log(i, count, 1000)
        }
    
        return new Promise((resolve, reject) => {
        if (!posts.length) reject({error: 'empty'})
        resolve(posts)
    })
}

export  { parseNewKoresp, parseLinksKoresp, getPostsKoresp }