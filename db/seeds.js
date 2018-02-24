require('dotenv').config()
const mongoose = require('mongoose')
const Whisky = require('../models/whisky')
const Country = require('../models/country')
const User = require('../models/user')
const FavWhisky = require('../models/whisky')


mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('open', () => {
    console.log('Successfully connected to mongoDB')
})

db.on('error', (err) => {
    console.log(err)
})



//Whiskies------------------------------------------------------
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


//Countries-----------------------------------------------
const japan = new Country({
    country: 'Japan',
    img: 'https://www.emergogroup.com/sites/default/files/japan_japanese_flag.png',
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
    img: 'https://images.bigcartel.com/product_images/186663745/AMERICANFLAG1STUDIO.png?auto=format&fit=max&h=1000&w=1000',
    primaryWhiskyStyle: 'Blended Whiskey',
    topSellingWhisky: "Jack Daniel's",
    whiskyProduced: [bulleit]
})
const canada = new Country({
    country: 'Canada',
    img: 'https://t3.ftcdn.net/jpg/00/54/27/10/240_F_54271016_zXrqtDpHheoGVnX11ohnn8KAJ0JtUyAK.jpg',
    primaryWhiskyStyle: 'Whats whiskey aboot',
    topSellingWhisky: "Crown Royal",
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

//USERS-------------------------------------------------------
const winston = new User({
    name: 'Winston Churchill',
    img: 'https://quotepics.com/wp-content/uploads/2018/02/Winston-Churchill-quote-I-may-be-drunk-but-in-the-morning-Ill-be-sober-and-youll-still-be-ugly..jpg',
    country: 'UK',
    favoriteWhisky: [jameson],
})
const bender = new User({
    name: 'Bender',
    img: 'https://memegenerator.net/img/instances/26693568/were-going-to-start-our-own-homebrew-club-with-whiskey-and-hookers.jpg',
    country: 'Earth',
    favoriteWhisky: [hakushu],
})
const domokun = new User({
    name: 'Domo Kun',
    img: 'https://imgs.tuts.dragoart.com/how-to-draw-domo-kun_1_000000002826_3.jpg',
    country: 'Japan',
    favoriteWhisky: [ardbeg],
})
const drunky = new User({
    name: 'Drunk Monkey',
    img: 'https://wedding-assets.s3.amazonaws.com/uploads/cache/attachments/portfolios/aa9ed4465fb94b99e24ce13d97ab09d1-35bbb835292e4a5b14de5ef97e848f94-940x626.jpg',
    country: 'USA',
    favoriteWhisky: [nikka],
})

Whisky.remove().then(() => {
    return Country.remove()
}).then(() => {
    return User.remove()
}).then(() => {
    return Country.insertMany([asia, ireland, usa, scotland, japan, canada])
}).then(() => {
    return User.insertMany([bender, domokun, drunky, winston])
}).then(() => {
    console.log('Saved successfully')
    db.close()
}).catch((err) => {
    console.log(err)
    db.close()
})