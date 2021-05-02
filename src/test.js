import unirest from 'unirest'
import cheerio from 'cheerio'
import fs from 'fs'
import express from 'express'
import mongoose from 'mongoose'
import { createServer } from 'http'

// var responsedata = '';

// unirest.get('https://60343d97843b1500179324f4.mockapi.io/postsKoresp')
// .headers({'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 'accept-encoding': 'gzip, deflate, br',
//       'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, ke Gecko) Chrome/61.0.3163.100 Safari/537.36'})
// .end(function (response) {

//     console.log(response.body);
//     responsedata = response.body;
//   });

//   console.log(responsedata);

const app = express()
const port = 3000

mongoose.connect('mongodb+srv://Nikolaiev:newsagregator@cluster0.qcstf.azure.mongodb.net/thebellman?retryWrites=true&w=majority', 
{
      useNewUrlParser: true, 
})
.then(() => console.log('MongoDB is connected'))
.catch((err) => console.log(err))

const PostsSchema = new mongoose.Schema({
      url: String,
      title: String,
      preDescription: String,
      description: String,
      authorName: String,
      image: String
})

const Posts = mongoose.model('Posts', PostsSchema)

app.get('/', (req, res) => {
      console.log('/')

      Posts.insert({
      url: "https://hromadske.ua/posts/u-derzhdepi-ssha-ta-g7-vidreaguvali-na-zminu-kerivnictva-naftogazu",
      title: "У Держдепі США та G7 відреагували на зміну керівництва «Нафтогазу»",
      preDescription: "Держдеп США та посли країн «Великої сімки» відреагували на рішення уряду про зміну голови правління і наглядової ради НАК «Нафтогаз України».",
      description: "Позицію Штатів оприлюднив у Twitter речник Державного департаменту США Нед Прайс.Він наголосив на необхідності дотримуватися прозорості у кадрових питаннях.«Повага до корпоративного управління, прозорості та доброчесності під час призначення службовців в енергетичному секторі — в урядових чи державних підприємствах — є ключовим фактором для підтримки довіри до відданості України реформам», — зазначив він.У заяві послів G7 йдеться про те, що рішення Кабміну звільнити очільника «Нафтогазу» взяли до уваги. Там застерегли від політичного втручання у кадрові рішення.«Ефективне управління держпідприємствами, вільне від політичного втручання, має вирішальне значення для конкурентоспроможності, процвітання і виконання міжнародних зобов'язань України», — йдеться у повідомленні.Нагадаємо, у самому «Нафтогазі» звільнення голови правління Андрія Коболєва вважають «юридичною маніпуляцією» з боку уряду.Що передувало?Уряд 28 квітня провів засідання загальних зборів акціонерів «Нафтогазу». З’ясувалося, що збиток групи компаній «Нафтогаз» у 2020 році становив 19 млрд грн, однак у фінансовому плані компанії передбачалося отримання 11,5 млрд грн прибутку. На зборах вирішили звільнити голову правління Андрія Коболєва та призначити на його посаду Юрія Вітренка. У 2018 році він обіймав посаду виконавчого директора НАК «Нафтогаз». Детальніше про нового очільника компанії читайте в нашому матеріалі.Також 28 квітня вирішили звільнити незалежних членів Наглядової ради «Нафтогазу» та представників держави у наглядовій раді. Але вони ще продовжать виконувати свої обов’язки до обрання нових представників.",
      authorName: "Борис Ткачук",
      image: "https://www.5.ua/media/pictures/original/146560.jpg?t=1534932390"
      })
      .then((post) => res.send(post))
      .catch((err) => res.send(err))
})

const server = createServer(app)
server.listen(port, () => console.log(`Server is up. Port: ${port}`))
