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
    favoriteWhisky: [bulleit],
})
const beckham = new User({
    name: 'David Beckham',
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGBcXGBgXFxcYFxcYFxcYFxcdFxoYHSggGBslHRUYITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBQQGBwj/xABDEAABAwEFBQUFBQcDAwUAAAABAAIRAwQFEiExQVFhcZEGByKBoRMyscHwQlJywtEUYoKSorLhIzPxc3SzFRY0Q1T/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6YlCRCDhNusIrMtnt6jv2iz13NAcSRDnwzwnY6Dnp4RvC0mtTc0lrgWkajPLb8Cup96NxPp1zbqIyLW+1HlgLiDqPcHmCtEvu0Cq2i+DibTDHTtwzBnbAMcBA2IKNu5SUtROikfZjGIDJZdCwFzSd0HrMdYI5oJrtpFtem2YkkcyQQB5kBXNqsuZcDmxzSTp4HZtPm09QRsVXb2w1r/uPaeM5O+IKf8A+pQ8yTBxNP4S4nq18kczvQZFtrh0tIkkEZaeI+LzJOX7vRYTKwJIJ8NRgmdmnwMH+BQWioQcQyLSDlzmeWvoseoY0GQJj8Lsx0k+qCMOMYTs6QdfWE4mZnbn570gbJlZ9nsZdsz+P19aoMQ0d6RtDiryldLiNMuSe67MIzHxPyhBS+yAj6yTMI+sp8v1VlXsjtIj63LDq048s/PRBiznCexyRrPryUtKiczun6+tyAot2nT1XYO669ppmg8+Jubc8i3guTWdhHKY9c/Rbb3f2j2dqpNOjjhn0b6wOiDtSEBCAQhCAQhCAQhCAQhCAQhCDCvWxiowtIkEEEESCDkQQuJX72cfQeIlw1IjIiYdHEZzppOi70Qqa+LnbUBy1GfrmOPLcg4My1+ycfDI0IhYVS2FjjgPhOg2Z55ea3jtL2OcHSwEgyTlkOgiPrJaHbbIWOwn65IFqW0lpGwx6KEEknj8NfkFGxqzrJZySEDqdOW8dnHh6eiSnZXfXotiu+6ZjJbNd/Zn7RCDTbvuZ9QggbfrzXQezvYwGCZ4/wDC2G6blpsgwtosuFoCCmpdmKQEFv8AlVt4dl6MzBz6rcH1Aq61wSg57fVwholg8juhaVa7vc0AEayf0XYbzoAjrmtVvKxfDXdmDl0hBzX9kIEnfPLcnto/L1AI+Kv7bZQNeIMDZhIA9VgFkg56AaxpJA/KgwmAZRx+Y/xyhWXZt2G1UZyHtGGdnvifmfJYLqYhsZQZ+IE7jORHJSuZ46WwFw+Z/N6IPQqRNpggAEyQBJ3mE5AIQhAIQhAIQhAIQhAIQhAIIQhBj2myNeCCAuM95t3tp2kNa0AYGnIRJ2rty5R3vUYtFJ2+n8HFBz+hZN6uLtu+TpkmWdgMQr+6qUZILu67OGACFd0auwKppkxG5ZFmBlBfWe0AZdJWZTtBOzoq6lZ8p3LMBAAn6nPzQWNKoTqHfyuUdQjU5cwp7NmPdJ9PimWnF90jpl6oKu28M1r9408uOz62LYa7cjmqy1WaRuOxBp15WchsRmFq9RxE7og/H65roFssTw0ktkRu0+uS0u22YCpGx+ef1x9UFdSfDSdRIPMHI/JWVisJqVWtYC7C9j8hlhkTPkfQqvu6yucQwfeLc9ACOHXyW2W3tQbIwWay0muc3/deWk5kaCPj9AOtoWr9gr6faaMvbhOoHCSMuC2hAIQhAIQhAIQhAIQhAIQhAIQhALnXfHZvBZ6m5z2H+IBw/tcuirXu8Cwe2sNUbWAVBwLDJ/pLkHGLvfBGeXwWz3eMZESeQJWu3TVpgw9rf4h81t93W2niaAQJ2DPoAgu6VmMjLZt06arOs9Ak6gdT8YTalUBrTzGfJYFmvVpznQwR80GxMOFpkk+QH6pxtDRnAmNmvUqqZbmOaPHPIjYqG+u1dGjkxwcdu8IN7pXqynmSBzKxby7W2XQOxHgf0XI39oTWdtE8ch57lc0bTYmtaHVA50bDpnpkg32z2xtQeE+R+oTqrtnTmtQs170mzg0nUZAHyWwXdXNWCNOWnM7EGc8jAWxOuq57flHDVAAykEcDMwPMeq6DaBE71p3aehBDoyMzGoOcEHnkgrbou4irWqbBhOk65k9HK8uTtHZnkMZQwk+8XAYiTqk7trSH1Kk6w0H+HEM+iuL/ALhBdTq0mAOxEGNvFAnZAClVdTGUOeyNwkvb/TC3FUtGiDVpOgYiAHEbcLXH5q6QCEIQCEIQCEIQCEIQCEIQCEIQCbUZiBG8EdRCclQeaq1f2byx0gtJB4EGD8FY2a9Zbk6C0gg7VuXafu2c6q+pRILHEuI+0CTJ2Z5rnLqBbW9mPDhJbLgDmDnrxQbq3tEcGF2481Q07ec3AmDMjWNcwtetNqrAlpOmWg38Ni3buusrK7nte3P4goNcrXvUggPIB6qpqPGgkn1Xa+0PdzRdh9mIyzVBau697c6Znnqg1C7uzjrQweIUz+8dehlbjcHd3ZGiKtR1V5jJvgY38xPTRFj7KVGkB7ngbgt4uG6adIAgk7ydfPNBg3T2FstE+HG6djpLekgLY7LdoaI2DhHosxjmjb1/5UVstQAyhBS3qANFrF7UDVploMHOOexXd41pnNVbXSDnHy2zCDXewFoNO11GEQXNBjjJJHqenFdYs4IkkZeEDgIz66+a4tYrT7O0sqRmHYSBH3uHA9Atm7edrXUA2lRcMRbmPuZxMbzGQ4FBvFkrsdWcGkEsbp+I68NFYrkvdveBZaG43Euqy15cZJJ92fNrQutIBCEIBCEIBCEIBCEIBCEIBCEIBCEIAhcK7TWLBa6rKmcOIBgTGrScs8oXdVzbvPu6KtOuNHtwu/E3TqD/AEoOa17ONgy4rZu65+C0uH3m5eSqLVR8Ky+yVXBaqRH3o6goO/VD4WOTqj8k2iQaY4bFFWc6IbqgrqjgXQVLSo7jn9arV70vdzapY9uFw9eI6LOsF6yNZQW9cEaqsr1iss2nENVh1moK20v14qotFpjInLCSRwkCRvy+tVkXpWAOF2Q0Jnfoctx+Kore4SDiGBoGbvu4YfOu89OaChvup7Os6CDmI5ggn+70VRabS6rUdUcZc4z5n5JL0tpqVC47YHpn1iVj0TmgubvtZY+QYIgg7i0gg9c13HszfbbXQFQQHDwvb91w18jqF59ZUgytq7BX6bPamyf9OoQx44H3XfwnPlKDtqEqRAIQhAIQhAIQhAIQhAIQhAIQhAKvv66m2mg6k7Kc2n7rhofrYSrBCDgtvsz6RdTeIc0kZ7wndkagFrYTsn9FvveZdALBXaM/ddxyyPQei5V7c03hw/TpuQehLsvWmGmXDRQ1r8oNMuqNA3kgLi9m7W4DFSXDh9QmuZRtNf2ji9zczD8oGxoA91v1qg6ZftjpW6H0qgJblibBGefnp6rWiy0WY/6jSW/fGY89yls19Czup06bQynoWhusx4uOQ37Vnt7VjPLENMhs2SDqgybvvJrwIIlWNd/hxRO1VDf2aqZLfYvmMbcgTy0MjPSUV6xY1zahAwg+PPCW7CdwQUV6W3xHFsgkzoJgjpOfJaRe95h5LWSKc5TqY08hsUt/3sKjnBgDWTsHvRkI3Ny0VJKB4Klao2ZJ4KCRZVk1+PKJWECpqbteOX6+mXmg9B9lL7bbLM2qBB917dz2xPkZBHNW65t3O21obXok+Iua9o3iMLo5QF0lAIQhAIQhAIQhAIQhAIQhAIQhAIQhBg35Yfb0KlLa5pw/iGbfVefL3YWOIIggwRuIOa9Irj3e7dOC0NqtENrNPlUZAPUQZ5oOc05LxO/nt9VsDHRVxAHC4DmDEHMb5II4eaoMJHNOY6q44RJOkc0Gz2q9Gxm4SIy3jnvE+iiZfmWCk1z3SIDQSZHunbnJKsLg7E0yGvtdUDb7MEabJI+C3Cz2yyWVhFNrabAJxaGBlJyJKDQ637cwCq6i6nTHicMojjJyWLf/AGlqV2Np+6xoiNrjsxcBlA+hN2x7WPtbsA8NBp8LdC4jRz953DZzWrF31uQPLkBNCUIJAUocoS5K0oJ5UtDP66rHJ2LLot+vrkgyrFa303NfTcWuaQ5rhqCF2Dsr28oV2Btd7aNYQDiMMfxaTkOR9VxlYr6maD1ADOY0QvPvZrtTaLKR7Kp4dtN5Jpu8vsnPUQV1bs/28s1cRVc2hU2h724D+F/yMHmg2xCjo2hj82Pa4fuuB+ClhAiEIQCEIQCEIQCEIQCEIQC5x33HDZrO+P8A7S3+Zhd+RdHWgd9lDFd7Xfcr03dWvZ+ZBxmlXlPNUszAlV7SsylWBEFBkNvR+KQTwzJHn11TK9te7N7ifh5eigOXr/lQvcgVz0NTQnSgcCmucmucka1A5oUoSBJKCWic5WXSHRQWZklS1akZBAV6uxQQhKAgc1KUSnBAjSRpKsbJfVpp+5aKrPw1HAdJzVfO5Eb0Gwf+8rf/APqqdR+iFQYQkQenkIQgEIQgEIQgx7deFKiA6tVZTBMAvcGgncJKnY8EAggg6EGQeRC4z3y1ybcxk5Ms7SBuL31MR8w1vQLUbpv61WUzQrPpiZLQZYebDLT0QelVqvelZsd12kbWhj/5KjHH+kFaXdPe7WblaKDKn71Nxpu/lMg9Qqjth2+tFsb7JjRSoEHE1rpe/I++SB4f3R5yg0FK0wnuao4QSmpkmhMCdqgWUhckhZFKykoImMUrKRKyA0DZKa5xQROpkJzKe/IJRv2qOpXIII1H6IM632Z1LCHYQS2cIe1xAOmLDIactNd8LFYZnhHrP6KGi7PME79c+f8Ayskukkw0cGiAOW31J4lAkpQhCBwToUeJLKB5cklIiEC4kIQg9QIQhAIQm1KgaC5xgAEk7gBJKCO2WunSYX1XtpsGrnuDWjzK168e8C76TC8VxUOxtMFznHhMCOJMLjHbTtRUt1cvJIpNJFJmxrdhI++RmT5bFr73oNn7X39+22g18GAYGsDZmA0uiTGuao3tUdA5eXzKmBQQwk5KR7Nxj4dFG7TZ5foUDXHgoHBSOUbkDUoKUNU7G5ajogWk4DMLJ9oTs+SgaHJ8wgkLTy5KFyeSiEDQEicSkQKAglIlQIlhLhTg1A0BPaxSBiXCgaAjCpMKQhBH7Pn0QpJG9Kg9MoQhALXe8S2ild1pdMFzPZjnVIp/mnyWxLk/fde+dCyNOk1n+cspj+89EHKSmlPK2Tsr2Qfaxjc/2VPYcOJztmQJAAy1KDXaDvrmshuZAAJJyAGZJOQAA1K3q+O619Kk6rQrmqWjEabmYXEDM4SCZPCM1N3OXIyvaX13iW0Wgt2jG+YPkAeqDX7Z2HvCnR9u6zPwRiMFpcG7ywGVq2JesK1tbBwuzbqNsDXmvLd7sb7ethEN9rVwjc3G6B5DJBguSNbKeQpGNQI2mngISygM0qSUIFQklKgQJUoCcGoGwnBqlYxKXBA1jFI1qaKifiQBCSUqa8oHKOo5OlY1Z6B0lCxkqD1ShCECrzX2wvb9ptlesDLXPIZ+BsMZHMNB813jttef7NYbRVmCKZa38b/Az1cD5LzbKBjiu6dg7BNmpk5DC0x5CJ/RcOo08Tg3WSP8+i7f2AtpwCm6cQBEb+KDdWUhG5a5cdyPsLq7WOaWVapqMOkT9gxph2bws+7rdDqtKscJDiQJ1Y8y107Rnh/hUzrHjH+lUJ34iZJ097hBEfBBMaYdB+0DMgzn6ZLz92ruurZ7TVbVaRiqPc0wQ1zXOLgWzrr5LtlutdSjhDmOlwJyc2BECAT7x1MTs8hittlltDcFfA9pMYagBg8jpzQcHa1OK6D3gdh2UGG02XJgzqU5JDQT7zCfs55jZqMlz2UCpEFAQCWUiEDkoSQo6tSMtqDKYFM1irqdpIOcRt3q1fTLXFpjLaDIIOYIO1pBBB2ghBBVlYzlnuCx6lNBjCop6VRYz2oY5BnppKYxyQuQD3LHcZT6jlEHbUC+SVN9ohB6qQhCDnffZbC2y0aQP+5Vkje1jT83N6Lij2xmun9+do/1rMzdTqO/mc0fkXMTmg6P2R7INZZxaqhxVHCWtH2QdB+I5SdnUl77a+z1i1jQ4jJ4I2uBLY2QI271X3D2peyhr7gjeYOQMbYKzrntFGoMceKczsaXASeAcRPCTog26nVBqWZoIx0mtiPtNIAfrnhiTwwK4pWg0xWqnPCHOkaaYtJ3BvPNaf7YgNw+812KnP2hmHA/ukE+iu7RX9rZw2jLnVPCcWjZzeXbvnIjJBW2Woa7jGIuMScySZ2gc+AyWLfl2uYccOZmBERmfdIG4rargbTs1PC3M6vdIGI7Y3gbFgdsbwbUDMEnHLMhJJBkSNn2ggortvJ7ALNaRNCq0tzg+F4gwd2fkud37ctWyVTSqg7Sx2yoycnNPSRsK6nYLPjY2lXYILYZIIkNJJ2+Fwk8dN6yO0twG0Xe6kTiq0RjpP2ktGYPMS0+R5BxUpENKUIECdCROCBC6AirZZotrhwPjNNzdrSBiaY+6Rt3gpXBYbmkEoAt6K1sbyWiTsAHJoDWjoIVXSYXGNis6ZjkgneVG5PTHFBi1mrHKy6oWK8IHNcn4lCE9A2s5RsbKKxzSscTogkwhCMHEJUHqhCEIOK99/8A8yl/0B/5Hrm4SoQZtm908vzKwuP3+n97UIQb3af90fhPxVtdHvWnkPg5CEEjNPJqx6n+5R/7l3wKEILi8Pep/wDU/KVn2P7XmhCDzvR90cvknu2IQgGpWbUIQASVkIQLSWVuQhBK1Ru0SoQQv0WI/wCuiVCBgT9yEIMerqns91CEDUIQg//Z',
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