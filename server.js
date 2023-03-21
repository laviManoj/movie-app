const express = require("express");
const cors = require('cors');

const app =express();

const port=3001;

const movies = [

    {
        id:1,
        name:"KGF",
        rating:9,
        released_date:"12/03/20"
    },
    {
        id:2,
        name:"Vikram",
        rating:5,
        released_date:"18/03/20"
    },{
        id:3,
        name:"KGF -1",
        rating:10,
        released_date:"16/03/20"
    },
    {
        id:4,
        name:"drushya",
        rating:3,
        released_date:"11/03/20"
    },
    {
        id:5,
        name:"vedanth",
        rating:12,
        released_date:"12/03/20"
    },
    {
        id:6,
        name:"news",
        rating:8,
        released_date:"11/03/20"
    },{
        id:7,
        name:"KGF",
        rating:9,
        released_date:"1/03/20"
    },
    {
        id:8,
        name:"KGF",
        rating:9,
        released_date:"2/03/20"
    },
    {
        id:9,
        name:"KGF",
        rating:9,
        released_date:"3/03/20"
    },
    {
        id:10,
        name:"KGF",
        rating:9,
        released_date:"4/03/20"
    },{
        id:11,
        name:"KGF",
        rating:9,
        released_date:"12/03/20"
    },
    {
        id:12,
        name:"KGF",
        rating:9,
        released_date:"12/03/20"
    },
    {
        id:13,
        name:"KGF",
        rating:9,
        released_date:"12/03/20"
    },
    {
        id:14,
        name:"KGF",
        rating:9,
        released_date:"12/03/20"
    },{
        id:15,
        name:"KGF",
        rating:9,
        released_date:"12/03/20"
    },
    {
        id:16,
        name:"KGF",
        rating:9,
        released_date:"12/03/20"
    },
    {
        id:17,
        name:"KGF",
        rating:9,
        released_date:"12/03/20"
    },
    {
        id:18,
        name:"KGF",
        rating:9,
        released_date:"12/03/20"
    },{
        id:19,
        name:"KGF",
        rating:9,
        released_date:"12/03/20"
    },
    {
        id:20,
        name:"KGF",
        rating:9,
        released_date:"12/03/20"
    },
    
    
];

app.use(cors());

app.get('/movies',(req,res) =>{
    res.json(movies);
});

app.listen(port, () => {
    console.log(`Server listing ${port}`)
});