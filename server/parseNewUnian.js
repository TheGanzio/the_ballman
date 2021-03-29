import unirest from 'unirest'
import cheerio from 'cheerio'
import elems from './config.js'

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
      unirest.get(url).end(({ body, error }) => {
        const $ = cheerio.load(body);
  
        const title =$(elems.title).text().trim()
            const preDescription =$(elems.preDescription).text().trim()
            const description =$(elems.description).text().trim()
            const authorName =$(elems.authorName).text().trim().trim()
            const image =$(elems.image).attr('src')
    
                const post = {
                test: 'test',
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

function parseLinksUnian(url, className, maxSize = 20) {
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
            posts.push(post)
            await log(i, count, 1000)
            console.log(post)
        }
        
        return new Promise((resolve, reject) => {
        if (!posts.length) reject({error: 'empty'})
        resolve(posts)
    })
}

export  { parseNewUnian, parseLinksUnian, getPostsUnian }