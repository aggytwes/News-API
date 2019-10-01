const https = require("https");
console.log("Please enter a number of one of the news source accordingly:\n");
console.log("1.bitcoin\n 2.business in US\n 3.apple\n 4.techcrunch\n 5.wsj.com\n");

process.stdin.once('data', (value)=>{

    var id = Number(value);

    const getNews =()=>{

        const urls = [
        `https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-30&sortBy=publisheAt&apiKey=a8f9d6eff5604373a7272abc6a1c4725`,
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a8f9d6eff5604373a7272abc6a1c4725`,
        `https://newsapi.org/v2/everything?q=apple&from=2019-09-29&to=2019-09-29&sorBy=popularity&apiKey=a8f9d6eff5604373a7272abc6a1c4725`,
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a8f9d6eff5604373a7272abc6a1c4725`,
        `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a8f9d6eff5604373a7272abc6a1c4725`,
        ]
        if(urls[id-1]){
            https
                .get(urls[id-1], response => {
                let data = "";
                response.on("data", news => {
                data += news;});
                response.on("end", () => {
                    res = JSON. parse(data);
                    console.log("Res", res);});
                })
                .on("error", err => {
                error = err;
                console.log("Error", err);})
        }else{
            console.log('Please enter a valid input')
        }

        }
        console.log(getNews());
    })