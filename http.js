const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to my home page')
    }
    if(req.url  === '/about'){
        res.end('here is our short history')
    }
    res.end(`<h1>OOP!</h1>
      <a href="/">back home
    `)
})
server.listen(5000)
