import express from 'express';
import cors from 'cors';
import resourceRouter from './routes/resources.js';
import resourcesData from './data/resources.js'; 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/resources', resourceRouter);
app.get('/', (req, res) => {
    console.log('Received request for /');
    console.log('Resources data:', resourcesData); 
    res.status(200).send('<h1 style="text-align: center; margin-top: 5px; ">Mood Map</h1>');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

