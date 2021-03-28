import { parseNew, getPosts, parseLinks } from './parseNew.js'
import fs from 'fs'
import elems from './config.js'

const hromadske = 'https://hromadske.ua/posts/zyizd-suddiv-obrav-troh-chleniv-radi-suddiv-ukrayini-ale-provaliv-golosuvannya-za-svogo-predstavnika-u-ksu'
const tsn = 'https://tsn.ua/ukrayina/cifrovi-vodiyski-dokumenti-v-diyi-pririvnyani-do-yihnih-fizichnih-analogiv-1727551.html'
const unian = 'https://www.unian.ua/science/klonuvannya-u-ssha-vpershe-stvorili-klon-chornonogogo-thora-novini-11327990.html'

const saveResult = json => {
    fs.writeFile('result.json', json, err => {
        console.log('Saved!')
        if (err) console.log('not saved')
    })
}


//parseNew(hromadske, elems.hromadske)

parseLinks('https://hromadske.ua/', '.NewsBlock-container a')
.then(links => {
    getPosts(links).then(posts => saveResult(JSON.stringify(posts, 0, 4))).catch(e => console.log(e))
})
.catch(e => console.log(e))

//parseLinks('https://hromadske.ua/polityka', '.CardsList-wrapper.CardsList-wrapper_theme_light a')

// getPosts('https://hromadske.ua/posts/5-rokiv-za-zgvaltuvannya-12-za-vikradennya-avto-yaki-prioriteti-v-chinnomu-kriminalnomu-kodeksi')

















