import unirest from 'unirest'
import cheerio from 'cheerio'


function parseNew (url, elems) {
    unirest.get(url).end( function (response) {
            const body = response.body
            const $ = cheerio.load(body)
        
            const title =$(elems.title).text().trim()
            const preDescription =$(elems.preDescription).text().trim()
            const description =$(elems.description).text().trim()
            const authorName =$(elems.authorName).text().trim().trim()
            const image =$(elems.image).attr('src')
    
        
                const post = {
                title: title,
                preDescription: preDescription,
                description: description,
                authorName: authorName,
                image: image
            }
        
            console.log(post)
            
        })
    }

export default parseNew