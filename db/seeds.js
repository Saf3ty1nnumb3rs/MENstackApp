require('dotenv').config()
const mongoose = require('mongoose')
const Whisky = require('../models/whisky')
const Country = require('../models/country')
const User = require('../models/user')


mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('open', () => {
    console.log('Successfully connected to mongoDB')
  })
  
db.on('error', (err) => {
    console.log(err)
})




const jameson = new Whisky({
    name: 'Jameson Irish Whisky',
    img: 'https://drizly-products0.imgix.net/ci_5138.png?auto=format%2Ccompress&fm=jpeg&q=20',
    distillery: 'Jameson Distillery',
    yearMade: 1780,
    style: 'Blend',
    yearsAged: 4,
    originCountry: 'Ireland',
})
const bulleit = new Whisky({
    name: 'Bulleit',
    img: 'http://www.totalwine.com/media/sys_master/twmmedia/hb8/he1/8811013505054.png',
    distillery: 'Four Roses',
    yearMade: 1999,
    style: 'Bourbon',
    yearsAged: 10,
    originCountry: 'USA',
})
const hakushu = new Whisky({
    name: 'Hakushu 12',
    img: 'https://d256619kyxncpv.cloudfront.net/gui/img/2017/04/18/8/201704188_the_hakushu_12_year_old_single_malt_whisky_shadow_original.png',
    distillery: 'Hakushu Distillery',
    yearMade: 1973,
    style: 'Single Malt',
    yearsAged: 12,
    originCountry: 'Japan',
})
const kavalan = new Whisky({
    name: 'Kavalan',
    img: 'https://www.weinquelle.com/fotos/Kavalan_Single_Malt_40_14836.jpg',
    distillery: 'King Car DIstillery',
    yearMade: 2005,
    style: 'Single Malt',
    yearsAged: 10,
    originCountry: 'Taiwan',
})
const ardbeg = new Whisky({
    name: 'Ardbeg Ten',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnvmlXITNYSDBzMSSNRdnt-5-8AftpiNIFwkpN0cYGmCN_rmB0g',
    distillery: 'Ardbeg',
    yearMade: 1815,
    style: 'Single Malt',
    yearsAged: 10,
    originCountry: 'Scotland',
})
const nikka = new Whisky({
    name: 'Taketsuru 21',
    img: 'http://www.totalwine.com/media/sys_master/twmmedia/h32/h99/9137459331102.png',
    distillery: 'Yoichi Distillery',
    yearMade: 1934,
    style: 'Single Malt',
    yearsAged: 21,
    originCountry: 'Japan',
})



const japan = new Country({
    country: 'Japan',
    img: 'data:image/jpeg;base64,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',
    primaryWhiskyStyle: 'Single Malt',
    topSellingWhisky: 'Yamazaki 12 Single Malt',
    whiskyProduced: [hakushu, nikka]
})
const scotland = new Country({
    country: 'Scotland',
    img: 'https://www.koolbadges.co.uk/images/scotland%20flag.jpg',
    primaryWhiskyStyle: 'Single Malt',
    topSellingWhisky: 'Johnnie Walker',
    whiskyProduced: [ardbeg]
})
const usa = new Country({
    country: 'United States',
    img: 'https://i.ytimg.com/vi/Fg3jrZ56whQ/hqdefault.jpg',
    primaryWhiskyStyle: 'Blended Whiskey',
    topSellingWhisky: "Jack Daniel's",
    whiskyProduced: [bulleit]
})
const ireland = new Country({
    country: 'Ireland',
    img: 'https://cdn3.bigcommerce.com/s-npe4l/products/1163/images/1336/B-PA-IRL---HIGH__71788.1477602948.380.380.jpg?c=2',
    primaryWhiskyStyle: 'Single Pot Still/Blended',
    topSellingWhisky: "Powers John's Lane",
    whiskyProduced: [jameson]
})
const asia = new Country({
    country: 'SE Asia',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61hy5zBeYQL._SY355_.jpg',
    primaryWhiskyStyle: 'Blended Whiskey',
    topSellingWhisky: "Officer's Choice Rare",
    whiskyProduced: [kavalan]
})
const bender = new User({
    name: 'Bender',
    img: 'https://memegenerator.net/img/instances/26693568/were-going-to-start-our-own-homebrew-club-with-whiskey-and-hookers.jpg',                
    country: 'Earth',
    favoriteWhisky: 'Hakushu 1200',
})
const domokun = new User({
    name: 'Domo Kun',
    img: 'https://imgs.tuts.dragoart.com/how-to-draw-domo-kun_1_000000002826_3.jpg',                
    country: 'Japan',
    favoriteWhisky: 'Whisky that is liquid',
})
Whisky.remove().then(() => {
    return Country.remove()
}).then(() => {
    return User.remove()
}).then(() => {
    return Country.insertMany([asia, ireland, usa, scotland, japan])
}).then(() => {
    return User.insertMany([])
}).then(() => {
    console.log('Saved successfully')
    db.close()
}).catch((err) => {
    console.log(err)
    db.close()
})