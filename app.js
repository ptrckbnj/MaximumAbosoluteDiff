const express = require('express');
const port = process.env.PORT || 5000; // portnmber

const app = express(); // instance of express

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/form', (req, res) => {

    res.sendFile("C:/Users/Ptrckbnj/source/repos/Phitopolis/public/index.html");


})

app.post('/formPost',(req,res)=>{
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})

