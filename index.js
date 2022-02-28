const PORT= 8000;
const axios = require('axios')
const cheerio = require('cheerio');
const express = require('express')
const cors= require('cors');
const { html } = require('cheerio/lib/static');
// to run this use 'npm run start' in the terminal 

const nbc = 'https://www.nbcnews.com/';
const app = express();
app.use(cors())
app.get('/results1', (req, res) => {
    axios(nbc)
    //var x = req.body.input
    .then(response=> {
        const article= []
        const html=response.data;
        const $=cheerio.load(html);
        $('.alacarte__headline', html).each(function(){
            const title= $(this).text();
            const url=$(this).parent().attr('href')
           
            //._13svhQIUZqD9PVzFcLwOKT styled-outbound-link
            article.push({
                title,
                url,
            })
        })
     
        res.json(article)
    }).catch(err => console.log(err))

})


const bb = 'https://www.breitbart.com/';
app.get('/results2', (req, res) => { //get results from http://localhost:8000/results2
    axios(bb) //input link into axios 
    //var x = req.body.input
    .then(response=> { //get response
        const article= []
        const html=response.data;
        const $=cheerio.load(html);
        $('.alacarte__headline', html).each(function(){
            const title= $(this).text();
            const url=$(this).parent().attr('href')
            //._13svhQIUZqD9PVzFcLwOKT styled-outbound-link
            article.push({
                title,
                url
            })
        })
     
        res.json(article)
    }).catch(err => console.log(err))

})






app.listen(PORT, () => console.log(`listening on port ${PORT}`))