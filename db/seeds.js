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
const booze = new Whisky({
    name: 'Booze',
    img: 'https://vignette.wikia.nocookie.net/callofduty/images/c/c9/Booze_model_BOII.png/revision/latest?cb=20140421223553',
    distillery: 'Your bathtub',
    yearMade: 2018,
    style: 'Tiger',
    yearsAged: 1,
    originCountry: 'Your Moms Place',
})
const crown = new Whisky({
    name: 'Crown Royal',
    img: 'http://cdn8.bigcommerce.com/s-e6b77/products/12519/images/12899/crown-royal-blended-canadian-whisky__79826.1496358601.220.220.jpg?c=2',
    distillery:'Crown Royal Distillery, Gimli',
    yearMade: 1939,
    style: 'Blended Canadian',
    yearsAged: 1,
    originCountry: 'Canada',

})
const yamazaki = new Whisky({
    name: 'Yamazaki 18',
    img: 'data:image/jpeg;base64,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',
    distillery: 'Yamazaki Distillery',
    yearMade: 1934,
    style: 'Single Malt',
    yearsAged: 18,
    originCountry: 'Japan',
})


//Countries-----------------------------------------------
const japan = new Country({
    country: 'Japan',
    img: 'https://www.emergogroup.com/sites/default/files/japan_japanese_flag.png',
    primaryWhiskyStyle: 'Single Malt',
    topSellingWhisky: 'Yamazaki 12 Single Malt',
    whiskyProduced: [hakushu, nikka, yamazaki]
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
    whiskyProduced: [bulleit, booze]
})
const canada = new Country({
    country: 'Canada',
    img: 'https://t3.ftcdn.net/jpg/00/54/27/10/240_F_54271016_zXrqtDpHheoGVnX11ohnn8KAJ0JtUyAK.jpg',
    primaryWhiskyStyle: 'Whats whiskey aboot',
    topSellingWhisky: "Crown Royal",
    whiskyProduced: [crown]
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
    favoriteWhisky: [hakushu, crown, ardbeg, jameson],
})
const domokun = new User({
    name: 'Domo Kun',
    img: 'https://imgs.tuts.dragoart.com/how-to-draw-domo-kun_1_000000002826_3.jpg',
    country: 'Japan',
    favoriteWhisky: [ardbeg, yamazaki],
})
const drunky = new User({
    name: 'Drunk Monkey',
    img: 'https://wedding-assets.s3.amazonaws.com/uploads/cache/attachments/portfolios/aa9ed4465fb94b99e24ce13d97ab09d1-35bbb835292e4a5b14de5ef97e848f94-940x626.jpg',
    country: 'USA',
    favoriteWhisky: [bulleit],
})
const beckham = new User({
    name: 'David Beckham',
    img: 'data:image/jpeg;base64,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',
    country: 'UK',
    favoriteWhisky: [nikka],
})
const steve = new User({
    name: 'Steve',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Steve_Buscemi_%281996%29.jpg/220px-Steve_Buscemi_%281996%29.jpg',
    country: 'Merica',
    favoriteWhisky: [booze],
})

Whisky.remove().then(() => {
    return Country.remove()
}).then(() => {
    return User.remove()
}).then(() => {
    return Country.insertMany([asia, ireland, usa, scotland, japan, canada])
}).then(() => {
    return User.insertMany([bender, domokun, drunky, winston, beckham, steve])
}).then(() => {
    console.log('Saved successfully')
    db.close()
}).catch((err) => {
    console.log(err)
    db.close()
})