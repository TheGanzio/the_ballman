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

 function parseNewExpert(url, elems) {
    return new Promise((resolve, reject) => {
      unirest.get(url).end(({ body, error }) => {
        let id = 0
        const $ = cheerio.load(body);
        let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  
        const title =$(elems.title).text().trim()
            const preDescription =$(elems.preDescription).text().trim()
            const description =$(elems.description).text().trim()
            const authorName =$(elems.authorName).text().trim().trim()
            const image =$(elems.image).attr('style')
            const time =$(elems.time).text().trim()
            const readNext = '...Читати далі'
    
    
                const post = {
                id: id,
                time: time,
                readNext: readNext,
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

function parseLinksExpert(url, className, maxSize = 50) {
    return new Promise((resolve, reject) => {
        let links = []
        

        unirest.get(url).end(({ body, error }) => {
            if (error) reject(error)
            const $ = cheerio.load(body)
    
            $(className).each((i, e) => {
                if (i +1 <= maxSize) links.push('https://www.slovoidilo.ua' + $(e).attr('href'))
            })

            console.log('Link: '+links)
    
            resolve(links)
            if (!links.length) reject({error: 'empty'})
        })
    })
}


async function getPostsExpert(links) {
    let posts = []
    let titles = []
    let index = 0
    let count = links.length
    
        for (let i=0; i<count; i++) {
            const post = await parseNewExpert(links[i], elems.expert).then(post => post)
            index = index++
            titles.push(post.title)
            let imageLink = ''
            
            imageLink = post.image.split("background-image:url('//")[1]
            imageLink = imageLink.split("png")[0]
            console.log('Image link ======' + imageLink)
            imageLink = imageLink + 'png'
            post.image = imageLink.split('media.')[1]
            console.log('Image link ======' + imageLink)
            
            if(post.authorName == '') {
                post.authorName = 'korrespondent.net'
            }

            if (titles[i] == titles[i-1]) {
                console.log('Duplicate')
                post.title = ''
            }

            post.image = 'https://ooek.od.ua/pictures/content_images/eksp_dumka_title_img.jpg'


            if (post.title == '') {
                continue
            }
            
            // let str = post.time
            // let str1 = str.split(',')[1]
            // let str2 = str.split('1, ')[1]
            // post.time = str1 + ', ' + str2

            posts.push(post)
            await log(i, count, 1000)
            console.log(post)
        }
    
        return new Promise((resolve, reject) => {
        if (!posts.length) reject({error: 'empty'})
        resolve(posts)
    })
}

export  { parseNewExpert, parseLinksExpert, getPostsExpert }