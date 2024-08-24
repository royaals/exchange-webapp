import express from "express";


const BASE_ASSET = 'BTC' ;
const QUOTE_ASSET = 'USD';

const app = express();
app.use(express.json());



const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});